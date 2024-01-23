import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { DespesasProvider } from "../../database/providers/despesas";

interface IQueryProps {
  page?: number;
  take?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().default(0),
      take: yup.number().default(10).moreThan(0),
      filter: yup.string().default(""),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  const result = await DespesasProvider.getAll(
    req.query.page || 0,
    req.query.take || 10,
    req.query.filter || ""
  );
  const count = await DespesasProvider.count(req.query.filter || "");

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      value: [],
      count: 0,
      hasSuccess: false,
      hasError: true,
      errors: [result.message],
      httpStatusCode: "INTERNAL_SERVER_ERROR",
      dataRequisicao: new Date().toISOString(),
    });
  }

  return res.status(StatusCodes.OK).json({
    value: result,
    count: count,
    hasSuccess: true,
    hasError: false,
    errors: [],
    httpStatusCode: "OK",
    dataRequisicao: new Date().toISOString(),
  });
};

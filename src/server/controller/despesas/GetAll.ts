import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  take?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().default(1).moreThan(0),
      take: yup.number().default(10).moreThan(0),
      filter: yup.string().default(""),
    })
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  res.setHeader("access-control-expose-headers", "X-Total-Count");
  res.setHeader("X-Total-Count", 1);

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      descricao: "Conta de luz",
      valor: 100,
      dataVencimento: "2021-05-01",
      dataDespesa: "2021-05-01",
      categoria: "Casa",
      observacao: "Conta de luz do mês de maio",
    },
  ]);
};

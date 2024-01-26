import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { InvestimentosProvider } from "../../database/providers/investimentos";

export interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro id precisa ser informado",
      },
    });
  }

  const result = await InvestimentosProvider.getById(req.params.id);
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
    count: 1,
    hasSuccess: true,
    hasError: false,
    errors: [],
    httpStatusCode: "OK",
    dataRequisicao: new Date().toISOString(),
  });
};

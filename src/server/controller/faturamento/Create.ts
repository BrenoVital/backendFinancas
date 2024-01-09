import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IFaturamento {
  id: string;
  valor: number;
  dataEntrada: string;
  categoria: string;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IFaturamento>(
    yup.object().shape({
      id: yup.string().required(),
      valor: yup.number().required(),
      dataEntrada: yup.string().required(),
      categoria: yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IFaturamento>,
  res: Response
) => {
  console.log(req.body);

  return res
    .status(StatusCodes.ACCEPTED)
    .json("Faturamento criado com sucesso");
};

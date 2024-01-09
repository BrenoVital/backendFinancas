import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

interface IDespesa {
  descricao: string;
  valor: number;
  dataVencimento: string;
  dataDespesa: string;
  categoria: string;
  observacao: string;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IDespesa>(
    yup.object().shape({
      descricao: yup.string().required().min(3),
      valor: yup.number().required(),
      dataVencimento: yup.string().required(),
      dataDespesa: yup.string().required(),
      categoria: yup.string().required(),
      observacao: yup.string().required(),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IDespesa>, res: Response) => {
  return res.status(StatusCodes.CREATED).json(1);
};

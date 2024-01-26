import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IRenda } from "../../database/models";
import { IInvestimentos } from "../../database/models/Investimentos";
import { InvestimentosProvider } from "../../database/providers/investimentos";

interface IBodyProps extends Omit<IInvestimentos, "id" | "dataVenda"> {
  descricao: string;
  valor: number;
  quantidade: number;
  acao: string;
  categoria: number;
  dividendo: number;
  dataCompra: string;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3).max(150),
      valor: yup.number().required(),
      quantidade: yup.number().required(),
      acao: yup.string().required(),
      categoria: yup.number().required(),
      dividendo: yup.number().required(),
      dataCompra: yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IInvestimentos>,
  res: Response
) => {
  const result = await InvestimentosProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};

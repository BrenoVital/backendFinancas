import { StatusCodes } from "http-status-codes";

import { IParamProps } from "./GetById";
import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { IInvestimentos } from "../../database/models/Investimentos";
import { InvestimentosProvider } from "../../database/providers/investimentos";

interface IBodyProps extends Omit<IInvestimentos, "id"> {
  descricao: string;
  valor: number;
  quantidade: number;
  acao: string;
  categoria: number;
  dividendo: number;
  dataCompra: string;
  dataVenda?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3).max(150),
      valor: yup.number().required(),
      quantidade: yup.number().required(),
      acao: yup.string().required(),
      categoria: yup.number().required(),
      dividendo: yup.number().required(),
      dataCompra: yup.string().required(),
      dataVenda: yup.string(),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro id precisa ser informado",
      },
    });
  }

  const result = await InvestimentosProvider.updateById(
    req.params.id,
    req.body
  );
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};

import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IParamProps } from "./GetById";
import { IDespesa } from "../../database/models";
import { DespesasProvider } from "../../database/providers/despesas";

interface IBodyProps extends Omit<IDespesa, "id"> {
  descricao: string;
  valor: number;
  vencimento: string;
  pagamento: string;
  categoria: string;
  observacao: string;
  pago: boolean;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3),
      valor: yup.number().required(),
      vencimento: yup.string().required(),
      pagamento: yup.string().required(),
      categoria: yup.string().required(),
      observacao: yup.string().required(),
      pago: yup.boolean().required().default(false),
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

  const result = await DespesasProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};

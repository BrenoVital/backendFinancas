import { StatusCodes } from "http-status-codes";
import { RendasProvider } from "../../database/providers/rendas";
import { IParamProps } from "./GetById";
import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { IRenda } from "../../database/models";

interface IBodyProps extends Omit<IRenda, "id"> {
  descricao: string;
  valor: number;
  dataRecebimento: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3),
      valor: yup.number().required(),
      dataRecebimento: yup.string().required(),
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

  const result = await RendasProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};

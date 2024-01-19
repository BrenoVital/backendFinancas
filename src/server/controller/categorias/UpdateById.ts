import { StatusCodes } from "http-status-codes";
import { IParamProps } from "./GetById";
import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { ICategoria } from "../../database/models";
import { CategoriasProvider } from "../../database/providers/categorias";

interface IBodyProps extends Omit<ICategoria, "id"> {
  nomeCategoria: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nomeCategoria: yup.string().required().min(3),
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

  const result = await CategoriasProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};

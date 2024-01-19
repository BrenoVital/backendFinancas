import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { ICategoria } from "../../database/models";
import { CategoriasProvider } from "../../database/providers/categorias";

interface IBodyProps extends Omit<ICategoria, "id"> {
  nomeCategoria: string;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nomeCategoria: yup.string().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, ICategoria>,
  res: Response
) => {
  const result = await CategoriasProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};

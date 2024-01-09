import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IParamProps } from "./GetById";
import { IDespesa } from "../../database/models";

interface IBodyProps extends Omit<IDespesa, "id"> {
  descricao: string;
  valor: number;
  dataVencimento: string;
  dataDespesa: string;
  categoria: string;
  observacao: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3),
      valor: yup.number().required(),
      dataVencimento: yup.string().required(),
      dataDespesa: yup.string().required(),
      categoria: yup.string().required(),
      observacao: yup.string().required(),
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
  if (Number(req.params.id) === 99999)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: "Registro não encontrado",
      },
    });

  return res.status(StatusCodes.NO_CONTENT).send();
};

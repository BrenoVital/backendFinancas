import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IRenda } from "../../database/models";

interface IBodyProps extends Omit<IRenda, "id"> {
  descricao: string;
  valor: number;
  dataRecebimento: string;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required(),
      valor: yup.number().required(),
      dataRecebimento: yup.string().required(),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IRenda>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.ACCEPTED).json("Renda criada com sucesso!");
};

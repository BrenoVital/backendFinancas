import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IDespesa {
  id: string;
  descricao: string;
  valor: number;
  dataVencimento: string;
  dataDespesa: string;
  categoria: string;
  observacao: string;
}

const bodySchema: yup.Schema<IDespesa> = yup.object().shape({
  id: yup.string().required(),
  descricao: yup.string().required().min(3),
  valor: yup.number().required(),
  dataVencimento: yup.string().required(),
  dataDespesa: yup.string().required(),
  categoria: yup.string().required(),
  observacao: yup.string().required(),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodySchema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;
      validationErrors[err.path] = err.message;
    });

    return res.status(StatusCodes.ACCEPTED).json({
      errors: validationErrors,
    });
  }
};

export const create = async (req: Request<{}, {}, IDespesa>, res: Response) => {
  console.log(req.body);
  return res.send("Criado");
};

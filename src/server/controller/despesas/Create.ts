import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IDespesa {
  id: number;
  descricao: string;
  valor: number;
  dataVencimento: string;
  dataDespesa: string;
  categoria: string;
  observacao: string;
}

const bodySchema = yup.object().shape({
  id: yup.number().required(),
  descricao: yup.string().required().min(3),
  valor: yup.number().required(),
  dataVencimento: yup.string().required(),
  dataDespesa: yup.string().required(),
  categoria: yup.string().required(),
  observacao: yup.string().required(),
});

export const create = async (req: Request<{}, {}, IDespesa>, res: Response) => {
  let validatedData: IDespesa | undefined = undefined;
  try {
    validatedData = await bodySchema.validate(req.body, { abortEarly: false });
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (!err.path) return;
      validationErrors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
  }
  console.log(validatedData);

  return res.send("Criado");
};

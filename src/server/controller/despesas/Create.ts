import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface IDespesa {
  id: string;
  descricao: string;
  valor: number;
  dataVencimento: string;
  dataDespesa: string;
  categoria: string;
  observacao: string;
}

interface IFilter {
  descricao?: string | undefined;
  categoria?: string | undefined;
  dataVencimento?: string | undefined;
  dataDespesa?: string | undefined;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IDespesa>(
    yup.object().shape({
      id: yup.string().required(),
      descricao: yup.string().required().min(3),
      valor: yup.number().required(),
      dataVencimento: yup.string().required(),
      dataDespesa: yup.string().required(),
      categoria: yup.string().required(),
      observacao: yup.string().required(),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      descricao: yup.string().min(3),
      categoria: yup.string(),
      dataVencimento: yup.string(),
      dataDespesa: yup.string(),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IDespesa>, res: Response) => {
  console.log(req.body);
  return res.send("Criado");
};

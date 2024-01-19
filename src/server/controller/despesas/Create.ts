import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IDespesa } from "../../database/models";
import { DespesasProvider } from "../../database/providers/despesas";

interface IBodyProps extends Omit<IDespesa, "id"> {
  descricao: string;
  valor: number;
  vencimento: string;
  pagamento: string;
  categoriaId: string;
  observacao: string;
  pago: boolean;
}

export const createQueryValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3).max(150),
      valor: yup.number().required(),
      vencimento: yup.string().required(),
      pagamento: yup.string().required(),
      categoriaId: yup.string().required(),
      observacao: yup.string().required(),
      pago: yup.boolean().required().default(false),
    })
  ),
}));

export const create = async (req: Request<{}, {}, IDespesa>, res: Response) => {
  const result = await DespesasProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};

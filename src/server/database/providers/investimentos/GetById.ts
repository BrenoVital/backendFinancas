import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IInvestimentos } from "../../models/Investimentos";

export const getById = async (
  id: number
): Promise<IInvestimentos | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.investimento)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("Investimento não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o investimento");
  }
};

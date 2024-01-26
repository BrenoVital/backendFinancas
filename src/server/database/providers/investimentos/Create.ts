import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IInvestimentos } from "../../models/Investimentos";

export const create = async (
  investimento: Omit<IInvestimentos, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETablesNames.investimento)
      .insert(investimento)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao criar o investimento.");
  } catch (error) {
    console.error(error);
    return Error("Erro ao criar o investimento.");
  }
};

import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IInvestimentos } from "../../models/Investimentos";

export const updateById = async (
  id: number,
  investimento: Omit<IInvestimentos, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.investimento)
      .update(investimento)
      .where("id", "=", id);
    if (result > 0) return;
    return new Error("Erro ao atualizar o investimento");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o investimento");
  }
};

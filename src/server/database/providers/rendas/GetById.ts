import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IRenda } from "../../models";

export const getById = async (
  id: number
): Promise<IRenda | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.renda)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("Renda não encontrada");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a renda");
  }
};

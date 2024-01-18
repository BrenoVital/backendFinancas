import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex/types";
import { IDespesa } from "../../models";

export const getById = async (
  id: number
): Promise<IDespesa | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.despesa)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("Despesa não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a despesa");
  }
};

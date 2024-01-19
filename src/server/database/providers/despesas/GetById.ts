import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IDespesa } from "../../models";

export const getById = async (
  id: number
): Promise<IDespesa | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.despesa)
      .join(
        ETablesNames.categoria,
        `${ETablesNames.despesa}.categoria_id`,
        "=",
        `${ETablesNames.categoria}.id`
      )
      .select(
        `${ETablesNames.despesa}.*`,
        `${ETablesNames.categoria}.nomeCategoria as categoria`
      )
      .where(`${ETablesNames.despesa}.id`, "=", id)
      .first();

    if (result) return result;

    return new Error("Despesa não encontrada");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a despesa");
  }
};

import { IDespesa } from "../../models";
import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const create = async (
  despesa: Omit<IDespesa, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETablesNames.despesa)
      .insert(despesa)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao criar despesa.");
  } catch (error) {
    console.error(error);
    return Error("Erro ao criar despesa.");
  }
};

import { ICategoria } from "../../models";
import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const create = async (
  categoria: Omit<ICategoria, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETablesNames.categoria)
      .insert(categoria)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao criar a categoria.");
  } catch (error) {
    console.error(error);
    return Error("Erro ao criar a categoria.");
  }
};

import { IRenda } from "../../models";
import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const create = async (
  renda: Omit<IRenda, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETablesNames.renda)
      .insert(renda)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao criar a renda.");
  } catch (error) {
    console.error(error);
    return Error("Erro ao criar a renda.");
  }
};

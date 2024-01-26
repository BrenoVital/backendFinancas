import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IRenda } from "../../models";

export const updateById = async (
  id: number,
  renda: Omit<IRenda, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.renda)
      .update(renda)
      .where("id", "=", id);
    if (result > 0) return;
    return new Error("Erro ao atualizar a renda");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualiza a renda");
  }
};

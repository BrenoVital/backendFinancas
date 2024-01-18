import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IDespesa } from "../../models";

export const updateById = async (
  id: number,
  despesa: Omit<IDespesa, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.despesa)
      .update(despesa)
      .where("id", "=", id);
    if (result > 0) return;
    return new Error("Erro ao atualizar a despesa");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar a despesa");
  }
};

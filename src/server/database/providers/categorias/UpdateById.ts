import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { ICategoria } from "../../models";

export const updateById = async (
  id: number,
  categoria: Omit<ICategoria, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.categoria)
      .update(categoria)
      .where("id", "=", id);
    if (result > 0) return;
    return new Error("Erro ao atualizar a categoria");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualiza a categoria");
  }
};

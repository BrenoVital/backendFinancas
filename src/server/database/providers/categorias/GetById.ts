import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { ICategoria } from "../../models";

export const getById = async (
  id: number
): Promise<ICategoria | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.categoria)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("Categoria não encontrada");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a categoria");
  }
};

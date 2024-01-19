import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { ICategoria } from "../../models";

export const getAll = async (
  page: number,
  take: number,
  filter: string
): Promise<ICategoria[] | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.categoria)
      .select("*")
      .orWhere("nomeCategoria", "like", `%${filter}%`)
      .offset(page * take)
      .limit(take);

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao buscar as categorias");
  }
};

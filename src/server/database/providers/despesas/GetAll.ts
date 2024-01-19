import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IDespesa } from "../../models";

export const getAll = async (
  page: number,
  take: number,
  filter: string
): Promise<IDespesa[] | Error | undefined> => {
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
      .orWhere("descricao", "like", `%${filter}%`)
      .offset(page * take)
      .limit(take);
    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao buscar despesas");
  }
};

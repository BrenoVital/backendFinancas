import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex/types";
import { IDespesa } from "../../models";

export const getAll = async (
  page: number,
  take: number,
  filter: string,
  id = 0
): Promise<IDespesa[] | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.despesa)
      .select("*")
      .where("id", Number(id))
      .orWhere("descricao", "like", `%${filter}%`)
      .offset((page - 1) * take)
      .limit(take);
    if (id > 0 && result.every((item) => item.id !== id)) {
      const resultBYId = await Knex(ETablesNames.despesa)
        .select("*")
        .where("id", "=", id)
        .first();
      if (resultBYId) {
        return [...result, resultBYId];
      }
    }
  } catch (error) {
    console.log(error);
    return new Error("Erro ao buscar despesas");
  }
};

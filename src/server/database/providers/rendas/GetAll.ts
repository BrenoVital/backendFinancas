import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IRenda } from "../../models";

export const getAll = async (
  page: number,
  take: number,
  filter: string
): Promise<IRenda[] | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.renda)
      .select("*")
      .orWhere("descricao", "like", `%${filter}%`)
      .offset(page * take)
      .limit(take);

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao buscar as rendas");
  }
};

import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IInvestimentos } from "../../models/Investimentos";

export const getAll = async (
  page: number,
  take: number,
  filter: string
): Promise<IInvestimentos[] | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.investimento)
      .select("*")
      .orWhere("acao", "like", `%${filter}%`)
      .offset(page * take)
      .limit(take);
    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao buscar os investimentos");
  }
};

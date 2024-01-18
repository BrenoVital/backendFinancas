import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const count = async (filter = ""): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETablesNames.despesa)
      .where("descricao", "like", `%${filter}%`)
      .count<[{ count: number }]>("* as count");

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error("Erro ao consultar a quantidade total de despesas");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a quantidade total de despesas");
  }
};

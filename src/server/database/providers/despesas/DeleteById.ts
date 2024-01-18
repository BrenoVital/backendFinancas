import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.despesa).where("id", id).del();

    if (result > 0) return;
    return new Error("Erro ao apagar a despesa");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao deletar a despesa");
  }
};

import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETablesNames.renda).where("id", id).del();

    if (result > 0) return;
    return new Error("Erro ao apagar a renda");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao deletar a renda");
  }
};

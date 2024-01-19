import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const getByEmail = async (
  email: string
): Promise<IUsuario | Error | undefined> => {
  try {
    const result = await Knex(ETablesNames.usuario)
      .select("*")
      .where("email", "=", email)
      .first();

    if (result) return result;

    return new Error("Usuário não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o usuário");
  }
};

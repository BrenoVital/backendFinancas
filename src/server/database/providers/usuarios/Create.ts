import { IUsuario } from "../../models";
import { ETablesNames } from "../../ETablesNames";
import { Knex } from "../../knex";
import { PasswordCrypto } from "../../../shared/services";
import { MailService } from "../../../shared/services/MailService";

export const create = async (
  usuario: Omit<IUsuario, "id">
): Promise<number | Error> => {
  try {
    const hashedPassword = await PasswordCrypto.hashPassowrd(usuario.senha);

    const [result] = await Knex(ETablesNames.usuario)
      .insert({ ...usuario, senha: hashedPassword })
      .returning("id");

    const mailService = new MailService();
    await mailService.sendWelcomeEmail(
      usuario.email,
      usuario.senha,
      usuario.nome
    );

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Erro ao criar o usuário");
  } catch (error) {
    console.error(error);
    return Error("Erro ao criar o usuário. ");
  }
};

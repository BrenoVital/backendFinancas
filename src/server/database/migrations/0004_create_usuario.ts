import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema.hasTable(ETablesNames.usuario).then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable(ETablesNames.usuario, (table) => {
          table.bigIncrements("id").primary().index();
          table.string("nome").notNullable().checkLength(">=", 3);
          table.string("email").unique().notNullable().checkLength(">=", 5);
          table.string("senha").index().notNullable().checkLength(">=", 6);
          table.comment("Tabela de usuários do sistema.");
        })
        .then(() => {
          console.log(`Tabela ${ETablesNames.usuario} criada com sucesso.`);
        });
    }
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.categoria).then(() => {
    console.log(`Tabela ${ETablesNames.usuario} excluída com sucesso.`);
  });
}

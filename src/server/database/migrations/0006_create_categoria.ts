import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETablesNames.categoria, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nomeCategoria").index().notNullable();
      table.comment("Tabela de categorias");
    })
    .then(() => {
      console.log(`Tabela categoria criada com sucesso.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.categoria).then(() => {
    console.log(`Tabela ${ETablesNames.categoria} excluída com sucesso.`);
  });
}

import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETablesNames.renda, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("descricao").index().notNullable();
      table.float("valor").notNullable();
      table.string("dataRecebimento").notNullable();
      table.comment("Tabela de rendas");
    })
    .then(() => {
      console.log(`Tabela ${ETablesNames.renda} criada com sucesso.`);
    });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.renda).then(() => {
    console.log(`Tabela ${ETablesNames.renda} excluída com sucesso.`);
  });
}

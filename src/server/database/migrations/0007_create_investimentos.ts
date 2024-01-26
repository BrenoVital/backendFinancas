import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETablesNames.investimento, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("descricao").notNullable();
      table.decimal("valor").notNullable();
      table.integer("quantidade").notNullable();
      table.string("acao").index().notNullable();
      table.integer("categoria").unsigned().notNullable();
      table.decimal("dividendo").notNullable();
      table.date("dataCompra").notNullable();
      table.date("dataVenda").notNullable();
      table.comment("Tabela de investimentos");
    })
    .then(() => {
      console.log(`Tabela ${ETablesNames.investimento} criada com sucesso.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.investimento).then(() => {
    console.log(`Tabela ${ETablesNames.investimento} excluída com sucesso.`);
  });
}

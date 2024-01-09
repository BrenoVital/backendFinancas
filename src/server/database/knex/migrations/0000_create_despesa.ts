import type { Knex } from "knex";
import { ETablesNames } from "../../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETablesNames.despesa, (table) => {
      table.bigIncrements("id").primary();
      table.string("descricao").notNullable();
      table.decimal("valor").notNullable();
      table.date("data_vencimento").notNullable();
      table.date("data_despesa").notNullable();
      table.string("categoria").notNullable();
      table.string("observacao").notNullable();
      table.comment("Tabela de despesas");
    })
    .then(() => {
      console.log(`Tabela ${ETablesNames.despesa} criada com sucesso.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETablesNames.despesa).then(() => {
    console.log(`Tabela ${ETablesNames.despesa} excluída com sucesso.`);
  });
}

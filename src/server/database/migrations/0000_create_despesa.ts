import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETablesNames.despesa, (table) => {
      table.bigIncrements("id").primary();
      table.string("descricao").notNullable();
      table.decimal("valor").notNullable();
      table.date("vencimento").notNullable();
      table.date("pagamento").notNullable();
      table.string("categoria").notNullable();
      table.string("observacao").notNullable();
      table.boolean("pago").notNullable().defaultTo(false);
      // table.binary("arquivo").nullable();
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

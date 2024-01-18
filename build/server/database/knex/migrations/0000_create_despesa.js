"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const ETablesNames_1 = require("../../ETablesNames");
async function up(knex) {
    return knex.schema
        .createTable(ETablesNames_1.ETablesNames.despesa, (table) => {
        table.bigIncrements("id").primary();
        table.string("descricao").notNullable();
        table.decimal("valor").notNullable();
        table.date("dataVencimento").notNullable();
        table.date("dataPagamento").notNullable();
        table.string("categoria").notNullable();
        table.string("observacao").notNullable();
        table.boolean("pago").notNullable().defaultTo(false);
        table.binary("arquivo").nullable();
        table.comment("Tabela de despesas");
    })
        .then(() => {
        console.log(`Tabela ${ETablesNames_1.ETablesNames.despesa} criada com sucesso.`);
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(ETablesNames_1.ETablesNames.despesa).then(() => {
        console.log(`Tabela ${ETablesNames_1.ETablesNames.despesa} excluída com sucesso.`);
    });
}
exports.down = down;

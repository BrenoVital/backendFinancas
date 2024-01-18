"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const count = async (filter = "") => {
    try {
        const [{ count }] = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa)
            .where("descricao", "like", `%${filter}%`)
            .count("* as count");
        if (Number.isInteger(Number(count)))
            return Number(count);
        return new Error("Erro ao consultar a quantidade total de despesas");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao consultar a quantidade total de despesas");
    }
};
exports.count = count;

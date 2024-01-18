"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const getAll = async (page, take, filter) => {
    try {
        const result = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa)
            .select("*")
            .orWhere("descricao", "like", `%${filter}%`)
            .offset(page * take)
            .limit(take);
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao buscar despesas");
    }
};
exports.getAll = getAll;

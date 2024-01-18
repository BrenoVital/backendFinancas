"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const getById = async (id) => {
    try {
        const result = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa)
            .select("*")
            .where("id", "=", id)
            .first();
        if (result)
            return result;
        return new Error("Despesa não encontrado");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao consultar a despesa");
    }
};
exports.getById = getById;

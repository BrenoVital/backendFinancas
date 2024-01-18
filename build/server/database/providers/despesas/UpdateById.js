"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const updateById = async (id, despesa) => {
    try {
        const result = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa)
            .update(despesa)
            .where("id", "=", id);
        if (result > 0)
            return;
        return new Error("Erro ao atualizar a despesa");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao atualizar a despesa");
    }
};
exports.updateById = updateById;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const deleteById = async (id) => {
    try {
        const result = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa).where("id", id).del();
        if (result > 0)
            return;
        return new Error("Erro ao apagar a despesa");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao deletar a despesa");
    }
};
exports.deleteById = deleteById;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ETablesNames_1 = require("../../ETablesNames");
const types_1 = require("../../knex/types");
const create = async (despesa) => {
    try {
        const [result] = await (0, types_1.Knex)(ETablesNames_1.ETablesNames.despesa)
            .insert(despesa)
            .returning("id");
        if (typeof result === "object") {
            return result.id;
        }
        else if (typeof result === "number") {
            return result;
        }
        return new Error("Erro ao criar despesa.");
    }
    catch (error) {
        console.error(error);
        return Error("Erro ao criar despesa.");
    }
};
exports.create = create;

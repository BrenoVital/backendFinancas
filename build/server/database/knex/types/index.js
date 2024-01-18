"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = require("knex");
const Enviroment_1 = require("./Enviroment");
const getEnviroment = () => {
    switch (process.env.NODE_ENV) {
        case "production":
            return Enviroment_1.production;
        case "test":
            return Enviroment_1.test;
        default:
            return Enviroment_1.development;
    }
};
exports.Knex = (0, knex_1.knex)(getEnviroment());

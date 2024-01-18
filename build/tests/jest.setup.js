"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testServer = void 0;
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server/server");
const types_1 = require("../server/database/knex/types");
beforeAll(async () => {
    await types_1.Knex.migrate.latest();
});
afterAll(async () => {
    await types_1.Knex.destroy();
});
exports.testServer = (0, supertest_1.default)(server_1.server);

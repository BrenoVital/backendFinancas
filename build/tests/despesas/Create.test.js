"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe("Despesas - Create", () => {
    it("Cria registro", async () => {
        const res1 = await jest_setup_1.testServer
            .post("/despesas")
            .send({ nome: "Condominio" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.CREATED);
        expect(typeof res1.body).toEqual("number");
    });
    it("Tenta criar um registro com nome muito curto", async () => {
        const res1 = await jest_setup_1.testServer.post("/despesas").send({ nome: "Ca" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.body.nome");
    });
});

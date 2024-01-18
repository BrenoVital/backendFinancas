"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe("Despesas - DeleteById", () => {
    it("Apaga registro", async () => {
        const res1 = await jest_setup_1.testServer
            .post("/despesas")
            .send({ nome: "Condominio" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.CREATED);
        const resApagada = await jest_setup_1.testServer.delete(`/despesas/${res1.body}`).send();
        expect(resApagada.statusCode).toEqual(http_status_codes_1.StatusCodes.NO_CONTENT);
    });
    it("Tenta apagar registro que não existe", async () => {
        const res1 = await jest_setup_1.testServer.delete("/despesas/99999").send();
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
    });
});

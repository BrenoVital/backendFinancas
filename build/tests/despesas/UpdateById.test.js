"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe("Despesas - UpdateById", () => {
    it("Atualiza registro", async () => {
        const res1 = await jest_setup_1.testServer.post("/despesas").send({ nome: "Faculdade" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.CREATED);
        const resAtualizada = await jest_setup_1.testServer
            .put(`/despesas/${res1.body}`)
            .send({ nome: "Breno" });
        expect(resAtualizada.statusCode).toEqual(http_status_codes_1.StatusCodes.NO_CONTENT);
    });
    it("Tenta atualizar registro que não existe", async () => {
        const res1 = await jest_setup_1.testServer
            .put("/despesas/99999")
            .send({ nome: "Breno" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
    });
});

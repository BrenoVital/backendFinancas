"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe("Despesas - GetAll", () => {
    it("Buscar todos os registros", async () => {
        const res1 = await jest_setup_1.testServer.post("/despesas").send({ nome: "Faculdade" });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.CREATED);
        const resBuscada = await jest_setup_1.testServer.get("/despesas").send();
        expect(Number(resBuscada.header["x-total-count"])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(http_status_codes_1.StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    });
});

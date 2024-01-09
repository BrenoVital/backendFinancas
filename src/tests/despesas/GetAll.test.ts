import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe("Despesas - GetAll", () => {
  it("Buscar todos os registros", async () => {
    const res1 = await testServer.post("/despesas").send({ nome: "Faculdade" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get("/despesas").send();

    expect(Number(resBuscada.header["x-total-count"])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});

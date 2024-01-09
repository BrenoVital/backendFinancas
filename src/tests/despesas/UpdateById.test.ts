import { StatusCodes } from "http-status-codes";

import { testServer } from "../jest.setup";

describe("Despesas - UpdateById", () => {
  it("Atualiza registro", async () => {
    const res1 = await testServer.post("/despesas").send({ nome: "Faculdade" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/despesas/${res1.body}`)
      .send({ nome: "Breno" });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it("Tenta atualizar registro que não existe", async () => {
    const res1 = await testServer
      .put("/despesas/99999")
      .send({ nome: "Breno" });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
});

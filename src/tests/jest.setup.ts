import supertest from "supertest";
import { Knex } from "../server/database/knex/types";
import server from "../server/server";

beforeAll(async () => {
  await Knex.migrate.latest();
});

afterAll(async () => {
  await Knex.destroy();
});

export const testServer = supertest(server);

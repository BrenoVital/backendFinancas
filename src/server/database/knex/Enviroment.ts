import { Knex } from "knex";
import path from "path";
require("dotenv").config();

const env = process.env.NODE_ENV || "development";

export const development: Knex.Config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "database.sqlite"
    ),
  },
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
  pool: {
    afterCreate: (connection: any, done: Function) => {
      connection.run("PRAGMA foreign_keys = ON", done);
    },
  },
};
export const test: Knex.Config = { ...development, connection: ":memory:" };

export const production: Knex.Config = {
  client: "pg",
  // migrations: {
  //   directory: path.resolve(__dirname, "..", "migrations"),
  // },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
  connection: {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: Number(process.env.DB_PORT || 5432),
    ssl: {
      rejectUnauthorized: false,
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
};

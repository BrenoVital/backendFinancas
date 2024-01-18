"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
const path_1 = __importDefault(require("path"));
exports.development = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path_1.default.resolve(__dirname, "..", "..", "..", "..", "database.sqlite"),
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, "..", "migrations"),
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "..", "seeds"),
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run("PRAGMA foreign_keys = ON", done);
        },
    },
};
exports.test = { ...exports.development, connection: ":memory:" };
exports.production = {
    client: "pg",
    migrations: {
        directory: path_1.default.resolve(__dirname, "..", "migrations"),
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "..", "seeds"),
    },
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DATABASE_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT || 5432),
        ssl: {
            rejectUnauthorized: false,
        },
    },
};

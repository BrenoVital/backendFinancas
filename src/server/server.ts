import express from "express";
import { router } from "./routes";
import "dotenv/config";

const server = express();

server.use(router);

export { server };

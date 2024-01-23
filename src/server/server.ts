import express from "express";
import { router } from "./routes";
import "dotenv/config";
import "./shared/services/TraducoesYup";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(",") || [],
  })
);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(express.json());

server.use(router);

export default server;

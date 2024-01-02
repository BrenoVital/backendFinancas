import { Router } from "express";
import { DespesasController } from "../controller/despesas";

const router = Router();

router.post(
  "/despesas",
  DespesasController.createBodyValidator,
  DespesasController.create
);

export { router };

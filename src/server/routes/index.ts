import { Router } from "express";
import { DespesasController } from "../controller/despesas";

const router = Router();

router.get(
  "/despesas",
  DespesasController.getAllValidation,
  DespesasController.getAll
);

router.post(
  "/despesas",
  DespesasController.createQueryValidation,
  DespesasController.create
);

export { router };

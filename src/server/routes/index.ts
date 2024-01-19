import { Router } from "express";
import { DespesasController } from "../controller/despesas";
import { RendaController } from "../controller/renda";

const router = Router();
//  DespesasController
router.get(
  "/despesas",
  DespesasController.getAllValidation,
  DespesasController.getAll
);

router.get(
  "/despesas/:id",
  DespesasController.getByIdValidation,
  DespesasController.getById
);

router.put(
  "/despesas/:id",
  DespesasController.updateByIdValidation,
  DespesasController.updateById
);

router.post(
  "/despesas",
  DespesasController.createQueryValidation,
  DespesasController.create
);

router.delete(
  "/despesas/:id",
  DespesasController.deleteByIdValidation,
  DespesasController.deleteById
);

// RendaController

router.get("/renda", RendaController.getAllValidation, RendaController.getAll);

router.get(
  "/renda/:id",
  RendaController.getByIdValidation,
  RendaController.getById
);

router.put(
  "/renda/:id",
  RendaController.updateByIdValidation,
  RendaController.updateById
);

router.post(
  "/renda",
  RendaController.create,
  RendaController.createQueryValidation
);

router.delete(
  "/renda/:id",
  RendaController.deleteByIdValidation,
  RendaController.deleteById
);

export { router };

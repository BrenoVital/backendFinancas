import { Router } from "express";
import { DespesasController } from "../controller/despesas";
import { RendasController } from "../controller/renda";

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

router.get(
  "/rendas",
  RendasController.getAllValidation,
  RendasController.getAll
);

router.get(
  "/rendas/:id",
  RendasController.getByIdValidation,
  RendasController.getById
);

router.put(
  "/rendas/:id",
  RendasController.updateByIdValidation,
  RendasController.updateById
);

router.post(
  "/rendas",
  RendasController.create,
  RendasController.createQueryValidation
);

router.delete(
  "/rendas/:id",
  RendasController.deleteByIdValidation,
  RendasController.deleteById
);

export { router };

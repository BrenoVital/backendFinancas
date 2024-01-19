import { Router } from "express";
import { DespesasController } from "../controller/despesas";
import { RendasController } from "../controller/renda";
import { CategoriasController } from "../controller/categorias";

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

// CategoriaController

router.get(
  "/categorias",
  CategoriasController.getAllValidation,
  CategoriasController.getAll
);

router.get(
  "/categorias/:id",
  CategoriasController.getByIdValidation,
  CategoriasController.getById
);

router.put(
  "/categorias/:id",
  CategoriasController.updateByIdValidation,
  CategoriasController.updateById
);

router.post(
  "/categorias",
  CategoriasController.create,
  CategoriasController.createQueryValidation
);

router.delete(
  "/categorias/:id",
  CategoriasController.deleteByIdValidation,
  CategoriasController.deleteById
);

export { router };

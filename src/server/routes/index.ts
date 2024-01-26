import { Router } from "express";
import { DespesasController } from "../controller/despesas";
import { RendasController } from "../controller/rendas";
import { CategoriasController } from "../controller/categorias";
import { UsuariosController } from "../controller/usuarios";
import { ensureAuthenticated } from "../shared/middleware";
import { InvestimentosController } from "../controller/investimentos";

const router = Router();

//  DespesasController

router.get(
  "/despesas",
  ensureAuthenticated,
  DespesasController.getAllValidation,
  DespesasController.getAll
);

router.get(
  "/despesas/:id",
  ensureAuthenticated,
  DespesasController.getByIdValidation,
  DespesasController.getById
);

router.put(
  "/despesas/:id",
  ensureAuthenticated,
  DespesasController.updateByIdValidation,
  DespesasController.updateById
);

router.post(
  "/despesas",
  ensureAuthenticated,
  DespesasController.createQueryValidation,
  DespesasController.create
);

router.delete(
  "/despesas/:id",
  ensureAuthenticated,
  DespesasController.deleteByIdValidation,
  DespesasController.deleteById
);

// RendaController

router.get(
  "/rendas",
  ensureAuthenticated,
  RendasController.getAllValidation,
  RendasController.getAll
);

router.get(
  "/rendas/:id",
  ensureAuthenticated,
  RendasController.getByIdValidation,
  RendasController.getById
);

router.put(
  "/rendas/:id",
  ensureAuthenticated,
  RendasController.updateByIdValidation,
  RendasController.updateById
);

router.post(
  "/rendas",
  ensureAuthenticated,
  RendasController.create,
  RendasController.createQueryValidation
);

router.delete(
  "/rendas/:id",
  ensureAuthenticated,
  RendasController.deleteByIdValidation,
  RendasController.deleteById
);

// CategoriaController

router.get(
  "/categorias",
  ensureAuthenticated,
  CategoriasController.getAllValidation,
  CategoriasController.getAll
);

router.get(
  "/categorias/:id",
  ensureAuthenticated,
  CategoriasController.getByIdValidation,
  CategoriasController.getById
);

router.put(
  "/categorias/:id",
  ensureAuthenticated,
  CategoriasController.updateByIdValidation,
  CategoriasController.updateById
);

router.post(
  "/categorias",
  ensureAuthenticated,
  CategoriasController.create,
  CategoriasController.createQueryValidation
);

router.delete(
  "/categorias/:id",
  ensureAuthenticated,
  CategoriasController.deleteByIdValidation,
  CategoriasController.deleteById
);

// InvestimentosController

router.get(
  "/investimentos",
  ensureAuthenticated,
  InvestimentosController.getAllValidation,
  InvestimentosController.getAll
);

router.get(
  "/investimentos/:id",
  ensureAuthenticated,
  InvestimentosController.getByIdValidation,
  InvestimentosController.getById
);

router.put(
  "/investimentos/:id",
  ensureAuthenticated,
  InvestimentosController.updateByIdValidation,
  InvestimentosController.updateById
);

router.post(
  "/investimentos",
  ensureAuthenticated,
  InvestimentosController.create,
  InvestimentosController.createQueryValidation
);

router.delete(
  "/investimentos/:id",
  ensureAuthenticated,
  InvestimentosController.deleteByIdValidation,
  InvestimentosController.deleteById
);

// LoginController

router.post(
  "/entrar",
  UsuariosController.signInValidation,
  UsuariosController.signIn
);

router.post(
  "/cadastrar",
  UsuariosController.signUpValidation,
  UsuariosController.signUp
);

export { router };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const despesas_1 = require("../controller/despesas");
const faturamento_1 = require("../controller/faturamento");
const router = (0, express_1.Router)();
exports.router = router;
//  DespesasController
router.get("/despesas", despesas_1.DespesasController.getAllValidation, despesas_1.DespesasController.getAll);
router.get("/despesas/:id", despesas_1.DespesasController.getByIdValidation, despesas_1.DespesasController.getById);
router.put("/despesas/:id", despesas_1.DespesasController.updateByIdValidation, despesas_1.DespesasController.updateById);
router.post("/despesas", despesas_1.DespesasController.createQueryValidation, despesas_1.DespesasController.create);
router.delete("/despesas/:id", despesas_1.DespesasController.deleteByIdValidation, despesas_1.DespesasController.deleteById);
// FaturamentoController
router.post("/faturamento", faturamento_1.FaturamentoController.create, faturamento_1.FaturamentoController.createQueryValidation);

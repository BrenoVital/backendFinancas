import { Router } from "express";
import { DespesasController } from "../controller/despesas";

const router = Router();

router.post("/despesas", DespesasController.create);

export { router };

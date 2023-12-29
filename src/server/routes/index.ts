import { Router } from "express";
import { DespesasCrontoller } from "../controller/despesas";

const router = Router();

router.post("/despesas", DespesasCrontoller.create);

export { router };

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = exports.updateByIdValidation = void 0;
const yup = __importStar(require("yup"));
const middleware_1 = require("../../shared/middleware");
const http_status_codes_1 = require("http-status-codes");
const despesas_1 = require("../../database/providers/despesas");
exports.updateByIdValidation = (0, middleware_1.validation)((getSchema) => ({
    body: getSchema(yup.object().shape({
        descricao: yup.string().required().min(3),
        valor: yup.number().required(),
        dataVencimento: yup.string().required(),
        dataPagamento: yup.string().required(),
        categoria: yup.string().required(),
        observacao: yup.string().required(),
    })),
    params: getSchema(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
}));
const updateById = async (req, res) => {
    if (!req.params.id) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: "O parâmetro id precisa ser informado",
            },
        });
    }
    const result = await despesas_1.DespesasProvider.updateById(req.params.id, req.body);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message,
            },
        });
    }
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json(result);
};
exports.updateById = updateById;

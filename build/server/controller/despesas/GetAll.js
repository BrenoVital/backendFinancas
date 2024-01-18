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
exports.getAll = exports.getAllValidation = void 0;
const yup = __importStar(require("yup"));
const middleware_1 = require("../../shared/middleware");
const http_status_codes_1 = require("http-status-codes");
const despesas_1 = require("../../database/providers/despesas");
exports.getAllValidation = (0, middleware_1.validation)((getSchema) => ({
    query: getSchema(yup.object().shape({
        page: yup.number().default(0),
        take: yup.number().default(10).moreThan(0),
        filter: yup.string().default(""),
    })),
}));
const getAll = async (req, res) => {
    const result = await despesas_1.DespesasProvider.getAll(req.query.page || 0, req.query.take || 10, req.query.filter || "");
    const count = await despesas_1.DespesasProvider.count(req.query.filter || "");
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message,
            },
        });
    }
    else if (count instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: count.message,
            },
        });
    }
    res.setHeader("access-control-expose-headers", "X-Total-Count");
    res.setHeader("X-Total-Count", count);
    return res.status(http_status_codes_1.StatusCodes.OK).json(result);
};
exports.getAll = getAll;

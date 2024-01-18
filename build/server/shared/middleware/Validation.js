"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);
    const errorsResult = {};
    Object.entries(schemas).forEach(([field, schema]) => {
        try {
            schema.validateSync(req[field], { abortEarly: false });
        }
        catch (error) {
            const yupError = error;
            const validationErrors = {};
            yupError.inner.forEach((err) => {
                if (!err.path)
                    return;
                validationErrors[err.path] = err.message;
            });
            errorsResult[field] = validationErrors;
        }
    });
    if (Object.entries(errorsResult).length === 0) {
        return next();
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: errorsResult,
        });
    }
};
exports.validation = validation;

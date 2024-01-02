import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError, object } from "yup";

type TProperty = "body" | "header" | "params" | "query";
type TGetSchema = <T>(schema: Schema<T>) => Schema<any>;
type TAllSchemas = Record<TProperty, Schema<any>>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([field, schema]) => {
      try {
        schema.validateSync(req[field as TProperty], { abortEarly: false });
      } catch (error) {
        const yupError = error as ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach((err) => {
          if (!err.path) return;
          validationErrors[err.path] = err.message;
        });
        errorsResult[field] = validationErrors;
      }
    });
    if (Object.entries(errorsResult).length === 0) {
      return next();
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({
        errors: errorsResult,
      });
    }
  };

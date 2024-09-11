import { ValidationError } from "express-validator";
import { CustomError } from "./customErrorAbstract";
export declare class ReqValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        message: any;
    }[];
}

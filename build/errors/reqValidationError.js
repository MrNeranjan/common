"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqValidationError = void 0;
const customErrorAbstract_1 = require("./customErrorAbstract");
class ReqValidationError extends customErrorAbstract_1.CustomError {
    constructor(errors) {
        super('Invalid request parameters');
        this.errors = errors;
        this.statusCode = 400;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, ReqValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((err) => {
            return { message: err.msg };
        });
    }
}
exports.ReqValidationError = ReqValidationError;

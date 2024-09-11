"use strict";
//;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const customErrorAbstract_1 = require("./customErrorAbstract");
class NotAuthorizedError extends customErrorAbstract_1.CustomError {
    constructor() {
        super('Not Authorized');
        this.statusCode = 401;
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Not authorized' }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;

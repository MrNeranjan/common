"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
//;
const customErrorAbstract_1 = require("./customErrorAbstract");
class DatabaseConnectionError extends customErrorAbstract_1.CustomError {
    constructor() {
        super("Error connecting to database");
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;

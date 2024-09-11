"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customErrorAbstract_1 = require("../errors/customErrorAbstract");
const errorHandler = (err, req, res, next) => {
    if (err instanceof customErrorAbstract_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [
            { message: err.message }
        ]
    });
};
exports.default = errorHandler;

"use strict";
//;
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const reqValidationError_1 = require("../errors/reqValidationError");
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new reqValidationError_1.ReqValidationError(errors.array());
    }
    next();
};
exports.validateRequest = validateRequest;

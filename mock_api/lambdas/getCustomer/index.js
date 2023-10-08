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
exports.handler = void 0;
const types_1 = require("./types");
const data = __importStar(require("./customers.json"));
const handler = (event, context) => {
    let responseObject = {
        status: 200,
        customer: null,
    };
    if (!types_1.isValidEvent) {
        return responseObject;
    }
    const customers = data;
    const filterResult = customers.filter(c => (event.identifier1.value === c.Id &&
        (event.identifier2.field === 'DOB' ?
            event.identifier2.value === c.DOB :
            event.identifier2.value === c.PIN)));
    if (filterResult.length === 0) {
        return responseObject;
    }
    responseObject.customer = filterResult[0];
    return responseObject;
};
exports.handler = handler;

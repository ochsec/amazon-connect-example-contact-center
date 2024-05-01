"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEvent = exports.isValidIdentifier = void 0;
const isValidIdentifier = (obj) => {
    return typeof obj === 'object' && typeof obj?.field === 'string' &&
        (typeof obj.value === 'string' || typeof obj.value === 'number');
};
exports.isValidIdentifier = isValidIdentifier;
const isValidEvent = (obj) => {
    return typeof obj === 'object' && (0, exports.isValidIdentifier)(obj?.identifier1) &&
        (0, exports.isValidIdentifier)(obj?.identifier2);
};
exports.isValidEvent = isValidEvent;

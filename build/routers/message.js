"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const message_1 = require("../controllers/message");
exports.router = express_1.default.Router();
exports.router.get('/', message_1.getMessages);
exports.router.post('/', message_1.addMessage);

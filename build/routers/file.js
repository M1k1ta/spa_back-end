"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const file_1 = require("../controllers/file");
exports.router = express_1.default.Router();
exports.router.use((0, express_fileupload_1.default)());
exports.router.get('/:fileId', file_1.getFiles);
exports.router.post('/', file_1.addFiles);

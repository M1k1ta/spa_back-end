"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbinit_1 = require("./utils/dbinit");
const message_1 = require("./routers/message");
const file_1 = require("./routers/file");
const PORT = process.env.PORT || 5000;
const server = (0, express_1.default)();
(0, dbinit_1.dbinit)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use('/messages', message_1.router);
server.use('/files', file_1.router);
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});

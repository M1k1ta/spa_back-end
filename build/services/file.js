"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles = exports.findFiles = void 0;
const File_1 = require("../models/File");
const findFiles = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield File_1.File.findByPk(id);
});
exports.findFiles = findFiles;
const createFiles = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield File_1.File.create(Object.assign({}, data));
});
exports.createFiles = createFiles;

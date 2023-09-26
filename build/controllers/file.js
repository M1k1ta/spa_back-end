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
exports.addFiles = exports.getFiles = void 0;
const file_1 = require("../services/file");
const getFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileId } = req.params;
    const file = yield (0, file_1.findFiles)(Number(fileId));
    if (!file) {
        res.send(400);
        return;
    }
    res.setHeader('Content-Type', file.mimetype);
    res.setHeader('Content-Disposition', `inline; filename="${file.name}"`);
    res.end(file.data);
});
exports.getFiles = getFiles;
const addFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadedFiles = req.files;
    if (!uploadedFiles) {
        res.send({ photosLinks: [], docsLinks: [] });
        return;
    }
    try {
        const savedFiles = yield Promise.all(Object.values(uploadedFiles).map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, file_1.createFiles)(file);
            return result;
        })));
        const photosLinks = [];
        const docsLinks = [];
        savedFiles.forEach(({ id, name, mimetype }) => {
            const link = `http://localhost:5000/files/${id}`;
            const file = { id, name, type: mimetype, link };
            if (mimetype === 'text/plain') {
                docsLinks.push(file);
                return;
            }
            photosLinks.push(file);
        });
        console.log(JSON.stringify(savedFiles));
        res.send({ photosLinks, docsLinks });
    }
    catch (error) {
        console.log('Error uploading files:', error);
        res.sendStatus(400);
    }
});
exports.addFiles = addFiles;

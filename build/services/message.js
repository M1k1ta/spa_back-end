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
exports.createMessage = exports.findMessages = void 0;
const Message_1 = require("../models/Message");
const findMessages = (order, sort) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Message_1.Message.findAll({
        order: [
            [sort, order],
        ],
    });
});
exports.findMessages = findMessages;
const createMessage = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Message_1.Message.create(Object.assign({}, newMessage));
});
exports.createMessage = createMessage;

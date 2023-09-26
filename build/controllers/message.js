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
exports.addMessage = exports.getMessages = void 0;
const message_1 = require("../services/message");
const groupMessagesByConversations_1 = require("../utils/groupMessagesByConversations");
const Order_1 = require("../types/Order");
const Sort_1 = require("../types/Sort");
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { order, sort, page } = req.query;
    console.log(order, sort, page);
    let parsedOrder;
    switch (order) {
        case 'asc':
            parsedOrder = Order_1.Order.Ascending;
            break;
        case 'desc':
            parsedOrder = Order_1.Order.Descending;
            break;
        default:
            parsedOrder = Order_1.Order.Ascending;
    }
    let parsedSort;
    switch (sort) {
        case 'user-name':
            parsedSort = Sort_1.Sort.UserName;
            break;
        case Sort_1.Sort.Email:
            parsedSort = Sort_1.Sort.Email;
            break;
        case 'created-at':
            parsedSort = Sort_1.Sort.Date;
            break;
        default:
            parsedSort = Sort_1.Sort.Date;
    }
    let parsedPage;
    switch (typeof Number(page)) {
        case 'number':
            parsedPage = Number(page);
            break;
        default:
            parsedPage = 1;
    }
    try {
        const messageList = yield (0, message_1.findMessages)(parsedOrder, parsedSort);
        const conversationList = (0, groupMessagesByConversations_1.groupMessagesByConversations)(messageList);
        const length = conversationList.length;
        const pagesCount = Math.ceil(length / 25);
        if (parsedPage > pagesCount) {
            parsedPage = pagesCount;
        }
        const indexes = 25 * (parsedPage - 1);
        const conversations = conversationList.splice(indexes, 25);
        // console.log(conversationList);
        res.send({ pages: pagesCount, conversations });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});
exports.getMessages = getMessages;
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, homePage, editorState, photos, docs, relatedId } = req.body;
    try {
        const newMessage = yield (0, message_1.createMessage)({ userName, email, homePage, editorState, photos, docs, relatedId });
        res.send(newMessage);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});
exports.addMessage = addMessage;

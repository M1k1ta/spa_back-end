import { Request, Response } from 'express';
import { findMessages, createMessage } from '../services/message';
import { groupMessagesByConversations } from '../utils/groupMessagesByConversations';
import { Order } from '../types/Order';
import { Sort } from '../types/Sort';

export const getMessages = async (req: Request, res: Response) => {
  const { order, sort, page } = req.query;

  console.log(order, sort, page);

  let parsedOrder: Order;

  switch (order) {
  case 'asc':
    parsedOrder = Order.Ascending;
    break;
  case 'desc':
    parsedOrder = Order.Descending;
    break;
  default:
    parsedOrder = Order.Ascending;
  }

  let parsedSort: Sort;

  switch (sort) {
  case 'user-name':
    parsedSort = Sort.UserName;
    break;
  case Sort.Email:
    parsedSort = Sort.Email;
    break;
  case 'created-at':
    parsedSort = Sort.Date;
    break;
  default:
    parsedSort = Sort.Date;
  }

  let parsedPage: number;

  switch (typeof Number(page)) {
  case 'number':
    parsedPage = Number(page);
    break;
  default:
    parsedPage = 1;
  }

  try {
    const messageList = await findMessages(parsedOrder, parsedSort);

    const conversationList = groupMessagesByConversations(messageList);

    const length = conversationList.length;
    const pagesCount = Math.ceil(length / 25);

    if (parsedPage > pagesCount) {
      parsedPage = pagesCount;
    }

    const indexes = 25 * (parsedPage - 1);
    const conversations = conversationList.splice(indexes, 25);

    // console.log(conversationList);

    res.send({ pages: pagesCount, conversations });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const addMessage = async (req: Request, res: Response) => {
  const { userName, email, homePage, editorState, photos, docs, relatedId } = req.body;

  try {
    const newMessage = await createMessage({ userName, email, homePage, editorState, photos, docs, relatedId });

    res.send(newMessage);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

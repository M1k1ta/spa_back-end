import { Message } from '../models/Message';
import { NewMessage } from '../types/NewMessage';
import { Order } from '../types/Order';
import { Sort } from '../types/Sort';

export const findMessages = async (order: Order, sort: Sort) => {
  return await Message.findAll({
    order: [
      [sort, order],
    ],
  });
};

export const createMessage = async (newMessage: NewMessage) => {
  return await Message.create({...newMessage});
};

import { Message } from '../models/Message';

interface Conversation extends Message {
  messages?: Message[],
}

export const groupMessagesByConversations = (data: Message[]) => {
  const messageList: Conversation[] = JSON.parse(JSON.stringify(data));
  const conversationList: Conversation[] = [];

  messageList.forEach((message) => {
    if (message.relatedId === null) {
      conversationList.push(message);
    }

    const dependencies = messageList.filter(({ relatedId }) => {

      return message.id === relatedId;
    });
    message.messages = dependencies;
  });

  return conversationList;
};

import { Message } from '../models/Message';

interface Conversation extends Message {
  messages?: Message[],
}

// interface M {
//   id: number,
//   text: string,
//   userName: string,
//   email: string,
//   relatedId: number | null,
//   messages?: M[],
// }

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

// const groupMessagesByConversations1 = (data: M[]) => {
//   const messageMap = new Map();
//   const conversations: M[] = [];

//   data.forEach((message) => {
//     if (message.relatedId === null) {
//       conversations.push(message);
//     } else {
//       if (!messageMap.has(message.relatedId)) {
//         messageMap.set(message.relatedId, []);
//       }
//       messageMap.get(message.relatedId).push(message);
//     }
//   });

//   conversations.forEach((conversation) => {
//     if (messageMap.has(conversation.id)) {
//       conversation.messages = messageMap.get(conversation.id);
//     }
//   });

//   return conversations;
// };


// const arr: M[] = [
//   {
//     id: 1,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: null,
//   },
//   {
//     id: 2,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: 1,
//   },
//   {
//     id: 3,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: 1,
//   },
//   {
//     id: 4,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: 2,
//   },
//   {
//     id: 5,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: null,
//   },
//   {
//     id: 6,
//     userName: 'rtyu',
//     text: '11111',
//     email: '1111',
//     relatedId: 3,
//   },
// ];

// const result = groupMessagesByConversations1(arr);
// console.log(JSON.stringify(result, null, 2));
// console.log(count);


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMessagesByConversations = void 0;
// interface M {
//   id: number,
//   text: string,
//   userName: string,
//   email: string,
//   relatedId: number | null,
//   messages?: M[],
// }
const groupMessagesByConversations = (data) => {
    const messageList = JSON.parse(JSON.stringify(data));
    const conversationList = [];
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
exports.groupMessagesByConversations = groupMessagesByConversations;
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

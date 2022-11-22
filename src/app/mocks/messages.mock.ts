import { MessagesResponse } from '../models/messages-response';

export const messagesResponseMock: MessagesResponse = {
  messages: [
    {
      id: 1,
      title: 'Hello world',
      body: 'From the backend',
    },
    {
      id: 2,
      title: 'Another message',
      body: 'From outta space',
    },
  ],
};

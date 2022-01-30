export type Dialogue = {
  sender: 'me' | 'bot';
  messages: MessageType[];
  timestamp: string;
};

export type MessageType = {
  type: 'text' | 'card' | 'image';
  value: string;
};

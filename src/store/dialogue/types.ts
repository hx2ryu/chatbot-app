export type Dialogue = {
  sender: 'me' | 'bot';
  messages: MessageType[];
  timestamp: string;
};

export type MessageType = {
  type: 'text' | 'card' | 'image';
  value: string;
  buttons?: QuickButton[];
};

export type QuickButton = {
  content: string;
  message: string;
};

export enum MessageRole {
  USER = 'user',
  BUDDY = 'buddy',
}

export interface Message {
  id: string;
  role: MessageRole;
  text: string;
}

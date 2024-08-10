import { MessageData } from './message-data';
import { User } from './user';

export interface IMessage {
  /** Message ID */
  id: number;
  /** Message owner */
  user: User;
  /** Message data */
  messageData: MessageData;
}

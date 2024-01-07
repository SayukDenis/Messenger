import User from '../User';
import Message from '../Message';

export default interface ILastWatchedMessage {
    user: User;
    value?: Message;
}
import User from '../User';
import Message from '../Message';

export default interface ILastWathedMessage {
    user: User;
    value?: Message;
}
import { ChildEntity } from 'typeorm';
import MainChat from './MainChat';

@ChildEntity()
export default class Dialogue extends MainChat {
}
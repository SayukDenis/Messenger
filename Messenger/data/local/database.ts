import { DataSource } from 'typeorm';
import 'reflect-metadata';
import User from '../Entity/User';
import Message from '../Entity/Message';
import Dialogue from '../Entity/Chats/Dialogue';
import Tab from '../Entity/Tab';
import SelfProfile from '../Entity/SelfProfile';
import Folder from '../Entity/Folder';
import Channel from '../Entity/Chats/Channel';
import Branch from '../Entity/Chats/Branch';
import Role from '../Entity/Chats/Role';
import Group from '../Entity/Chats/Group';
import Chat from '../Entity/Chats/Chat';
import MainChat from '../Entity/Chats/MainChat';

export const dataSource = new DataSource({
  database: 'messenger.db',
  type: 'expo',
  driver: require('expo-sqlite'),
  entities: [User, SelfProfile, Message, Chat, Tab, Folder, Branch,
    MainChat, Role, Dialogue, Channel, Group],
  synchronize: true,
  logging: ["error"],
});
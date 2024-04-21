import { DataSource } from 'typeorm';
import 'reflect-metadata';
import User from '../Models/User';
import Message from '../Models/Message';
import Dialogue from '../Models/Chats/Dialogue';
import Tab from '../Models/Tab';
import SelfProfile from '../Models/SelfProfile';
import Folder from '../Models/Folder';
import Channel from '../Models/Chats/Channel';
import Branch from '../Models/Chats/Branch';
import Role from '../Models/Chats/Role';
import Group from '../Models/Chats/Group';
import Chat from '../Models/Chats/Chat';
import MainChat from '../Models/Chats/MainChat';

export const dataSource = new DataSource({
  database: 'messenger.db',
  type: 'expo',
  driver: require('expo-sqlite'),
  entities: [User, SelfProfile, Message, Tab, Folder, Chat, Branch,
    MainChat, Role, Dialogue, Channel, Group],
  synchronize: true,
  dropSchema: true,
  logging: ["error"],
});
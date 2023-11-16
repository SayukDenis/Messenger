import User from '../Models/User';
import Dialogue from '../Models/Chats/Dialogue';
import Channel from '../Models/Chats/Channel';
import Group from '../Models/Chats/Group';
import Chat from '../Models/Chats/Chat';
import Folder from '../Models/Folder';
import Message from '../Models/Message.ts';
import SelfProfile from '../Models/SelfProfile';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

export const test = () => {
  console.log(FileSystem.documentDirectory);
  const db:SQLite.Database = SQLite.openDatabase("database.db");

  const user1 = new User();
  user1.name = "Vlad";
  db.transaction((tx) => {
    // Створення таблиці User з автоінкрементним полем userId
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS User (
        userId INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        numberPhone TEXT,
        nickname TEXT,
        description TEXT,
        linkToPhoto TEXT
      )
      `,
      [],
      (_, resultSet) => {
        // Таблиця створена або вже існує
        if (resultSet.rowsAffected > 0) {
          console.log('Таблиця User створена або вже існує');
        }
  
        // Вставка користувача у таблицю
        tx.executeSql(
          'INSERT INTO User (name, numberPhone, nickname, description, linkToPhoto) VALUES (?, ?, ?, ?, ?)',
          [user1.name, user1.numberPhone, user1.nickname, user1.description, user1.linkToPhoto],
          (_, insertResult) => {
            if (insertResult.rowsAffected > 0) {
              console.log('Користувач успішно доданий до таблиці User');
            } else {
              console.error('Помилка додавання користувача до таблиці User');
            }
          }
        );
      }
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT name FROM User',
      [],
      (_, resultSet) => {
        const users = [];
  
        for (let i = 0; i < resultSet.rows.length; i++) {
          const user = resultSet.rows.item(i);
          users.push(user);
        }
  
        if (users.length > 0) {
          // Виводимо ім'я першого користувача (якщо вони є)
          console.log('Ім\'я першого користувача:', users[0].name);
        } else {
          console.log('Не знайдено жодного користувача.');
        }
      }
    );
  });
    //const chat = new Chat();
    //const channel = new Channel(realm, {  title: 'Title1', chat: chat });
    //const dialogue = new Dialogue(realm, {  firstUser: user1, secondUser: user2, chat: chat });
    //const group = new Group(realm, { chatId: 1, title: 'Title1', chat: chat });
    //const folder = new Folder(realm, { folderId: 1, folderName: 'Folder1' });
  
    
  }
import User from '../Models/User';
import Dialogue from '../Models/Chats/Dialogue';
import Channel from '../Models/Chats/Channel';
import Group from '../Models/Chats/Group';
import Chat from '../Models/Chats/Chat';
import Folder from '../Models/Folder';
import Message from '../Models/Message';
import SelfProfile from '../Models/SelfProfile';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

export const test = () => {
  console.log(FileSystem.documentDirectory);
  const db: SQLite.Database = SQLite.openDatabase("database.db");

  db.transaction((tx) => {
    // Створення таблиці User з автоінкрементним полем userId
    tx.executeSql(
      `
      CREATE TABLE my_table (
        id INTEGER PRIMARY KEY,
        null_column NULL,
        integer_column INTEGER,
        real_column REAL,
        text_column TEXT,
        blob_column BLOB,
        date_column DATE,
        time_column TIME,
        datetime_column DATETIME,
        boolean_column BOOLEAN);`,
    );
  });
  console.log("Succsess")
}
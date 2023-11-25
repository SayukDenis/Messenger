import User from '../../Models/User';
import Dialogue from '../../Models/Chats/Dialogue';
import Channel from '../../Models/Chats/Channel';
import Group from '../../Models/Chats/Group';
import Chat from '../../Models/Chats/Chat';
import Folder from '../../Models/Folder';
import Message from '../../Models/Message';
import SelfProfile from '../../Models/SelfProfile';
import Tab from '../../Models/Tab';
import Model from '../../Models/Model';
import AuditLog from '../../Models/Chats/AuditLog';
import * as SQLite from 'expo-sqlite';
import Creator from './Creator';
import { generateSqlTableFields } from './generateSQL';
import * as FileSystem from 'expo-file-system';


async function readConfigFileAsync() {
  try {
    const configContent = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + './detail_conection.json', {
      encoding: FileSystem.EncodingType.UTF8
    });

    const { databaseName, databaseVersion } = JSON.parse(configContent);
    return { databaseName, databaseVersion };
    // Now you can use databaseName and databaseVersion in your application
  } catch (error) {
    console.error(error);
  }
}

// Call the function in your component or wherever needed
export function main() {

  let databaseName: string | undefined = "myDatabase.db", databaseVersion: string | undefined = "1";
  //readConfigFileAsync().then((result) => { databaseName = result?.databaseName; databaseVersion = result?.databaseVersion; })
  //if (databaseName !== undefined && databaseVersion !== undefined) {
  //  
  //} else {
  //  throw Error('error config file')
  //}
  const database = SQLite.openDatabase(databaseName, databaseVersion);
  //add schemes of all classesF
  addClasses();
  createTable();
}

function addClasses() {
  const creator = Creator.getInstance();
  creator.addClass(User);
  creator.addClass(Dialogue);
  creator.addClass(Channel);
  creator.addClass(Group);
  creator.addClass(Chat);
  creator.addClass(Folder);
  creator.addClass(Message);
  creator.addClass(SelfProfile);
  creator.addClass(Tab);
  creator.addClass(AuditLog);
}

function createTable() {
  //get out classes
  const creator = Creator.getInstance();
  // Create object for each model and add into models array 
  const modelsMap = new Map<string, { sqlCodes: string[]; priority: number }>(
    creator.outClass().map(model => [
      model.schema.name,
      {
        sqlCodes: [] as string[],
        priority: 0,
      },
    ])
  );
  //add sql code and priority
  generateSqlTableFields(creator.outClass(), modelsMap);
  console.log("\nExit\n");
  for (let model of modelsMap) {
    console.log(model[1].sqlCodes);
  }
  //TODO 
  //to create from sqlCodes one string
  //const createTableQuery = `CREATE TABLE ${schema.name} (${fields.join(', ')})`;

  //sort by priority and excecute code for each table:
  //for (const model of models.values()) {
  //TODO
  //}
}
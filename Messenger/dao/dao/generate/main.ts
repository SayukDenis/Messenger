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
  const models: Map<string, string> = createTable();
  for (const model of models)
    console.log(`Name table: ${model[0]} have sql code:\n${model[1]}\n\n`)
  console.log("\nBlayt2\n");
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

function createTable(): Map<string, string> {
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
  console.log("\nBlayt212 "+modelsMap.keys.length);
  //add sql code and priority
  generateSqlTableFields(creator.outClass(), modelsMap);
  console.log("\nExit\n"+modelsMap.keys.length);

  //create from sqlCodes one string
  const modelsSqlMap = new Map<string, string>;
  for (let modelName in modelsMap) {
    const fields = modelsMap.get(modelName)?.sqlCodes;
    if (!fields || fields.length === 0) {
      throw Error("Dao (main.ts): sqlCodes is empty.")
    }
    console.log("\nBlayt\n");
    fields.sort(sortRows);

    modelsSqlMap.set(modelName, `CREATE TABLE ${modelName} (${fields?.join(', ')})`);
  }
  return modelsSqlMap;
  //sort by priority and excecute code for each table:
  //for (const model of models.values()) {
  //TODO
  //}
}
// A function for sorting an array of strings
const sortRows = (a: string, b: string): number => {
  if (a.includes("FOREIGN KEY")) {
    return -1;
  } else if (a.includes("PRIMARY KEY")) {
    return 1;
  } else {
    return 0;
  }
};
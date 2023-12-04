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

const isEnableLog = true;

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
  //add schemes of all classes
  addClasses();
  const models: Map<string, string> = createTable();

  if (isEnableLog) {
    for (const model of models)
      console.log(`\nName table: ${model[0]}\nhave sql code:\n${model[1]}\n`)
  }
  console.log("\ndao_generate_main: End of main\n\n");
}

function addClasses() {
  const creator = Creator.getInstance();
  creator.clean();
  creator.addClass(User);
  creator.addClass(Dialogue);
  creator.addClass(Channel);
  creator.addClass(Group);
  creator.addClass(Folder);
  creator.addClass(Message);
  creator.addClass(SelfProfile);
  creator.addClass(Tab);
  creator.addClass(AuditLog);

  isEnableLog && console.log("dao_generate_addClasses: Number of class: " + creator.outClass().length);
}

function createTable(): Map<string, string> {
  const creator = Creator.getInstance();
  // Create object for each model and add into models array 
  const modelsMap = new Map<string, { sqlCodes: string[]; priority: number }>(
    creator.outClass().map(model => [
      model.schema.name, {
        sqlCodes: [] as string[],
        priority: 0,
      },
    ])
  );

  isEnableLog && console.log("dao_generate_createTable: Number of class in map: " + modelsMap.size);  
  //add sql code and priority
  generateSqlTableFields(creator.outClass(), modelsMap);
  //create from sqlCodes one string
  const modelsSqlMap: Map<string, string> = new Map();
  for (let modelName of modelsMap) {
    const fields = modelName[1]?.sqlCodes;
    if (!fields || fields.length === 0) {
      throw Error("Dao (main.ts): sqlCodes is empty.")
    }

    fields.sort(sortRows);

    modelsSqlMap.set(modelName[0], `CREATE TABLE IF NOT EXISTS ${modelName[0]} (\n${fields?.join(',\n')})`);
  }

  isEnableLog && console.log("dao_generate_createTable: Number of class in final map: " + modelsSqlMap.size);

  return modelsSqlMap;
  //sort by priority and excecute code for each table:
  //for (const model of models.values()) {
  //TODO
  //}
}

// A function for sorting an array of strings
const sortRows = (a: string, b: string): number => {
  if (a.includes("PRIMARY KEY") && !b.includes("PRIMARY KEY")) {
    return 1;
  } else if (b.includes("PRIMARY KEY") && !a.includes("PRIMARY KEY")) {
    return -1;
  } else if (a.includes("FOREIGN KEY") && !b.includes("FOREIGN KEY")) {
    return 1;
  } else if (b.includes("FOREIGN KEY") && !a.includes("FOREIGN KEY")) {
    return -1;
  } else {
    return 0;
  }
};
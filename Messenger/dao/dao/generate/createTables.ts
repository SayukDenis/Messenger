import User from '../../Models/User';
import Dialogue from '../../Models/Chats/Dialogue';
import Channel from '../../Models/Chats/Channel';
import Group from '../../Models/Chats/Group';
import Folder from '../../Models/Folder';
import Message from '../../Models/Message';
import SelfProfile from '../../Models/SelfProfile';
import Tab from '../../Models/Tab';
import Creator from './Creator';
import { generateSqlTableFields } from './generateSQL';
import Branch from '../../Models/Chats/Branch';
import Role from '../../Models/Chats/Role';
import LogWriter from '../LogWriter';
import DataBase from '../Database';
import { SQLiteDatabase } from 'expo-sqlite';


export async function createTables() {
  //add schemes of all classes
  initializeClasses();
  //create Sql code of each classes
  const models: Map<string, string> = generateTableCreationQueries();

  for (const model of models)
    LogWriter.log(`\n--Table: ${model[0]}\n${model[1]}\n`)
  LogWriter.log("\ndao_generate_main: End of main\n\n");

  const database = await DataBase.getInstance().then(db =>db.openDatabase());

  //create all table in database 
  if (database)
    for (const model of models) {
      await executeSql(database, model[1]);
      LogWriter.log(`Table "${model[0]}" was created`);
    }

}

export async function executeSql(database: SQLiteDatabase | undefined, sqlCode: string) {
  if (database == undefined)
    LogWriter.error('Error executing SQL: Database is undefined');
  else {
    await database.transactionAsync( async tx => {
       await tx.executeSqlAsync(
        sqlCode, undefined
      );
    });
  }
}

function initializeClasses() {
  const creator = Creator.getInstance();
  creator.clean();
  creator.addClass(Branch);
  creator.addClass(Channel);
  creator.addClass(Dialogue);
  creator.addClass(Group);
  creator.addClass(Role);
  creator.addClass(Folder);
  creator.addClass(Message);
  creator.addClass(SelfProfile);
  creator.addClass(Tab);
  creator.addClass(User);

  LogWriter.log("dao_generate_addClasses: Number of class: " + creator.outClass().length);
}
function generateTableCreationQueries(): Map<string, string> {
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

  LogWriter.log("dao_generate_createTable: Number of class in map: " + modelsMap.size);
  //add sql code and priority
  generateSqlTableFields(creator.outClass(), modelsMap);
  //create from sqlCodes one string
  const modelsSqlMap: Map<string, string> = new Map();
  for (let modelName of modelsMap) {
    const fields = modelName[1]?.sqlCodes;
    if (!fields || fields.length === 0) {
      throw Error("Dao (main.ts): sqlCodes is empty.")
    }

    fields.sort(sortingRows);

    modelsSqlMap.set(modelName[0], `CREATE TABLE IF NOT EXISTS ${modelName[0]} (\n${fields?.join(',\n')});`);
  }

  return modelsSqlMap;
}
function sortingRows(a: string, b: string): number {
  if (a.includes("PRIMARY KEY") && !b.includes("PRIMARY KEY"))
    return 1;
  else if (b.includes("PRIMARY KEY") && !a.includes("PRIMARY KEY"))
    return -1;
  else if (a.includes("FOREIGN KEY") && !b.includes("FOREIGN KEY"))
    return 1;
  else if (b.includes("FOREIGN KEY") && !a.includes("FOREIGN KEY"))
    return -1;
  else
    return 0;
}

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
import { Open } from '../dao';

const isEnableLog = true;

export function createTables() {
  const database = Open()
  //add schemes of all classes
  addClasses();
  const models: Map<string, string> = createTable();

  if (isEnableLog) {
    for (const model of models)
      console.log(`\nName table: ${model[0]}\nhave sql code:\n${model[1]}\n`)
    console.log("\ndao_generate_main: End of main\n\n");
  }

  //create all table in database // TODO
}

function addClasses() {
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

  return modelsSqlMap;
  //sort by priority and execute code for each table   TODO
}

// A function for sorting an array of strings
const sortRows = (a: string, b: string): number => {
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
};
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
  initializeClasses();
  //create Sql code of each classes
  const models: Map<string, string> = generateTableCreationQueries();

  const tableOrder = addingDependencies(models);
  //sort by priority
  const sortedModels = sortModels(models, tableOrder);

  if (isEnableLog) {
    for (const model of sortedModels)
      console.log(`\nName table: ${model[0]}\nhave sql code:\n${model[1]}\n`)
    console.log("\ndao_generate_main: End of main\n\n");
  }
  //create all table in database 

  for (const model in models) {

  }

}

//with sorting by priority
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

  isEnableLog && console.log("dao_generate_addClasses: Number of class: " + creator.outClass().length);
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

    fields.sort(sortingRows);

    modelsSqlMap.set(modelName[0], `CREATE TABLE IF NOT EXISTS ${modelName[0]} (\n${fields?.join(',\n')});`);
  }

  return modelsSqlMap;
}
// A function for sorting an array of strings
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

interface TableInfo {
  tableName: string;
  dependencies: string[];
}

function addingDependencies(models: Map<string, string>): TableInfo[] {
  const tableOrder: TableInfo[] = [];

  for (const model of Creator.getInstance().outClass()) {
    tableOrder.push({ tableName: model.schema.name, dependencies: [] })
  }

  for (const model in models) {
    const sqlCode: string = models[model].sqlCodes;
    const tableNames = sqlCode.match(/\bREFERENCES\s(\w+)\(/g).map(match => match.match(/\bREFERENCES\s(\w+)\(/)[1]);

    for (const table of tableNames) {
      tableOrder[table].dependencies.push(model);
    }
  }
  return tableOrder;
}

const tableOrder: TableInfo[] = [
  { tableName: "roles", dependencies: [] },
  { tableName: "channels", dependencies: ["roles"] },
  { tableName: "dialogues", dependencies: ["roles"] },
  { tableName: "groups", dependencies: ["roles"] },
  { tableName: "tabs", dependencies: [] },
  { tableName: "users", dependencies: [] },
  { tableName: "selfProfiles", dependencies: ["users"] },
  { tableName: "branches", dependencies: [] },
  { tableName: "messages", dependencies: ["branches", "channels", "dialogues", "groups", "users"] },
  { tableName: "folders", dependencies: ["tabs"] },
];

function sortModels(models: Map<string, string>, tableOrder: TableInfo[]): Map<string, string> {
  const sortedModels: Map<string, string> = new Map();
  while (tableOrder.length > 0) {
    for (let i = 0; i < tableOrder.length; i++) {
      const tableInfo = tableOrder[i];
      const dependenciesMet = tableInfo.dependencies.every((dep) => sortedModels.has(dep));

      if (dependenciesMet) {
        const tableName = tableInfo.tableName;
        sortedModels.set(tableName, models.get(tableName)!);
        tableOrder.splice(i, 1);
        i--; // Adjust index after removal
      }
    }
  }
  return sortedModels;
}

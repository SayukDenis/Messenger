import User from '../Models/User';
import Dialogue from '../Models/Chats/Dialogue';
import Channel from '../Models/Chats/Channel';
import Group from '../Models/Chats/Group';
import Chat from '../Models/Chats/Chat';
import Folder from '../Models/Folder';
import Message from '../Models/Message';
import SelfProfile from '../Models/SelfProfile';
import Tab from '../Models/Tab';
import Model from '../Models/Model';
import AuditLog from '../Models/Chats/AuditLog';
import * as SQLite from 'expo-sqlite';
import Creator from './Creator';
const fs = require('fs');

const {
  databaseName,
  databaseVersion
} = JSON.parse(fs.readFileSync('../config.json', 'utf8'));

const database = SQLite.openDatabase(databaseName, databaseVersion);

export function addClasses() {
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

const models = []; // Pre-initialize the array of models
export function createTable() {
  const creator = Creator.getInstance();

  for (const model of creator.outClass()) {
    // Create object for each model and add into models array 
    models.push({
      [model.schema.name]: {
        sqlCodes: [], // sql code
        priority: 0, //the more, the earlier it is created
      }
    });
  }
  for (const model in models) {
    //create sql code and priority
    models[model].sqlCode = generateCreateTableQuery(models[model]);
  }
  //sort by priority and create :

}
function generateCreateTableQuery(model: Model): string {
  const schema = model.schema
  const fields = [];

  for (const fieldName in schema.properties) {
    const fieldSchema = schema.properties[fieldName];

    if (!mapTypeToSQL(model, fieldSchema)) {
      continue; //if list - go to next iteration
    }
    let fieldDeclaration = `${fieldName} ${mapTypeToSQL(model, fieldSchema)}`;
    //field PK
    if (fieldName === schema.primaryKey) {
      fieldDeclaration += ' PRIMARY KEY';
    }
    //field default
    if (fieldSchema.default !== undefined) {
      fieldDeclaration += ` DEFAULT ${formatDefaultValue(fieldSchema.default, fieldSchema.type)}`;
    }
    //field optional
    if (fieldSchema.optional) {
      fieldDeclaration += ' NOT NULL'
    }

    fields.push(fieldDeclaration);
  }

  const createTableQuery = `CREATE TABLE ${schema.name} (${fields.join(', ')})`;

  return createTableQuery;
}

function formatDefaultValue(defaultValue, fieldType) {
  // Format default values based on the field type
  switch (fieldType) {
    case 'integer':
      return defaultValue.toString();
    case 'text':
    case 'string':
      return defaultValue;
    case 'bool':
      return defaultValue ? '1' : '0';
    case 'date':
      return defaultValue.toString();;
    case 'list':
      throw new Error("List can`t have default type");
    default:
      throw new Error("Unknown type");
  }
}

function mapTypeToSQL(model: Model, fieldSchema) {
  const schema = model.schema;
  let type;
  if (typeof fieldSchema === 'string') {
    type = fieldSchema;
  } else if (typeof fieldSchema === 'object') {
    type = fieldSchema.type;
  } else {
    throw new Error("What the hell is this type?")
  }
  switch (type) {
    case 'integer':
      return 'INTEGER';
    case 'text':
    case 'string':
      return 'TEXT';
    case 'bool':
      return 'INTEGER';
    case 'date':
      return 'INTEGER';
    case 'list':
      const name_ref_table: string = (fieldSchema.objectType as Model).schema.name;
      //add fieled
      models[name_ref_table].sqlCodes.add(`${schema.primaryKey} INTEGER`);
      //add REFERENCE
      models[name_ref_table].sqlCodes.add(`FOREIGN KEY (${schema.primaryKey}) REFERENCES ${schema.name}(${schema.primaryKey})`);
      //we don't write anything sql code for this table
      return false;

    case 'enum': //add enum
      return 'INTEGER';
    case 'class':
    //one-to-one reference
    //write reference in this table 
    case 'interface':
    //write fieled interface in sapareta field

    default:
      throw new Error("Unknown type");
  }
}


//// Перевірка, чи IUserReaction є enum
//if (Object.values(IUserReaction).every(value => typeof value === 'number' || typeof value === 'string')) {
//  console.log('enum');
//} 
//// Перевірка, чи IUserReaction є class
//else if (typeof IUserReaction === 'function') {
//  console.log('class');
//} 
//// Перевірка, чи IUserReaction є interface
//else {
//  console.log('interface');
//}



export { Creator };
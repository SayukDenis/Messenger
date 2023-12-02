import Model from '../../Models/Model';

export function generateSqlTableFields(
    models: Model[], modelsMap: Map<string, { sqlCodes: string[]; priority: number }>) {
    
    for (const model of models) {
        const schema = model.schema;
        const sqlCodes = modelsMap.get(schema.name)?.sqlCodes!;
        //add primay key
        sqlCodes.push(`PRIMARY KEY (${schema.primaryKey})`);
        //add fields and type
        for (const fieldName in schema.properties) {
            const fieldSchema = schema.properties[fieldName];
            let fieldDeclaration: string = '';

            if (typeof fieldSchema === 'string') {
                // Check if the fieldSchema ends with '?'
                const isNullable = fieldSchema.endsWith('?');
                // Remove the '?' and determine the new fieldDeclaration
                const cleanedFieldSchema = isNullable ? fieldSchema.slice(0, -1) : fieldSchema;
                fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(cleanedFieldSchema)}${isNullable ? '' : ' NOT NULL'}`;
            } else if (typeof fieldSchema === 'object') {
                if (isPrimitiveType(fieldSchema.type)) {
                    fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(fieldSchema.type)}`;
                } else {
                    const typeSQL = mapTypeToSQL(modelsMap, model.schema, fieldSchema);
                    if (typeSQL !== undefined)
                        fieldDeclaration = `${fieldName} ${typeSQL}`;
                    else
                        continue;
                }
                //field optional
                if (fieldSchema.optional !== undefined || fieldSchema.optional) {
                    fieldDeclaration += ' NOT NULL'
                }
            } else {
                throw new Error("What the hell is this type? (" + fieldSchema.type + " )" +schema.name + fieldName)
            }
            //field default
            if (fieldSchema.default !== undefined) {
                fieldDeclaration += ` DEFAULT ${formatDefaultValue(fieldSchema.default, fieldSchema.type)}`;
            }
            sqlCodes.push(fieldDeclaration);
        }
    }
    console.log("fuck" +modelsMap.values.length);
}
function mapTypeToSQL(modelsMap: Map<string, { sqlCodes: string[]; priority: number }>,
    schema: {
        name: string;
        properties: Record<string, any>;
        primaryKey?: string;
        embedded?: boolean;
    },
    fieldSchema: { type: string, objectType: any, optional?: boolean }): string | undefined {
    switch (fieldSchema.type) {
        case 'enum':
            return 'INTEGER';
        case 'interface':
            return 'TEXT';
        case 'list':
            if (isPrimitiveType(fieldSchema.objectType)) {
                //if an array of primitive types - strore like JSON string
                //return mapPrimitiveTypeToSQL(fieldSchema.objectType);
                return 'TEXT';
            } else if (fieldSchema.objectType.constructor === Object) { //interface    
                //createListInterfaces(modelsMap, schema, fieldSchema);
                //if an array of interface - strore like JSON string
                return 'TEXT';
            } else { //class           
                const name_ref_table: string = (fieldSchema.objectType as Model).schema.name;
                //add fieled in the other model
                modelsMap.get(name_ref_table)?.sqlCodes.push(`${schema.primaryKey} INTEGER`);
                //add REFERENCE in the other model
                modelsMap.get(name_ref_table)?.sqlCodes
                    .push(`FOREIGN KEY (${schema.primaryKey}) REFERENCES ${schema.name}(${schema.primaryKey})`);
            }
            break;
        case 'class': //one-to-one reference
            //write reference in this table 
            const schema_ref_table = (fieldSchema.objectType as Model).schema;
            `FOREIGN KEY (${schema.primaryKey}) REFERENCES ${schema_ref_table.name}(${schema_ref_table.primaryKey})`
            return 'INTEGER';
        default:
            throw new Error("GenerateSql(mapToSQl): Unknown type " + fieldSchema.objectType + " " + schema.name);
    }
}
function formatDefaultValue(defaultValue: any, fieldType: string): string {
    // Format default values based on the field type
    switch (fieldType) {
        case 'integer':
        case 'date':
        case 'symbol':
            return defaultValue.toString();
        case 'text':
        case 'string':
            return defaultValue;
        case 'bool':
            return defaultValue ? '1' : '0';
        case 'date':
            return Math.floor((defaultValue as Date).getTime() / 1000).toString();
        case 'list':
            throw new Error("List can`t have default type");
        default:
            throw new Error("Unknown type");
    }
}
function mapPrimitiveTypeToSQL(type: string) {
    switch (type) {
        case 'integer':
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'bool':
        case 'date':
            return 'INTEGER';
        case 'text':
        case 'string':
        case 'symbol':
            return 'TEXT';
        default:
            throw new Error("Unknown type");
    }
}
function isPrimitiveType(type: string): boolean {
    switch (type) {
        case 'integer':
        case 'number':
        case 'bigint':
        case 'bool':
        case 'boolean':
        case 'date':
        case 'text':
        case 'string':
        case 'symbol':
            return true;
        default:
            return type === null; // Також перевіряємо на null
    }
}

function createListInterfaces() {
    //add interface - crate new table
    //future?
} 

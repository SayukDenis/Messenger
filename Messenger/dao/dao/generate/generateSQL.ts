import Model from '../../Models/Model';

export function generateSqlTableFields(models: Model[], modelsMap: Map<string, { sqlCodes: string[]; priority: number }>): void {
    for (const model of models) {
        const schema = model.schema;
        if (schema.embedded == true) {
            throw Error("dao_generateSQl: Embedded model in list ")
        }
        const sqlCodes = modelsMap.get(schema.name)?.sqlCodes!;
        //add primay key
        sqlCodes.push(`PRIMARY KEY (${schema.primaryKey})`);
        //add fields and type
        for (const fieldName in schema.properties) {
            const fieldDeclaration = generateFieldDeclaration(fieldName, modelsMap, schema);
            if (fieldDeclaration != null) { sqlCodes.push(fieldDeclaration); }
        }
    }
}

//return sql code to insert or null 
function generateFieldDeclaration(fieldName: string, modelsMap: Map<string, { sqlCodes: string[]; priority: number }>, schema: {
    name: string;
    properties: Record<string, any>;
    primaryKey?: string;
    embedded?: boolean;
}): string | null {
    const fieldSchema = schema.properties[fieldName];
    let fieldDeclaration: string = '';
    switch (typeof fieldSchema) {
        case 'string':
            const isNullable = fieldSchema.endsWith('?'); // Check if the fieldSchema ends with '?'        
            const cleanedFieldSchema = isNullable ? fieldSchema.slice(0, -1) : fieldSchema; // Remove the '?' and determine the new fieldDeclaration
            fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(cleanedFieldSchema)}${isNullable ? '' : ' NOT NULL'}`;
            break;
        case 'object':
            if (isPrimitiveType(fieldSchema.type)) {
                fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(fieldSchema.type)}`;
            } else {
                const typeSQL: string | null = mapTypeToSQL(modelsMap, schema, fieldSchema);
                if (typeSQL != null)
                    fieldDeclaration = `${fieldName} ${typeSQL}`;
                else
                    return null;
            }
            //field optional
            if (fieldSchema.optional !== undefined || fieldSchema.optional) { fieldDeclaration += ' NOT NULL' }
            break;
        default:
            throw new Error(`dao_generatefieldDeclaration: unknown type: ${fieldSchema.type} has type: ${fieldSchema.type}`);
    }
    //field default
    if (fieldSchema.default !== undefined)
        fieldDeclaration += ` DEFAULT ${formatDefaultValue(fieldSchema.default, fieldSchema.type)}`;

    return fieldDeclaration;
}

function mapTypeToSQL(modelsMap: Map<string, { sqlCodes: string[]; priority: number }>,
    schema: {
        name: string;
        properties: Record<string, any>;
        primaryKey?: string;
        embedded?: boolean;
    },
    fieldSchema: { type: string, objectType: any, optional?: boolean }): string | null {

    switch (fieldSchema.type) {
        case 'enum':
            return 'INTEGER';
        case 'interface':
            return 'TEXT';
        case 'list':
            if (isPrimitiveType(fieldSchema.objectType)) {
                return 'TEXT'; //if an array of primitive types - strore like JSON string
            } else if (fieldSchema.objectType.constructor === Object) { //interface                    
                return 'TEXT'; //if an array of interface - strore like JSON string
            } else { //class           
                const name_ref_table: string = (fieldSchema.objectType as Model).schema.name;
                //add fieled and REFERENCE in the binding model
                modelsMap.get(name_ref_table)?.sqlCodes.push(`${schema.primaryKey} INTEGER`);
                modelsMap.get(name_ref_table)?.sqlCodes
                    .push(`FOREIGN KEY (${schema.primaryKey}) REFERENCES ${schema.name}(${schema.primaryKey})`);
                return null;
            }
        case 'class':
            const embeddedSchema = (fieldSchema.objectType as Model).schema;
            if (embeddedSchema.embedded == true) {//embedded
                
                for (let field in embeddedSchema.properties) {
                    console.log(field);
                    const fieldSQl: string | null = generateFieldDeclaration(field, modelsMap, embeddedSchema);
                    if (fieldSQl != null)
                        modelsMap.get(schema.name)?.sqlCodes.push(fieldSQl);
                }
                
                return null;
            } else { //one-to-one reference
                //write reference in this table 
                const schema_ref_table = (fieldSchema.objectType as Model).schema;
                modelsMap.get(schema.name)?.sqlCodes
                    .push(`FOREIGN KEY (${schema.primaryKey}) REFERENCES ${schema_ref_table.name}(${schema_ref_table.primaryKey})`);
                return 'INTEGER';
            }
        default:
            throw new Error("dao_generateSql_mapToSQl: Unknown type " + fieldSchema.objectType + " " + schema.name);
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

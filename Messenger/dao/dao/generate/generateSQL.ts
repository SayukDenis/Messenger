import Model from '../../Models/Model';

export function generateSqlTableFields(models: Model[], modelsMap: Map<string, { sqlCodes: string[]; priority: number }>): void {
    for (const model of models) {
        const schema = model.schema;
        if (schema.embedded == true) {
            throw Error(`dao_generateSQl: Embedded model(${schema.name}) in list to generate`)
        }
        const sqlCodes = modelsMap.get(schema.name)?.sqlCodes!;
        //add primary key
        sqlCodes.push(`PRIMARY KEY (${schema.primaryKey})`);
        //add fields and type
        for (const fieldName in schema.properties) {

            const fieldDeclaration = generateFieldDeclaration(fieldName, modelsMap, schema);
            if (fieldDeclaration != null) {
                sqlCodes.push(fieldDeclaration);
            }
        }
    }
}

//return sql code the field or null 
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
            const isNullable = fieldSchema.endsWith('?'); // Check if the fieldSchema is nullable     
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
            throw new Error(`dao_generateFieldDeclaration: unknown type: ${fieldSchema.type} has type: ${fieldSchema.type}`);
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
                return 'TEXT';
            } else if (fieldSchema.objectType.constructor === Object) { //interface                    
                return 'TEXT';
            } else { //class           
                const name_ref_table: string = (fieldSchema.objectType as Model).schema.name;
                //add field and REFERENCE in the binding model
                modelsMap.get(name_ref_table)?.sqlCodes.push(`${schema.primaryKey} INTEGER`);
                modelsMap.get(name_ref_table)?.sqlCodes
                    .push(`FOREIGN KEY (${schema.primaryKey}_${fieldSchema}_fk) REFERENCES ${schema.name}(${schema.primaryKey})`);
                return null;
            }
        case 'class':
            const schema_ref_table = (fieldSchema.objectType as Model).schema;
            modelsMap.get(schema.name)?.sqlCodes   //Маємо проблему бо у поля що створиться не буде fk, а у fk  - воно буде?
                .push(`FOREIGN KEY (${fieldSchema}_fk) REFERENCES ${schema_ref_table.name}(${schema_ref_table.primaryKey})`);
            return 'INTEGER';
        default:
            throw new Error("dao_generateSql_mapToSQl: Unknown type " + fieldSchema.objectType + " " + schema.name);
    }
}
function formatDefaultValue(defaultValue: any, fieldType: string) { // мені не подобається (дуже)
    // Format default values based on the field type
    switch (fieldType) {
        case 'integer':
            return defaultValue;
        case 'text':
        case 'string':
            return defaultValue;
        case 'bool':
            return (defaultValue as boolean).toString();
        case 'date':
            return (defaultValue as Date).getTime();
        default:
            throw new Error(`dao_generateSql_formatDefaultValue: Unknown type ${fieldType}`);
    }
}

function isPrimitiveType(type: string): boolean {
    switch (type) {
        case 'integer':
        case 'bigint':
        case 'real':
        case 'boolean':
        case 'date':
        case 'text':
        case 'string':
        case 'blob':
        case 'null':
            return true;
        default:
            return false;
    }
}
function mapPrimitiveTypeToSQL(type: string) {
    if (!isPrimitiveType(type))
        throw new Error(`dao_generateSql_mapPrimitiveTypeToSQL: Unknown primitive type: ${type}`);
    switch (type) {
        case 'integer':
        case 'bigint':
            return 'INTEGER';
        case 'real':
            return 'REAL';
        case 'boolean':
            return 'BOOLEAN';
        case 'date':
            return 'DATETIME';
        case 'text':
        case 'string':
            return 'TEXT';
        case 'blob':
            return 'BLOB';
        case 'null':
            return 'NULL';
    }
}
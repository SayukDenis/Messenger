import Model from '../../Models/Model';

export function generateSqlTableFields(models: Model[], modelsMap: Map<string, { sqlCodes: string[]; priority: number }>): void {
    for (const model of models) {
        const schema = model.schema;

        if (schema.embedded == true) {
            throw Error(`dao_generateSQl: Embedded model(${schema.name}) in list to generate`)
        }

        const sqlCodes = modelsMap.get(schema.name)?.sqlCodes!;
        sqlCodes.push(`PRIMARY KEY (${schema.primaryKey})`); //add primary key

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

    if (typeof fieldSchema == 'string') {

        const isNullable = fieldSchema.endsWith('?'); // Check if the fieldSchema is nullable     
        const cleanedFieldSchema = isNullable ? fieldSchema.slice(0, -1) : fieldSchema; // Remove the '?' and determine the new fieldDeclaration
        fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(cleanedFieldSchema)}${isNullable ? '' : ' NOT NULL'}`;

    } else if (typeof fieldSchema == 'object') {

        if (isPrimitiveType(fieldSchema.type)) {
            fieldDeclaration = `${fieldName} ${mapPrimitiveTypeToSQL(fieldSchema.type)}`;
        } else {

            let typeSQL: string | null;

            switch (fieldSchema.type) {
                case 'enum':
                    typeSQL = 'INTEGER';
                    break;
                case 'interface':
                    typeSQL = 'TEXT';
                    break;
                case 'list':
                    if (isPrimitiveType(fieldSchema.objectType)) {
                        typeSQL = 'TEXT';
                    } else if (fieldSchema.objectType.constructor === Object) { //interface                    
                        typeSQL = 'TEXT';
                    } else { //class           
                        const name_ref_table: string = (fieldSchema.objectType as Model).schema.name;
                        //add field and REFERENCE in the binding model
                        modelsMap.get(name_ref_table)?.sqlCodes.push(`${schema.name}_${fieldName}_fk INTEGER`);
                        modelsMap.get(name_ref_table)?.sqlCodes.push(`FOREIGN KEY (${schema.name}_${fieldName}_fk) REFERENCES ${schema.name}(${schema.primaryKey})`);
                        return null;
                    }
                    break;
                case 'class':
                    const schema_ref_table = (fieldSchema.objectType as Model).schema;
                    modelsMap.get(schema.name)?.sqlCodes.push(`${fieldName}_fk INTEGER`); //add FK in own table 
                    modelsMap.get(schema.name)?.sqlCodes.push(`FOREIGN KEY (${fieldName}_fk) REFERENCES ${schema_ref_table.name}(${schema_ref_table.primaryKey})`);
                    return null;
                default:
                    throw new Error("dao_generateSql_generateFieldDeclaration: Unknown type " + fieldSchema.objectType + " in " + schema.name);
            }

            if (typeSQL != null)
                fieldDeclaration = `${fieldName} ${typeSQL}`;
            else
                return null;
        }
        //field optional
        if (fieldSchema.optional !== undefined || fieldSchema.optional) { fieldDeclaration += ' NOT NULL' }

    } else {
        throw new Error(`dao_generateFieldDeclaration: unknown type: ${fieldSchema.type} has type: ${fieldSchema.type}`);
    }

    //field default
    if (fieldSchema.default !== undefined)
        fieldDeclaration += ` DEFAULT ${formatDefaultValue(fieldSchema.default, fieldSchema.type)}`;

    return fieldDeclaration;
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
// Format default values based on the field type
function formatDefaultValue(defaultValue: any, fieldType: string) {
    switch (fieldType) {
        case 'integer':
        case 'bigint':
        case 'real':
        case 'text':
        case 'string':
        case 'boolean':
            return defaultValue;
        case 'date':
            return (defaultValue as Date).getTime();
        default:
            throw new Error(`dao_generateSql_formatDefaultValue: the type ${fieldType} can't have default value`);
    }
}
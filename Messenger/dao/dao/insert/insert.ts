import Model from "../../Models/Model";
import User from "../../Models/User";
import DataBase from "../Database";
import LogWriter from "../LogWriter";

export async function insertInto(model: Model) {
    // @ts-ignore
    const schema = model.constructor.schema;

    const db = await DataBase.getInstance().then(d => d.openDatabaseAsync());
    if (db != undefined) {
        db.transactionAsync(async tx => {
            LogWriter.log(`INSERT INTO ${schema.name} ${columns(model)};`);
            const result = await tx.executeSqlAsync(
                `INSERT INTO ${schema.name} ${columns(model)};`,
                values(),
            );
            console.log(result.insertId);
        });
    }
}

function columns(model: Model) {
    const columns: string[] = [];


    for (let field in model) {
        
    }

    const values = Array(columns.length + 1).join('?, ').slice(0, -2);

    return `(${columns.join(',')}) VALUES (${values})`;
    `(channels_adminUser_fk,
    channels_users_fk,
    name,
    numberPhone,
    nickname,
    description,
    linkToPhoto)`;
}
function values(): (string | number)[] {
    return [1, 1, 'John Doe', '+1234567890', 'Johnny',
        'A user in the system', 'http://example.com/photo.jpg'];
}
import { addExistingGroupToContainerAsync } from "expo-contacts";
import Model from "../../Models/Model";
import DataBase from "../Database";

export async function findByKey(model: Model, id: number) {
    const schema = model.schema;
    const db = await DataBase.getInstance().then(d => d.openDatabaseAsync());
    let resultModel;
    if (db != undefined) {
        await db.transactionAsync(async tx => {
            const result = await tx.executeSqlAsync(
                `SELECT * FROM ${schema.name} WHERE ${schema.primaryKey} =?;`,
                [id],
            );
            resultModel = result.rows.length === 1 ? result.rows[0] : null;
        });
    }
    return resultModel;
}
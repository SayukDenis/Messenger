import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import LogWriter from './LogWriter';
import { createTables } from './generate/createTables';
import { createTriggers } from './generate/createTriggers';

async function ReadConfigFile() {
    //path to configuration file
    const fileUri = `${FileSystem.documentDirectory}detail_connection.json`;

    const readFile = async () => {
        try {
            const fileContent = await FileSystem.readAsStringAsync(fileUri);
            const parsedData = JSON.parse(fileContent);
            return {
                databasePath: parsedData.databasePath,
                databaseVersion: parsedData.databaseVersion
            };
        } catch (error) {
            console.error('Error reading the file:', error);
        }
    };

    return readFile();
}

export default class DataBase {
    private static instance: DataBase | null = null;
    private database: SQLite.SQLiteDatabase | null = null;

    private constructor() { }

    public static async getInstance(): Promise<DataBase> {
        if (this.instance === null) {
            this.instance = new DataBase();
        }
        return this.instance;
    }

    public async openDatabaseAsync() {
        try {
            const config = await ReadConfigFile();
            if (config) {
                const { databasePath, databaseVersion } = config;
                this.database = SQLite.openDatabase(databasePath, databaseVersion);
            } else
                throw Error("can`t read configuration file");

            return this.database;
        } catch (error) {
            LogWriter.error(`Error opening the database: ${error}`);
        }
    }

    public async dropDatabaseAsync(): Promise<boolean> {
        try {
            const config = await ReadConfigFile();
            if (config) {
                const { databasePath } = config;
                const fullPath = FileSystem.documentDirectory + `SQLite/${databasePath}`;

                if ((await FileSystem.getInfoAsync(fullPath)).exists) {
                    await FileSystem.deleteAsync(fullPath);
                }
                return true;
            } else
                throw Error("can`t read configuration file");
        } catch (error) {
            LogWriter.error(`Error dropping the database: ${error}`);
            return false;
        }
    }

    public async createDatabaseAsync(dropDatabase = false) {
        if (dropDatabase) {
            const result = await this.dropDatabaseAsync();
            if (!result)
                LogWriter.error('Error dropping database');
        }
        const db = await DataBase.getInstance()

        await createTables(db);
        await createTriggers(db);
    }

    public async dropTablesAsync(): Promise<boolean> {
        try {
            const db = await this.openDatabaseAsync();
            db?.transaction(tx => {
                tx.executeSql('SELECT name FROM sqlite_master WHERE type="table"', [], (tx, results) => {
                    const len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        const tableName = results.rows.item(i).name;
                        tx.executeSql(`DROP TABLE IF EXISTS ${tableName}`);
                    }
                });
            });
            return true;
        } catch (error) {
            LogWriter.error(`Error dropping tables: ${error}`);
            return false;
        }
    }

    public async executeSqlAsync(sqlCode: string) {
        if (this.database == undefined)
            this.openDatabaseAsync();
        else {
            await this.database.transactionAsync(async tx => {
                await tx.executeSqlAsync(
                    sqlCode, undefined
                );
            });
        }
    }

    public executeSql(sqlCode: string) {
        if (this.database == undefined)
            this.openDatabaseAsync();
        else {
            this.database.transaction(async tx => {
                tx.executeSql(
                    sqlCode, undefined
                );
            });
        }
    }

}


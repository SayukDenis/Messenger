import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import LogWriter from './LogWriter';

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
            return null;
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
    
    public async openDatabase() {
        try {
            if (this.database === null) {
                const { databasePath, databaseVersion } = await ReadConfigFile();
                this.database = SQLite.openDatabase(databasePath, databaseVersion);
            }
            return this.database;
        } catch (error) {
            LogWriter.error(`Error opening the database: ${error}`);
        }
    }

    public async dropDatabase(): Promise<boolean> {
        try {
            const { databasePath } = await ReadConfigFile();
            const fullPath = FileSystem.documentDirectory + `SQLite/${databasePath}`;

            if ((await FileSystem.getInfoAsync(fullPath)).exists) {
                await FileSystem.deleteAsync(fullPath);
                return true;
            }
        } catch (error) {
            LogWriter.error(`Error dropping the database: ${error}`);
            return false;
        }
    }

    public async dropTables(): Promise<boolean> {
        try {
            const db = await this.openDatabase();
            db.transaction(tx => {
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
}



import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';


export async function Open() {
    const { databasePath, databaseVersion } = await ReadConfigFile();
    const database = SQLite.openDatabase(databasePath, databaseVersion);

    return database;
}

function ReadConfigFile() {
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


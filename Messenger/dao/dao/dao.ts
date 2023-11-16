import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
const fs = require('fs');

const {
    databaseName,
    databaseVersion
} = JSON.parse(fs.readFileSync('../config.json', 'utf8'));
export const database = SQLite.openDatabase(databaseName, databaseVersion);


function Open() {
    const database = SQLite.openDatabase(databaseName, databaseVersion);
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {

    }
}

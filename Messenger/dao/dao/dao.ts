import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import DataBase from './Database';

const db = await (await DataBase.getInstance()).openDatabase();


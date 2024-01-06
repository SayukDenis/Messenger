import { registerRootComponent } from "expo";
import { StatusBar, AppRegistry } from "react-native";
import React, { useEffect, useState } from 'react';
import { printSelfProfile } from "./Initialization/Print";
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');


export default function App() {
  printSelfProfile();
  //createTables();
  //test();
  //Open();
  //let date = Date.now();
  //console.log(date.toString());
  //console.log("next:\n\n")
  //let t = true;
  //console.log(`4djjdjd^ ${t}`);
  //let f = false;
  //console.log(f);
  ////let num = 12.2;
  ////console.log(`Yes ${num}`);
  //addEmployee();
  //readEmployees();

  return (
    <View>
    </View>
  );
}

registerRootComponent(App);
AppRegistry.registerComponent("10", () => App);
AppRegistry.registerComponent("10".toLowerCase(), () => App);
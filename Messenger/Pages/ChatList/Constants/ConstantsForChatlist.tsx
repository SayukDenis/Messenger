import { Dimensions, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";
import User from "../../../dao/Models/User";
export const { width: screenWidth, height: screenHeight } =
  Dimensions.get("screen");
export const heightOfHeader =
  Platform.OS == "android"
    ? screenHeight * 0.08 +
      (StatusBar.currentHeight == undefined ? 0 : StatusBar.currentHeight)
    : screenHeight * 0.08 + Constants.statusBarHeight;
export type propsForCreate = {
  title: string;
  bio: string;
  linkToPhoto: string;
  users: User[];
};

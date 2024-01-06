import { Dimensions, StatusBar,Platform } from "react-native";
import Constants from "expo-constants";
export const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export const heightOfHeader =Platform.OS == "android"
? screenHeight * 0.08 + StatusBar.currentHeight
: screenHeight * 0.08 + Constants.statusBarHeight

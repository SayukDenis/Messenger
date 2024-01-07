import { Dimensions, StatusBar,Platform } from "react-native";
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export const heightOfHeader =Platform.OS == "android"
? screenHeight * 0.08 + (StatusBar.currentHeight==undefined?0:StatusBar.currentHeight)
: screenHeight * 0.08 + Constants.statusBarHeight

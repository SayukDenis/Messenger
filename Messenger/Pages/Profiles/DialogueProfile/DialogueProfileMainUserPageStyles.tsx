import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(218, 182, 113)",
    //top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderRadius: 40,
  },
  topToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "flex-start",
    height: 356,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgb(161, 156, 145)",
  },
  mainAvatarImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
  },
});

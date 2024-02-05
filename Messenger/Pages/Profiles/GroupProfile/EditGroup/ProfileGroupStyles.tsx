import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const figmaHeightPixelConverter = Dimensions.get("screen").height / 648;
const figmaWidthPixelConverter = Dimensions.get("screen").width / 356;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(227, 192, 124)",
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "rgb(227, 192, 124)",
  },
  PersonBg: {
    width: "90%",
    height: 75,
    backgroundColor: "rgb(218, 182, 113)",
    borderRadius: 10,
    left: "5%",
    top: "-40%",
    borderWidth: 0.3,
  },
  PersonIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    left: "2%",
    top: "15%",
    position: "absolute",
  },
  PersonNick: {
    fontSize: 15,
    color: "black",
    left: "25%",
    bottom: "30%",
    position: "absolute",
  },
  PersonMenu: {
    left: "0%",
    width: "30%",
    height: "30%",
    borderRadius: 2,
    backgroundColor: "rgb(218, 182, 150)",
    top: "-170%",
    zIndex: 2,
    margin: 100,
    position: "absolute",
  },
  BioText: {
    width: "90%",
    height: "20%",
    borderRadius: 2,
    top: "-10%",
    left: "5%",
    padding: 10,
    backgroundColor: "rgb(218, 182, 113)",
    fontSize: 20,
  },
  GroupName: {
    width: "90%",
    height: "20%",
    borderRadius: 2,
    top: "40%",
    left: "5%",
    padding: 10,
    backgroundColor: "rgb(218, 182, 113)",
    fontSize: 20,
  },
  topToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 73 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0, // Радіуси для верхнього кута
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40, // Радіуси для нижнього кута
    borderBottomRightRadius: 40,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  GroupPhoto: {
    width: 150,
    height: 150,
    top: "5%",
    left: "32.5%",
    borderRadius: 300,
  },
  EditPhoto: {
    backgroundColor: "rgb(218, 182, 113)",
    left: "38%",
    width: "25%",
    top: "180%",
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    position: "relative", // Встановлюємо позицію на relative,
    color: "rgb(92, 64, 129)",
  },

  EditPhotoLine: {
    top: "23.5%",
    left: "2.5%",
    width: "95%",
    height: 2, // Товщина лінії
    backgroundColor: "rgb(161, 156, 145)", // Колір лінії
  },
  AddMember: {
    width: "20%",
    height: "3%",
    left: "8%",
    backgroundColor: "rgb(218, 182, 113)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: "-12%",
  },
  SettingsButtons: {
    backgroundColor: "rgb(218, 182, 113)",
    width: "95%",
    height: "8%",
    top: "5%",
    left: "2.5%",
    borderRadius: 5,
    borderWidth: 0.2,
  },
  SettingsText: {
    color: "rgb(92, 64, 129)",
    left: "5%",
    top: "23%",
    fontSize: 22,
  },
});

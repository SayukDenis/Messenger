import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const globalStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    //borderWidth: 1,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    height: windowHeight * 0.0635,
    width: windowWidth,
    marginHorizontal: 0,
    //width: "100%",
    //flexGrow: 1
  },
  footer: {
    backgroundColor: "#E7E6E4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "#A19C91",
    borderRightWidth: 1,
    borderTopWidth: 1.8,
    borderLeftWidth: 1,
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "row",
    height: windowHeight * 0.0635,
    width: "100%",
    alignContent: "flex-end",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  button: {
    backgroundColor: "#DAB671",
    marginHorizontal: 16,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  entry: {},
});

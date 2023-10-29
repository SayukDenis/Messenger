import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export const headerstyles = StyleSheet.create({
  gapContainer: {
    height: screenHeight * 0.05,
    backgroundColor: "#E7E6E4",
    borderRightWidth: 1.8,
    borderLeftWidth: 1.8,
    borderColor: "#434343",
  },
  container: {
    height: screenHeight * 0.08,
    backgroundColor: "#E7E6E4",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth: 1.8,
    borderRightWidth: 1.8,
    borderLeftWidth: 1.8,
    borderColor: "#434343",
    zIndex: 5,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginHorizontal: screenWidth * 0.02,
    overflow:"hidden",
    justifyContent:"space-between"
  },

  magnifyingglass: {
    height: screenHeight * 0.08 * 0.45,
    aspectRatio: 1,
    color: "#434343",
    flexDirection: "column",
    alignSelf: "center",
    //alignSelf:"center",
    marginLeft: screenWidth * 0.02,
  },

  blockactivity: {
    height: screenHeight * 0.075,
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    height: screenHeight * 0.08 * 0.7,
    aspectRatio: 1,
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#434343",
  },
  modeactivity: {
    height: screenHeight * 0.015,
    width: screenWidth * 0.079,
    aspectRatio: 1,
    position: "relative",
    top: screenHeight * 0.05,
    left: screenHeight * 0.02,
  },
  middleheader: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  ViewOfModeOfEmployment: {
    width: screenHeight * 0.2,
    flexDirection: "row",
    alignSelf: "center",
    position: "relative",
    left: screenWidth * 0.02,
  },

  textOfModeOfEmployment: {
    color: "#434343",
    fontSize: screenHeight * 0.018,
    flexDirection: "column",
    alignSelf: "center",
  },

  arrowModeOfEmployment: {
    color: "#434343",
    width: screenWidth * 0.031,
    height: screenHeight * 0.03,
    aspectRatio: 1,
    position: "relative",
    top: screenHeight * 0.0032,
    left: screenHeight * 0.0023,
    alignSelf: "center",
  },

  hamburgerview: {
    alignSelf:"center",
    height:screenHeight*0.028,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  lineForHamburger: {},
});
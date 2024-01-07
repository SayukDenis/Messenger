import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../Constants/ConstantsForChatlist";

export const footerstyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flex: 1,
    height: screenHeight * 0.08,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "column",
    zIndex: 5,
    justifyContent: "center",
  },
  scrollView: {
    marginLeft: screenWidth * 0.04,
    width: screenWidth * 0.92,
  },

  selectedText: {
    color: "#5A0085",
  },
  textPosition: {
    fontSize: 17,
    paddingLeft: screenWidth * 0.017,
    marginRight:3,
    paddingVertical: screenWidth * 0.017,
  },
  selectedFolder: {
    height: screenHeight * 0.005,
    backgroundColor: "#5A0085",
    borderRadius: 10,
  },
  modalWindowContainerStyle: {
    position: "absolute",
    zIndex: 10,
  },
  containerForModalWindowText: {
    flexDirection: "row",
    backgroundColor: "#E7E6E4",
    width: screenWidth * 0.45,
    height: screenHeight * 0.04,
    borderRadius: 100,
    justifyContent: "flex-start",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  modalWindowText: {
    fontSize: screenHeight * 0.018,
    marginLeft: screenWidth * 0.02,
    alignSelf: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screenWidth * 0.015,
    borderRightWidth: screenWidth * 0.015,
    borderBottomWidth: screenWidth * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E7E6E4",
    position: "relative",
  },
  positionOfModalWindowLeft: {
    transform: [{ rotate: "100deg" }],
    bottom: screenHeight * 0.008,
    left: screenWidth * 0.005,
  },
  positionOfModalWindowRight: {
    transform: [{ rotate: "-100deg" }],
    bottom: screenHeight * 0.008,
    left: screenWidth * 0.415,
  },
  svgContainer: {
    justifyContent: "center",
    marginLeft: screenWidth * 0.02,
  },
});

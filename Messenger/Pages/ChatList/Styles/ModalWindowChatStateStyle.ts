import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../Constants/ConstantsForChatlist";
import { footerstyles } from "./FooterStyle";
import { headerstyles } from "./HeaderStyle";

export const modalWindowChatStateStyle = StyleSheet.create({
  modalWindowScreen: {
    flex: 1,
    paddingTop: headerstyles.container.height,
    paddingBottom: footerstyles.container.height,
  },

  modalWindowContainer: {
    flex: 1,
    //backgroundColor: "red",
    flexDirection: "column",
  },

  chatWindowContainer: {
    flex: 1,
    //backgroundColor: "blue",
  },

  chatMenuContainer: {
    //backgroundColor: "green",
    marginLeft: screenWidth * 0.025,
    width: screenWidth * 0.45,
  },

  chatMenuButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E7E6E4",
    borderRadius: 100,
    marginBottom: screenHeight * 0.0008,
    paddingVertical: screenHeight * 0.006,
    paddingHorizontal: screenWidth * 0.03,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },

  chatMenuSvgContainer: {
    marginRight: screenWidth * 0.015,
  },

  chatMenuButtonText: {
    fontSize: screenHeight * 0.018,
  },

  chatMenuTriangle: {
    width: 0,
    height: 0,
    top: screenHeight * 0.005,
    right: screenWidth * 0.002,
    transform: [{ rotate: "-33deg" }],
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
});

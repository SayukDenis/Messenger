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
    flexDirection: "column",
  },

  chatWindowContainer: {
    flex: 1,
    zIndex: 10,
    overflow: "hidden",
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  chatWindowContainerAnimated: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  chatWindowHeaderContainer: {
    paddingVertical: screenHeight * 0.01,
    height: screenHeight * 0.07,
    backgroundColor: "#FFFFFFB2",
    alignItems: "center",
    justifyContent: "center",
  },

  chatWindowHeaderChatInfoContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  chatWindowHeaderChatInfoImage: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#2B1D1D",
    marginRight: screenWidth * 0.017,
  },

  chatWindowHeaderChatInfoTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  chatWindowHeaderChatInfoChatName: {
    fontWeight: "400",
    fontSize: screenHeight * 0.016,
    color: "#2B1D1D",
  },

  chatWindowHeaderChatInfoChatStatus: {
    fontSize: screenHeight * 0.011,
    color: "#493A3A",
  },

  chatWindowMessagesContainer: {
    flex: 1,
  },

  chatMenuContainer: {
    marginLeft: screenWidth * 0.025,
    width: screenWidth * 0.45,
  },

  chatMenuButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E7E6E4",
    borderRadius: 100,
    height: screenHeight * 0.04,
    paddingHorizontal: screenWidth * 0.03,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },

  chatMenuFirstButton: {
    marginTop: screenHeight * 0.0085,
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
    transform: [{ rotate: "-33deg" }],
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screenWidth * 0.015,
    borderRightWidth: screenWidth * 0.015,
    borderBottomWidth: screenWidth * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E7E6E4",
    position: "absolute",
    marginBottom: screenWidth * 0.03,
  },
});

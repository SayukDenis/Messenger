import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../Constants/ConstantsForChatlist";

export const modalWindowSelectionChatStyles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: screenWidth * 0.02,
    position: "absolute",
    zIndex: 100,
    height: "100%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  chatControlContainer: {
    width: screenWidth * 0.28,
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  muteButton: {
    height: screenWidth * 0.036 * 1.3,
    width: screenWidth * 0.047 * 1.3,
  },

  addToFolderButton: {
    height: screenWidth * 0.049 * 1.3,
    width: screenWidth * 0.056 * 1.3,
  },

  markAsUnreadButton: {
    height: screenWidth * 0.047 * 1.3,
    width: screenWidth * 0.036 * 1.3,
  },

  selectAllButton: {
    position: "absolute",
  },

  selectAllButtonText: {
    color: "#6E23CDD4",
    fontSize: screenHeight * 0.02,
    fontWeight: "400",
  },

  cancelButton: {
    alignContent: "flex-end",
  },

  cancelButtonText: {
    color: "#6E23CDD4",
    fontSize: screenHeight * 0.02,
    fontWeight: "400",
  },

  footerContainer: {
    paddingHorizontal: screenWidth * 0.05,
    zIndex: 100,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  deleteButton: {
    height: screenWidth * 0.042 * 1.7,
    width: screenWidth * 0.045 * 1.7,
  },

  numberOfSelectedChatsContainer: {},

  numberOfSelectedChatsText: {
    color: "#000000",
    fontSize: screenHeight * 0.02,
    fontWeight: "400",
  },

  pinButton: {
    height: screenWidth * 0.045 * 1.7,
    width: screenWidth * 0.04 * 1.7,
  },
});

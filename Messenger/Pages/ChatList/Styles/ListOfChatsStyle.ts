import { StyleSheet } from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../Constants/ConstantsForChatlist";

export const listOfChatsStyle = StyleSheet.create({
  container: {
    marginTop: screenHeight * 0.05,
  },

  helpContainer: {
    backgroundColor: "blue",
    opacity: 0,
    zIndex: 1,
    position: "absolute",
    width: screenWidth * 0.8,
    height: screenHeight * 0.08,
    alignSelf: "center",
  },

  itemSeparatorComponent: {
    width: screenWidth,
    height: 2,
    opacity: 0.1,
    backgroundColor: "gray",
  },

  chatContainer: {
    flexDirection: "row",
    height: screenHeight * 0.08,
    width: screenWidth,
    paddingVertical: screenHeight * 0.006,
    paddingHorizontal: screenWidth * 0.0056,
  },

  imageContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: "90%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#493A3A",
  },

  modeOfActivity: {
    height: screenHeight * 0.015,
    width: screenWidth * 0.079,
    aspectRatio: 1,
    position: "relative",
    top: screenHeight * 0.025,
    left: screenWidth * 0.04,
  },

  gapContainerHigh: {
    height: heightOfHeader,
  },

  chatContentContainer: {
    marginLeft: screenWidth * 0.017,
    flexDirection: "column",
    flex: 1,
  },

  chatNameContainer: {},

  chatNameText: {
    fontWeight: "600",
    fontSize: screenHeight * 0.017,
    color: "#2B1D1D",
  },

  lastMessageContainer: {
    marginTop: screenHeight * 0.005,
    flex: 1,
  },

  lastMessageText: {
    fontSize: screenHeight * 0.015,
    color: "#493A3A",
  },

  chatInfoContainer: {
    flexDirection: "column",
    marginLeft: screenWidth * 0.01,
    justifyContent: "flex-start",
  },

  lastMessageStatusAndTimeContainer: {
    alignItems: "center",
    flexDirection: "row",
  },

  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  timeText: {
    fontSize: screenHeight * 0.015,
    color: "#2B1D1D",
    fontWeight: "500",
  },

  checkBoxSelectChatContainer: {
    backgroundColor: "silver",
    borderRadius: 100,
    borderWidth: screenHeight * 0.002,
    borderColor: "white",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: screenWidth * 0.008,
    height: screenHeight * 0.023,
    width: screenHeight * 0.023,
  },

  lastMessageStatusContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  countOfUnreadMessagesContainer: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: screenWidth * 0.008,
    paddingVertical: screenWidth * 0.001,
    paddingHorizontal: screenWidth * 0.014,
    backgroundColor: "#FFFFFFB2",
  },

  countOfUnReadMessagesText: {
    color: "#2B1D1D",
    fontSize: screenHeight * 0.015,
    alignSelf: "center",
  },

  checkMarkerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: screenWidth * 0.008,
  },

  branchesButtonContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },

  branchesButton: {
    height: screenHeight * 0.038,
    width: screenWidth * 0.08,
    marginRight: screenWidth * 0.006,
  },

  /////////// ⤜(ⱺ ʖ̯ⱺ)⤏

  countOfUnreadMessagescontainer: {
    borderRadius: 100,
    justifyContent: "center",
    overflow: "hidden",

    //opacity:0.95
  },

  countOfUnReadMessagesContent: {
    color: "#2B1D1D",
    alignSelf: "center",
    //opacity:0.95
  },
});

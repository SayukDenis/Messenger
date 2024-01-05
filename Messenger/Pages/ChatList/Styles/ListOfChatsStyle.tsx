import { StyleSheet,Platform,StatusBar, Dimensions } from "react-native";
import Constants from 'expo-constants';
import { heightOfHeader } from "../Constants/ConstantsForChatlist";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export const listOfChatsStyle = StyleSheet.create({
  container: {
    //backgroundColor:"red",
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
  chatcontainer: {
    flexDirection: "row",
    height: screenHeight * 0.08,    
    width: screenWidth,
  },

  imageContainer: {
    height: screenHeight * 0.075,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    height: screenHeight * 0.08 * 0.7,
    width: screenHeight * 0.08 * 0.7,
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
    top: screenHeight * 0.05,
    left: screenHeight * 0.02,
  },
  gapContainerHigh: {
    height: heightOfHeader
  },
  
  containerForOther: {
    flex: 1,
    //backgroundColor:"white",
    marginLeft: screenWidth * 0.01,
    justifyContent: "flex-end",

  },
  containerForContent: {
    width: screenWidth * 0.7,
    //backgroundColor:"white",
    flex: 1,
    marginTop: screenHeight * 0.005,
    //backgroundColor: "blue",
  },
  namecontainer: {
    width: screenWidth * 0.6,
    //backgroundColor: "red",
    paddingTop: screenHeight * 0.005,
    alignSelf: "flex-end",

  },
  rightContainer: {
    //backgroundColor:"white",
    // display:"flex",
    alignSelf: "flex-end",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    //backgroundColor:"yellow"
  },
  highcontainer: {
    flexDirection: "row",
    //backgroundColor:"white"
  },
  nameStyle: {
    fontWeight: "600",
    fontSize: screenHeight * 0.017,
  color:"#2B1D1D"
  },
  contentStyle: {
    fontSize: screenHeight * 0.015,
    color:"#493A3A"
  },
  timeContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: screenWidth * 0.01,
    flexDirection: "row",
    flexBasis: "auto",
  },
  timeStyle: {
    alignSelf: "flex-end",
    fontSize: screenHeight * 0.014,
    color: "#2B1D1D",
    marginRight: screenWidth * 0.01,
    fontWeight: "500",
  },
  lastMessageStatusContainer: {
    position: "relative",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: screenWidth * 0.01,
  },
  countOfUnreadMessagescontainer: {
    //backgroundColor: "#FFFFFF",
    textAlign: "center",
    borderRadius: 100,
    
    maxWidth: "100%",
    justifyContent: "center",
    overflow:"hidden"
    //opacity:0.95
  },
  oneCharcontainer: {
    width: screenHeight * 0.018,
    aspectRatio:1,
    //alignSelf:"flex-end"
    paddingTop:0,
    
  },
  twoCharcontainer: {
    width: screenHeight * 0.03,
  },
  threeCharcontainer: {
    width: screenHeight * 0.04,
  },
  fourCharcontainer: {
    width: screenHeight * 0.05,
  },
  countOfUnReadMessagesContent: {
    fontSize: screenHeight * 0.013,
    color: "#2B1D1D",
    alignSelf: "center",
    //opacity:0.95
  },
  checkMarkercontainerStyle: {
    height: screenHeight * 0.03,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: screenWidth * 0.001,
    // marginBottom:screenHeight*0.00
    //right:screenWidth*0.01,
  },
  checkMarkStyle: {
    height: screenHeight * 0.015,
    aspectRatio: 1,
  },
  positionOfFirstCheckMarkStyle: {
    position: "relative",
    alignSelf: "flex-end",
  },
  positionOfSecondCheckMarkStyle: {
    position: "absolute",
    right: screenWidth * 0.01,
    alignSelf: "flex-end",
  },
});

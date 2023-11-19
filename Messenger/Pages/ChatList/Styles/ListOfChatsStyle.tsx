import { StyleSheet,Platform,StatusBar, Dimensions } from "react-native";
import Constants from 'expo-constants';

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
  lineStyle: {
    borderBottomColor: "#C4A56899",
    borderBottomWidth: screenWidth * 0.02,
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
    borderColor: "#434343",
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
    height: Platform.OS=="android"?screenHeight * 0.08+StatusBar.currentHeight:screenHeight * 0.08+Constants.statusBarHeight,
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
  },
  namecontainer: {
    width: screenWidth * 0.6,

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
  },
  highcontainer: {
    flexDirection: "row",
    //backgroundColor:"white"
  },
  nameStyle: {
    fontWeight: "600",
    fontSize: screenHeight * 0.017,
  },
  contentStyle: {
    fontSize: screenHeight * 0.015,
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
    color: "#222222",
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
    backgroundColor: "#339EDA",
    textAlign: "center",
    borderRadius: 50,
    fontSize: screenWidth * 0.025,
    maxWidth: "100%",
    justifyContent: "center",
  },
  oneCharcontainer: {
    width: screenHeight * 0.02,
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
    fontSize: screenHeight * 0.014,
    color: "#FFFFFF",
    alignSelf: "center",
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
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#e4e4e4",
    marginLeft: 10,
  },
  leftAction: {
    backgroundColor: "#388e3c",
    justifyContent: "center",
    flex: 1,
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },
  rightAction: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  chatScrollView: {
    width: screenWidth,
  },
});

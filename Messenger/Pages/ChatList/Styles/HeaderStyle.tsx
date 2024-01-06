import { StyleSheet,Platform, Dimensions,StatusBar } from "react-native";
import Constants from 'expo-constants';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export const headerstyles = StyleSheet.create({

  container: {
    height: Platform.OS=="android"?screenHeight * 0.08+StatusBar.currentHeight:screenHeight * 0.08+Constants.statusBarHeight,
   // backgroundColor: "#E7E6E4",
   backgroundColor:"white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 5,
    justifyContent:"flex-end",
    //overflow:'hidden'
  
  },

  header: {
    display: "flex",
    flexDirection: "row",
    
    marginHorizontal: screenWidth * 0.02,
    overflow:"hidden",
    //justifyContent:"space-between",
   // backgroundColor:"black"
  },

  magnifyingglass: {
    height: screenHeight * 0.08 * 0.45,
    aspectRatio: 1,
   
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
    borderColor: "#2B1D1D",
    marginLeft:12,
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
   
    //justifyContent: "center",
    flexDirection: "row",
  },
  ViewOfModeOfEmployment: {
    marginRight:screenWidth * 0.031+10,
    flexDirection: "row",
    alignSelf: "center",
    position: "relative",
    left: screenWidth * 0.02,
  },

  textOfModeOfEmployment: {
    color: "#2B1D1D",
    fontSize: screenHeight * 0.018,
    flexDirection: "column",
    alignSelf: "center",
  },

  arrowModeOfEmployment: {
    
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

});

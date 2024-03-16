import { StyleSheet, Dimensions } from "react-native";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    
    marginHorizontal: screenWidth * 0.02,
    overflow:"hidden",
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    paddingHorizontal: 20, 
    paddingVertical: 10 
  },

  backButton: {

  },
  
  chatUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  chatUserInfoImg: {
    height: screenHeight * 0.08 * 0.7,
    aspectRatio: 1,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#2B1D1D",
    marginRight: 12
  },
  
  chatUserInfoDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  
  chatUserInfoUserName: {
    fontSize: 14,
    color: 'black',
  },
  
  chatUserInfoUserWasOnline: {
    fontSize: 10,
    color: 'gray',
  }
});

export default styles;
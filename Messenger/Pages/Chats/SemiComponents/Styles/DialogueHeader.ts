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
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(231, 230, 228)',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    // boxShadow: 'inset 0px 0px 0px 1px rgb(161, 156, 145)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(161, 156, 145)',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'space-between',
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
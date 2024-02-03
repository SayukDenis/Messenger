import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import { SOFT_MENU_BAR_HEIGHT } from "../../../ChatConstants";

export const styles = StyleSheet.create({
  mainContainer: { 
    position: 'absolute', 
    bottom: -screenHeight*0.185 + SOFT_MENU_BAR_HEIGHT*0.6, 
    backgroundColor: '#fff', 
    overflow: 'hidden', 
    borderRadius: 9999, 
    alignSelf: 'center', 
    alignItems: 'center' 
  },
  gradient: {
    opacity: 0.7,
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: screenHeight,
    width: screenWidth,
  },
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: screenWidth*0.9, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    alignItems: 'center' 
  },
  trackCurrentAndTotal: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginRight: 12 
  },
})
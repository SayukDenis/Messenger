import { StyleSheet, ViewStyle } from "react-native";
import { screenHeight, screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";

export const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 9999 
  }
});

export const functionalStyles = {
  animatedContainer: (copyPopUpPositionY: any) => {
    return { 
      position: 'absolute', 
      bottom: screenHeight*0.03, 
      width: screenWidth*0.9, 
      alignSelf: 'center', 
      transform: [{ translateY: copyPopUpPositionY }] 
    } as ViewStyle;
  }
}
import { StyleSheet, Dimensions } from "react-native";
import { screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";
import { getCustomFontSize } from "../ChatConstants";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  modalWindow: {
    height: height,
    width: screenWidth
  },
  touchableBackground: {
    height: height,
    width: screenWidth, 
    backgroundColor:'rgba(0, 0, 0, 0.15)', 
    alignItems:'center', 
    justifyContent:'center'
  },
  mainModalMessageContainer: {
    width:width*0.6, 
    height:height*0.15, 
    borderWidth:0.4,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
  modalMessageContainer: {
    height: height*0.11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessageText: {
    fontSize: getCustomFontSize(14),
    maxWidth: '90%'
  },
  modalButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalLeftButtonContainer: {
    width:width*0.3, 
    height:height*0.04, 
    justifyContent:'center', 
    alignItems:'center', 
    borderTopWidth:0.4, 
    borderRightWidth:0.4,
  },
  modalButtonText: {
    color: 'red',
    fontSize: getCustomFontSize(14)
  },
  modalRightButtonContainer: {
    width:width*0.3, 
    height:height*0.04, 
    justifyContent:'center', 
    alignItems:'center', 
    borderTopWidth:0.4, 
  },
});
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalWindow: {
    flex: 1
  },
  touchableBackground: {
    flex:1, 
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
  },
  modalRightButtonContainer: {
    width:width*0.3, 
    height:height*0.04, 
    justifyContent:'center', 
    alignItems:'center', 
    borderTopWidth:0.4, 
  },
});
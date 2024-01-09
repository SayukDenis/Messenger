import { StyleSheet } from "react-native";
import { screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight * 0.06,
    backgroundColor:'rgba(0, 0, 0, 0)'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: screenHeight*0.06,
  },

  footer: {
    paddingVertical: 5,
    //backgroundColor: 'rgb(231, 230, 228)',
    display: 'flex',
    flexDirection: 'row',
    //height: '60%',
    height: screenHeight*0.06,
    alignSelf: 'stretch',
    //borderWidth: 1,
    borderStyle: 'solid',
    //borderColor: 'rgb(161, 156, 145)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  
  messageInput: {
    borderWidth: 0,
    borderRadius: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgb(137, 130, 130)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '60%',
    //width: width*0.6
  },
});

export default styles;

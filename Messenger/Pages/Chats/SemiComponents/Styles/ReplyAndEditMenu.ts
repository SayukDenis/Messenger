import { StyleSheet, Dimensions } from 'react-native';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import { getCustomFontSize } from '../ChatConstants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height:0,
    bottom: screenHeight*0.0575,
  },
  innerContainer: {
    height:height*0.052, 
    width:width*0.96, 
    backgroundColor:'rgb(231, 230, 228)', 
    borderRadius:20, 
    alignItems:'center',
    marginHorizontal:width*0.02, 
    paddingVertical:10, 
    paddingHorizontal:20, 
    display:'flex', 
    flexDirection:'row'
  },
  dataContainer: {
    flex: 1, 
    justifyContent:'space-between', 
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center'
  },
  usernameText: {
    color:'#4684FB',
    fontSize: getCustomFontSize(12)
  },
  messageText: {
    color:'rgb(121, 121, 121)',
    fontSize: getCustomFontSize(14),
    maxWidth: width * 0.7
  },
  closeButton: {
    backgroundColor:'red', 
    width:width*0.03, 
    alignItems:'center'
  }
})
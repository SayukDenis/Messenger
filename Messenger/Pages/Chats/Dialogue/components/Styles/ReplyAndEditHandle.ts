import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height:0, 
    top: -(height*0.052)
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
    color:'rgb(183, 158, 255)'
  },
  messageText: {
    color:'rgb(121, 121, 121)'
  },
  closeButton: {
    backgroundColor:'red', 
    width:width*0.03, 
    alignItems:'center'
  }
})
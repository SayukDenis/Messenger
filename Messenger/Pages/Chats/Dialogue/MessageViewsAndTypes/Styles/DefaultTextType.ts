import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  swipeableContainer: {
    width: width, 
    alignSelf:'stretch', 
    overflow:'visible'
  },
  mainContainer: {
    width:width+50, 
    flexDirection:'row', 
    overflow:'visible'
  },
  messageBlockContainer: {
    paddingVertical: 5,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    width: width
  },
  messageContainer: {
    maxWidth: 0.65 * width,
    marginRight: 10,
    marginLeft: 10,
  },
  messageTypeTextUser: {
    //backgroundColor: 'rgb(102, 191, 255)',
    marginLeft: 'auto',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%',
    minWidth: '15%'
  },
  messageTypeTextNotUser: {
    //backgroundColor: 'rgb(231, 230, 228)',
    marginRight: 'auto',
    fontSize: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 6,
    paddingLeft: 10,
    border: 'none',
    borderRadius: 10,
    maxWidth: '100%'
  },
  longMessage: {
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  longMessageTimeStamp: {
    marginRight: 0,
  },
  messageTimeStamp: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginRight: 10,
    fontSize: 8,
  },
});
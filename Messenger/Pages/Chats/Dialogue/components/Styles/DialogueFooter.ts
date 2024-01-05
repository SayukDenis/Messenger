import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex:6, 
    backgroundColor:'rgba(0, 0, 0, 0)'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 6
  },

  footer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(231, 230, 228)',
    display: 'flex',
    flexDirection: 'row',
    //height: '60%',
    flex: 1, 
    alignSelf: 'stretch',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(161, 156, 145)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'space-between'
  },
  
  messageInput: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'rgb(39, 39, 39)',
    color: 'rgb(137, 130, 130)',
    paddingVertical: 3,
    paddingHorizontal: 15,
    width: '60%',
    //width: width*0.6
  },
});

export default styles;

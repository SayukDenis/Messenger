import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'transparent', 
    flex:1, 
    zIndex:5,
  },
  buttonsContainer: {
    position:'absolute', 
  },
  button: {
    backgroundColor:'rgb(231,230,228)',
    paddingHorizontal:10, 
    paddingVertical:5, 
    borderRadius:15, 
    borderWidth:0.2, 
    borderColor:'rgb(83,83,83)', 
    width:width*0.2
  }
})
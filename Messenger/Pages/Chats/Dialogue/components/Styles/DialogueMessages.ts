import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  mainContainer: {
    flex: 88, 
    overflow:'visible', 
    position:'relative'
  },
  dialogueChat: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;
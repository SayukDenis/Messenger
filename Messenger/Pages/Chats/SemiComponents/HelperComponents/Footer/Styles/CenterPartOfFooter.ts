import { StyleSheet } from "react-native";
import { height, width } from "../../../ChatConstants";


export const styles = StyleSheet.create({
  messageInput: {
    borderWidth: 0,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'rgb(137, 130, 130)',
    paddingHorizontal: 15,
    width: '60%',
    zIndex: 10,
    maxHeight: height * 0.12
  },
})
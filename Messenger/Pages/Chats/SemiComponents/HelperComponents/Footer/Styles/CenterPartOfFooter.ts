import { StyleSheet } from "react-native";
import { FOOTER_HEIGHT, FOOTER_INNER_TEXTINPUT_GAP, MAX_FOOTER_HEIGHT, getCustomFontSize, height, width } from "../../../ChatConstants";


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
    paddingVertical: 10,
    fontSize: getCustomFontSize(15),
    width: '60%',
    zIndex: 10,
    maxHeight: MAX_FOOTER_HEIGHT - FOOTER_INNER_TEXTINPUT_GAP,
    minHeight: FOOTER_HEIGHT - FOOTER_INNER_TEXTINPUT_GAP
  },
})
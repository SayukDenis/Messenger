import { StyleSheet } from "react-native";
import { ChatConstants } from "../../../ChatConstants";

const { height, width } = ChatConstants.getInstance();

export const styles = StyleSheet.create({
  mainContainer: { 
    position: 'absolute',
    height: height * 0.05,
    bottom: -height*0.1825, 
    backgroundColor: '#fff', 
    overflow: 'hidden', 
    borderRadius: 9999, 
    alignSelf: 'center', 
    alignItems: 'center' 
  },
  gradient: {
    opacity: 0.7,
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: height,
    width: width,
  },
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: width*0.9, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    alignItems: 'center',
    height: height * 0.05
  },
  trackCurrentAndTotal: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginRight: 12 
  },
})
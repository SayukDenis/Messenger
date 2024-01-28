import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const widthRatio = screenWidth / 356; 
const heightRatio = screenHeight / 646; 

function responsiveWidth(baseWidth: number) {
  return baseWidth * widthRatio;
}

function responsiveHeight(baseHeight: number) {
  return baseHeight * heightRatio;
}

export const styleRegistration = StyleSheet.create({
  syncContainer: {
    flex: 1,
    justifyContent: 'space-between',  
    alignItems:'center',
    flexDirection: 'row',  
    marginBottom: responsiveHeight(10),
    marginTop: responsiveHeight(-5),
  },
  line: {
    flex: 0,
    width:responsiveWidth(80),
  },
  switchContainer: {
    transform: [{ scale:  responsiveHeight(0.8) }],
  },
});
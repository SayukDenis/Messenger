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

export const stylesPhoneCodeRegistration = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(5),
  },
  backButtonText: {
    fontSize: responsiveWidth(20),
    color: '#402B2B',
  },
});
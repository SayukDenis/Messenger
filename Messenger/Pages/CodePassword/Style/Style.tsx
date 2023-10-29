import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const widthRatio = screenWidth / 356; 
const heightRatio = screenHeight / 646; 

function responsiveWidth(baseWidth: number) {
  return baseWidth * widthRatio;
}

function responsiveHeight(baseHeight: number) {
  return baseHeight * heightRatio;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3c07c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(20),
  },
  header: {
    fontSize: responsiveHeight(20),
    color: '#333',
    marginBottom: responsiveHeight(14),
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(14),
  },
  pinDot: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: responsiveWidth(2.8),
  },
  activeDot: {
    backgroundColor: '#333',
  },
  codeInput: {
    flexDirection: 'column',
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(-100),
  },
  codeCell: {
    borderRadius: responsiveWidth(35),
    width: responsiveWidth(63.3),
    height: responsiveWidth(63.3),
    fontSize: responsiveHeight(28),
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: responsiveHeight(14),
  }, 
});
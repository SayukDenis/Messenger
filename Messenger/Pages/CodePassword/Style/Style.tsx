import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';

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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(20),
  },
  header: {
    fontSize: responsiveHeight(20),
    color: '#FFF',
    marginTop: 25,
    marginBottom: responsiveHeight(14),
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(46),
  },
  pinDot: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: responsiveWidth(2.8),
  },
  activeDot: {
    backgroundColor: '#FFFFFF75',
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
    borderWidth: 1,
    borderColor: '#FFFFFF75',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF75',
    marginBottom: responsiveHeight(20),
  },
  codeCellText: 
  {
    fontSize: responsiveHeight(21),
  },
  imageStyle: {
    width: responsiveWidth(36),  
    height: responsiveHeight(33), 
    marginBottom: responsiveHeight(5),
    resizeMode: 'contain', 
    marginTop: responsiveHeight(20),  
  },
});
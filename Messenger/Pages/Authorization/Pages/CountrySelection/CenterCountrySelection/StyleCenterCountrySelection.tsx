import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const widthRatio = screenWidth / 356; 
const heightRatio = screenHeight / 646; 

function responsiveWidth(baseWidth: number) {
  return baseWidth * widthRatio;
}

function responsiveHeight(baseHeight: number) {
  return baseHeight * heightRatio;
}


const StyleCenterCountrySelection = StyleSheet.create({
  countryList: {
    marginTop: windowHeight * 0.1, 
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(5),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  countryFlag: {
    width: responsiveWidth(24),
    height: responsiveHeight(23),
    marginRight: responsiveWidth(2),
  },
  countryName: {
    fontSize: responsiveWidth(18),
    fontWeight: 'bold',
    marginRight: responsiveWidth(12),
    color: '#FFF',
  },
  countryCode: {
    fontSize: responsiveWidth(16),
    color: '#FFF',
  },
  line: {
    height: 1,
    flex: 1,
  },
  verticalLine: {
    height: '100%',
    width: responsiveWidth(1),
    backgroundColor: '#fff',
    marginHorizontal: responsiveWidth(10),
  },
});

export default StyleCenterCountrySelection;


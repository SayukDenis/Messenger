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

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    padding: responsiveWidth(0),
  },
  containerCenter: {
    paddingLeft: responsiveWidth(45), 
    alignItems: 'center',
    paddingRight: responsiveWidth(45), 
  },
  containerStart: {
    paddingLeft: responsiveWidth(45), 
    paddingRight: responsiveWidth(45), 
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: responsiveWidth(106),  
    height: responsiveHeight(83), 
    marginBottom: responsiveHeight(5),
    resizeMode: 'contain', 
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: responsiveHeight(10),
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(30),
    borderRadius: responsiveWidth(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: '100%',
  },
  header: {
    fontSize: responsiveHeight(18),
    color: '#FFFFFF',
  },
  label: {
    fontSize: responsiveHeight(11),
    marginBottom: responsiveHeight(10),
    color: '#402B2B',
  },
  Button: {
    width: '100%',
    paddingHorizontal: responsiveWidth(0),
    paddingVertical: responsiveHeight(10),
    backgroundColor: '#61B7F580',
    borderWidth: 0,
    transition: 'background-color 0.3s',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignItems: 'center',
    borderRadius: responsiveHeight(5),
  },
  ButtonLaber: {
    fontSize: responsiveHeight(16), 
    color: '#fff',
  },

  linkButton: {
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(4),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  linkButtonText: {
    fontSize: responsiveWidth(16),
    color: '#6E23CD83',
  },


  containerLine: {
    padding: responsiveWidth(20),
  },
  line: {
    borderBottomColor: '#fff',
    borderBottomWidth: responsiveWidth(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveWidth(10),
  },
  headerText: {
    fontSize: responsiveWidth(18),
    color: '#fff',
  },
  verticalLine: {
    height: '100%',
    width: responsiveWidth(1),
    backgroundColor: '#fff',
    marginHorizontal: responsiveWidth(10),
  },
  input: {
    flex: responsiveWidth(1),
    fontSize: responsiveWidth(18),
    color: '#fff',
  },

  countryFlag: {
    width: responsiveWidth(24),
    height: responsiveHeight(23),
    marginRight: responsiveWidth(7),
    marginLeft: responsiveWidth(11),
  },
  headerTextСountryСode: {
    fontSize: responsiveWidth(18),
    color: '#fff',
    width: responsiveWidth(50),
    marginRight: responsiveWidth(-9),
  },
});
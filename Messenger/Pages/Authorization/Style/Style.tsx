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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3c07c',
    paddingHorizontal: responsiveWidth(35),
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
    fontSize: responsiveHeight(15),
    color: '#000000',
  },
  label: {
    fontSize: responsiveHeight(11),
    marginBottom: responsiveHeight(10),
    color: '#402B2B',
  },
  input: {
    width: '100%',
    padding: responsiveHeight(12),
    fontSize: responsiveHeight(10),
    borderWidth: 1,
    borderColor: '#D99B9B',
    color: '#9B8D8D',
    borderRadius: responsiveHeight(4),
    marginBottom: responsiveHeight(15),
  },
  signInButton: {
    width: responsiveWidth(92),
    paddingHorizontal: responsiveWidth(7),
    paddingVertical: responsiveHeight(9),
    backgroundColor: '#EE4D47',
    borderWidth: 0,
    transition: 'background-color 0.3s',
    borderRadius: responsiveHeight(10),
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  signInLaber: {
    fontSize: responsiveHeight(9), 
    color: '#fff',
  },

  createAccount: {  
    fontSize: responsiveWidth(8),
    color: '#555',
  },
  containerCreat: { 
    paddingHorizontal: responsiveWidth(27),
  },
  createButton: {
    marginLeft: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(4),
  },
  createButtonText: {
    fontSize: responsiveWidth(8),
    color: '#1196B3',
  },
  sentCodeAgainButtonText: {
    fontSize: responsiveWidth(11),
    color: '#1196B3',
    marginBottom: responsiveHeight(14), 
  },
 
  backButton: {
    marginBottom: responsiveHeight(1),
    marginLeft: responsiveWidth(-20),
  },
  backButtonText: {
    fontSize: responsiveWidth(20),
    color: '#A19C91',
  },
});
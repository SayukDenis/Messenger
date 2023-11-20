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
    alignItems: 'center',
    padding: responsiveWidth(20),
  },
  imageStyle: {
    width: responsiveWidth(106),  
    height: responsiveHeight(83), 
    marginBottom: responsiveHeight(5),
    resizeMode: 'contain', 
    marginTop: responsiveHeight(20),  
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
  input: {
    width: '100%',
    padding: responsiveHeight(12),
    fontSize: responsiveHeight(17),
    borderWidth: 1,
    borderColor: '#D99B9B',
    color: '#ffffff',
    borderRadius: responsiveHeight(4),
    marginBottom: responsiveHeight(15),    
  },
  signInButton: {
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
  signInLaber: {
    fontSize: responsiveHeight(14), 
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
    fontSize: responsiveWidth(13),
    color: '#6E23CD83',
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
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


const StyleHeaderCountrySelection = StyleSheet.create({
   headerConteiner:{
        position: "absolute",
        top: 0, 
        left: 0,
        right: 0,
        display: "flex",
        alignItems:'center',
        flexDirection: 'row',
        width: "100%",
        height: windowHeight*0.08,
        borderBottomLeftRadius:windowHeight*0.03,
        borderBottomRightRadius:windowHeight*0.03,
        backgroundColor: '#E7E6E4',
        borderWidth: responsiveWidth(1),
        borderColor:'#A19C91',
        justifyContent:"center"
    },

    svgConteiner:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'10%'
    },

    textInput:{
        width:'80%',
        height:'60%',
        borderRadius: responsiveWidth(30),
        backgroundColor:'#272727',
        color :'#888282',
        paddingLeft: '5%'
    },



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

export default StyleHeaderCountrySelection;


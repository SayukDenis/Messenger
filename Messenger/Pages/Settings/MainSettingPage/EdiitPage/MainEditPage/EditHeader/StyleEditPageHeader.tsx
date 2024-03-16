import { StyleSheet,Platform, Dimensions,StatusBar } from "react-native";
import Constants from 'expo-constants';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleEditPageHeader = StyleSheet.create({

    container :{
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        height:windowHeight*0.07,
        paddingLeft:'2%',
        paddingRight:'2%',
    },

    backButt:{
        alignSelf:'flex-end',
        paddingBottom:'4%',
        width:"10%"
    },

    userNameConteiner:{
        display:'flex',
        width:'80%',
        paddingBottom:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    userNameText:{
        fontSize: 20,
    },


});

export default StyleEditPageHeader;
import { StyleSheet,Platform, Dimensions,StatusBar } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");


const StyleEditBioPageHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        width: "100%",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
        borderColor : '#A19C91'
    },
    backButt:{
        marginLeft:"5%"
    },

    conteinterUserName:{
        width:'70%',
        alignItems:'center'
    },

    UserName:{
        marginLeft:'5%'
    }

});

export default StyleEditBioPageHeader;
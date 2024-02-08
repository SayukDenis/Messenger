import { StyleSheet } from "react-native";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const  StyleUserInfoComponent = StyleSheet.create({
    containerUserAvatar:{
        width:screenWidth,
        height:screenHeight*0.4,
        flexDirection:'row'
    },

    avatarStyle:{
        width:screenWidth,
        height:screenHeight*0.4,
        position:"absolute"
    },

    backbuttonStyle:{
        paddingTop:'17%',
        paddingLeft:'2%',
        zIndex:1,
        height:"35%"
    },

    containerUserInfo:{
        marginTop:'5%'
    },

    horizontalWhiteLine:{
        height:screenHeight*0.001,
        width:screenWidth*0.8,
        backgroundColor:'white',
        opacity:0.4,
        marginLeft:'9%'
    },

    verticalWhiteLine:{
        height:screenHeight*0.037,
        width:screenWidth*0.004,
        backgroundColor:'white',
        marginLeft:"1%",
        marginRight:"1%",
        opacity:0.4,
    },

    informaitionContainer:{
        marginLeft:'9%',
        flexDirection:'row',
        height:screenHeight*0.05,
        alignItems:'center'
    }

})

export default StyleUserInfoComponent;
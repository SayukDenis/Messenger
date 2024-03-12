import { StyleSheet, Dimensions } from "react-native";
import { screenWidth, screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";

const StyleBlockUserCenter = StyleSheet.create({
    styleText:{
        marginLeft:"4%",
        fontSize:18,
        marginBottom:"2%",
        marginTop:"4%"
    },


    styleImage:{
        width:screenHeight*0.035,
        height:screenHeight*0.035,
        borderRadius:10000000,
        marginLeft:"3%"
    },

    styleCheckBoxButt:{
        height:screenHeight*0.025,
        width:screenHeight*0.025,
        borderRadius:1000,
        backgroundColor:"#FEE0A3",
        alignItems:'center',
        justifyContent:'center'
    },

    styleCheckBoxInnerCircle:{
        height:screenHeight*0.011,
        width:screenHeight*0.011, 
        borderRadius:1000,
        backgroundColor:'#5F453A'
    }

});

export default StyleBlockUserCenter;
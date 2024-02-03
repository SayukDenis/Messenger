import { StyleSheet, Dimensions } from "react-native";
import { screenHeight } from "../../../../ChatList/Constants/ConstantsForChatlist";

const windowHeight = Dimensions.get('window').height;

const StyleAddExeptionsCenter = StyleSheet.create({
    buttonContainer:{
        height:screenHeight*0.06, 
        marginBottom:2,
        justifyContent:'center'
    },
    usersInfocontainer:{
        flexDirection:'row',
        height:'100%',
        alignItems:'center',
    },
    usersAvatarStyle :{
        height:windowHeight*0.04,
        width:windowHeight*0.04,
        borderRadius:10000,
        marginLeft:'2%'
    },
    usersNameTextStyle:{
        marginLeft:"2%",
    },

    InputTextContainer:{
        backgroundColor:"#272727" ,
        height:screenHeight*0.06, 
        width:"95%",
        marginLeft:'2.5%', 
        borderRadius:40, 
        justifyContent:'center'
    },
    StyleInputText:{
        paddingLeft:"5%", 
        color:"#888282" , 
        width:"95%"
    }

})

export default StyleAddExeptionsCenter;
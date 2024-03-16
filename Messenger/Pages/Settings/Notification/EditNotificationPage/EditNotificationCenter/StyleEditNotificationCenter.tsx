import { StyleSheet } from "react-native";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const StyleEditNotificationCenter = StyleSheet.create({
    ExeptionsTextContainer:{
        marginTop:"7%",
        marginLeft:'3%',
    },
    ExeptionsStyleText:{
        fontSize:20
    },
    addNotifivationButton:{
        marginLeft:"5%",
        marginTop:'3%',
        width:'30%',
        height:screenHeight*0.03,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden'
    },
    ExeptionsButtonTextStyle:{
        paddingLeft:'4%',
        color:'#6A38AD',
        fontSize:18
    },
    styleForSvgContainer:{
        paddingLeft:'8%'
    },
    userExeptionsButtons:{paddingLeft:"3%",
        justifyContent:'center',
        marginTop:2, 
        marginLeft:"3%"  ,
        width:screenWidth*0.94,
        height:screenHeight*0.07 , 
        overflow:"hidden", 
        borderRadius:10
    },
    DeleteAllexeptionButton:{
        justifyContent:'center',
        marginTop:2, 
        marginLeft:"3%"  ,
        width:screenWidth*0.94,
        height:screenHeight*0.05, 
        overflow:"hidden", 
        borderRadius:10
    }
})

export default StyleEditNotificationCenter;
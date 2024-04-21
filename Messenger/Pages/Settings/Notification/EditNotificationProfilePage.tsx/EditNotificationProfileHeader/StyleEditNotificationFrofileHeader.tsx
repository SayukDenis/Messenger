import { StyleSheet } from "react-native";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const StyleEditNotificationProfileHeader= StyleSheet.create({
    container :{
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        height:screenHeight*0.07,
        paddingLeft:'2%',
        paddingRight:'2%',
    },

    backButt:{
        alignSelf:'flex-end',
        paddingBottom:'4%',
        width:"10%"
    },

    ProfileNameConteiner:{
        display:'flex',
        width:'75%',
        paddingBottom:'2%',
        paddingLeft:'5%',
        alignItems:'center',
        justifyContent:'center',
    },
    ProfileName:{
        fontSize: 25,
    },

    DoneButt:{
        alignSelf:'center',
        width:"15%",
        paddingBottom:'2%'
    },

    StyleDoneButtonText:{
        fontSize:18
    }
})

export default StyleEditNotificationProfileHeader;
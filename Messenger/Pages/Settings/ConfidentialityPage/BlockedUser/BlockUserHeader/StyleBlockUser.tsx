import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import { screenHeight, screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";

const StyleBlockUserHeader = StyleSheet.create({

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

    BlockUserArticleConteiner:{
        display:'flex',
        width:'75%',
        paddingBottom:'2%',
        paddingLeft:"3%",
        alignItems:'center',
        justifyContent:'center',
    },
    BlockUserArticleText:{
        fontSize: 20,
    },

    UnblockButt:{
        marginRight:"5%",
        alignSelf:'center',
        width:screenWidth*0.2,
        height:screenHeight*0.1,
        justifyContent:'center',
    }
    
});

export default StyleBlockUserHeader;
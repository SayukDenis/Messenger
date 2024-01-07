import { StyleSheet,Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleChatFolderCenter = StyleSheet.create({
    articleFolderTextStyle:{
        marginTop:'3%',
        marginLeft:"3%"
    },
    newFodlerButton:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'30%',
        height:windowHeight*0.04,
        marginLeft:"5%",
        marginTop:'3%',
        backgroundColor:'white',
        borderWidth:0.4,
        borderBottomWidth:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        opacity:0.13,
    },
    foldersButt:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'94%',
        height:windowHeight*0.07,
        alignItems:'center',
        marginLeft:"3%",
        backgroundColor:'#DAB671',
        borderWidth:0.4,
        borderRadius:10,
    },
    stylechatFolderButtonText:{
        paddingLeft:'3%',
        paddingRight:'3%'
    },
    styleChatFolderText:{
        color:"black",
        paddingLeft:"4%",
        fontSize:15
    }
});

export default StyleChatFolderCenter;
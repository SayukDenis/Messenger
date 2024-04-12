import { StyleSheet,Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleAddNewChatToFolderHeader = StyleSheet.create({
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

    EditFolderConteiner:{
        display:'flex',
        width:'75%',
        paddingBottom:'2%',
        paddingLeft:'5%',
        alignItems:'center',
        justifyContent:'center',
    },
    EditFolderText:{
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

export default StyleAddNewChatToFolderHeader;
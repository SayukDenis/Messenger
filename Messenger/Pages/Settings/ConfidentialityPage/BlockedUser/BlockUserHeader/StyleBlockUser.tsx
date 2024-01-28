import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleBlockUserHeader = StyleSheet.create({

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
    }
    
});

export default StyleBlockUserHeader;
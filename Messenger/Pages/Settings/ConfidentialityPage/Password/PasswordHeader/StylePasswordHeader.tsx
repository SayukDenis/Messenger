import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StylePasswordHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection:'row',
        height: windowHeight*0.06,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        alignItems:'center',
        borderColor : '#A19C91',
        borderWidth:1
    },

    backButContainer :{
        display: "flex",
        width:"10%",
        marginLeft:'5%'
    },

    textconteinter:{
        display:'flex',
        width:'70%',
        alignItems:'center'
    },

    styleText:{
        fontSize:15,
    }

});

export default StylePasswordHeader;
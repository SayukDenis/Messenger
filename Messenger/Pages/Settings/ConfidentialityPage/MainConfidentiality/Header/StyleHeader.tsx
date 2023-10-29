import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleHeadr = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: windowHeight*0.06,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderColor : '#A19C91',
        borderWidth:1
    },

    backButContainer :{
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        width:"20%"
    },

    backbutton:{
        backgroundColor:'blue',
    },

    conteinerConfidentialityPage:{
        display:"flex",
        width:"56%",
        alignItems:"center",
        justifyContent:"center"
    }

});

export default StyleHeadr;
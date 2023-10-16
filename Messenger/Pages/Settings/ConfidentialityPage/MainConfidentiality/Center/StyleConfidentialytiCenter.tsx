import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleConfidentialityCenter = StyleSheet.create({
    centerConteiner:{
        display:'flex',
        margin:"3%",
    },

    textStyle:{
        marginTop:"3%",
        marginLeft:"3%",
    },

    buttonsConteiner:{
        display:"flex",
        flexDirection:'row',
    },

    centerButtons:{
        display:"flex",
        flexDirection:'row',
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        height: windowHeight*0.07,
        backgroundColor:'#DAB671',
    },

    buttonText:{
        display:'flex',
        marginLeft:'5%',
        color:'#5C4081'
    },

    backButton:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'15%',
        height:windowHeight*0.07,
        backgroundColor:'#DAB671'
    }

});

export default StyleConfidentialityCenter;
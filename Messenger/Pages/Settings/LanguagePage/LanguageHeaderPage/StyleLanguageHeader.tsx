import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleHeaderLangugage = StyleSheet.create({
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

    DoneButton:{
        alignSelf:'center',
        paddingBottom:'4%',
        paddingRight:"10%"
    },

    DoneButtonTextStyle:{
        fontSize:15
    },

    LangugeContainerConteiner:{
        display:'flex',
        width:'75%',
        paddingBottom:'2%',        
        paddingLeft:"5%",
        alignItems:'center',
        justifyContent:'center',
    },
    LangugeContainerText:{
        fontSize: 20,
    },
})

export default StyleHeaderLangugage;
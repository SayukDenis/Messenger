import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StylePassCentre = StyleSheet.create({
        passConteiner:{
            marginTop:"4%",
            width:"100%",
            height:"100%"
        },

        funcOn:{
            display:'flex',
            width:'90%',
            flexDirection:'row',
            marginLeft:'5%',
            height:windowHeight*0.06,
            backgroundColor:'#DAB671',
            borderWidth:1,
            alignItems:'center',
            justifyContent:'space-between',
            borderRadius:5,
        },

        funcOFF:{
            display:'flex',
            width:'90%',
            flexDirection:'row',
            marginLeft:'5%',
            height:windowHeight*0.06,
            backgroundColor:'grey',
            borderWidth:1,
            alignItems:'center',
            justifyContent:'space-between',
            borderRadius:5,
        },

        styleText:{
            marginLeft:'2%'
        },

        styleSwitch:{
            marginRight:'2%'
        }

});

export default StylePassCentre;    
import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleAddExeptionsHeader = StyleSheet.create({
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
        paddingBottom:'5%',
        paddingLeft:"3%",
        width:"10%"
    },

    ForwardArticleConteiner:{
        display:'flex',
        width:'80%',
        paddingBottom:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    ForwardArticleText:{
        fontSize: 20,
    },
    searchButton:{
        alignSelf:'flex-end',
        paddingBottom:'3%',
        width:"10%",
    },

});

export default StyleAddExeptionsHeader;
import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleBlockUserCenter = StyleSheet.create({
    styleText:{
        marginLeft:"4%",
        marginBottom:"2%",
        marginTop:"4%"
    },


    styleImage:{
        width:30,
        height:30,
        borderRadius:10000000,
        marginLeft:"3%"
    }

});

export default StyleBlockUserCenter;
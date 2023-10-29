import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleBlockUserCenter = StyleSheet.create({
    styleText:{
        marginLeft:"4%",
        marginBottom:"1%",
        marginTop:"2%"
    },

    blockedUsersCinteiner:{
        display:'flex',
        width:"90%",
        height:windowHeight*0.07,
        backgroundColor:'#DAB671',
        marginLeft:'5%',
        borderWidth:1,
        borderRadius:10
    },

    BlockUserButtom:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'100%'
    },

    styleImage:{
        width:30,
        height:30,
        borderRadius:10000000,
        marginLeft:"3%"
    }

});

export default StyleBlockUserCenter;
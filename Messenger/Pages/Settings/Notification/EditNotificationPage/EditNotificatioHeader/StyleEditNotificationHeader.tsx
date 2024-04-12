import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const StyleEditNotificationHeder = StyleSheet.create({
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

   EditNorifiConteiner:{
        display:'flex',
        width:'80%',
        paddingBottom:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    EditNorifiText:{
        fontSize: 20,
    },
})

export default StyleEditNotificationHeder;
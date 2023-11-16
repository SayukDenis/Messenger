import { StyleSheet } from "react-native";

const StyleEditUserNameHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: "6%",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        alignItems:'center',
        borderColor : '#A19C91',
        borderWidth:1
    },

    backButt:{
        marginLeft:"5%"
    },

    UserName:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:"70%"
    },

    doneButton:{
        marginRight:'5%'
    }

});

export default StyleEditUserNameHeader;
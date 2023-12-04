import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width

const StyleEditUserNameHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
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
        paddingLeft:'28%',
        alignItems:'center',
        justifyContent:'center',
        width:"70%"
    },

    doneButton:{
        marginRight:'5%'
    }

});

export default StyleEditUserNameHeader;
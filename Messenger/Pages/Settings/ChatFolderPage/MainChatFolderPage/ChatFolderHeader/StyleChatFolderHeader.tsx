import { StyleSheet, Dimensions, StatusBar,Platform  } from "react-native";
import Constants from 'expo-constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;525

const StyleChatfolderHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: Platform.OS=="android"?windowHeight * 0.08+StatusBar.currentHeight:windowHeight * 0.08+Constants.statusBarHeight,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderColor : '#A19C91',
        borderWidth:1,
        alignItems:'center',
    },
    chatFolderHeaderconteiner:{
        display:'flex',
        width:'100%',
        height:"40%",
        alignItems:'flex-end',
        flexDirection:'row',
        paddingLeft:'3%',
        paddingRight:'3%',
        justifyContent:'space-between'
    }
});
export default StyleChatfolderHeader;
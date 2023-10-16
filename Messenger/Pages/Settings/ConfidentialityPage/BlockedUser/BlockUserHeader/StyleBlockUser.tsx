import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleBlockUserHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: windowHeight*0.06,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        justifyContent:'space-around',
        alignItems:'center',
        borderColor : '#A19C91',
        borderWidth:1
    },

    unblockButt:{
        color:'#5C4081',
    }
    
});

export default StyleBlockUserHeader;
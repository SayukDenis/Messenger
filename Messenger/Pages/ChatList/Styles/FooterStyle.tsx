import { StyleSheet, View, Text ,Dimensions} from 'react-native';

const { width: screenWidth ,height:screenHeight} = Dimensions.get('window');
export const footerstyles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:"#E7E6E4",
        flex:1,
        height:screenHeight*0.068,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderWidth:1.8,
        flexDirection:"row"
    },
    scrollView:{
        marginLeft:screenWidth*0.04,
        marginRight: screenWidth*0.04,
        alignSelf: 'center',
    },
    folderContainer:{
       // backgroundColor: 'red',
        alignSelf: 'center',
        padding:screenWidth*0.017
    },
    folder:{
        color:"#000000",
        fontSize:screenHeight*0.017
    },
    selectedText:{
        color:"red",
        fontSize:screenHeight*0.017
    }
});
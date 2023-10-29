import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const StyleHeaderSavedMessage = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        width: "100%",
        height: windowHeight*0.06,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor: '#E7E6E4',
        borderWidth:1,
        borderColor : '#A19C91'
    },
    headerContainer :{
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-around'
    },

});

export default StyleHeaderSavedMessage;
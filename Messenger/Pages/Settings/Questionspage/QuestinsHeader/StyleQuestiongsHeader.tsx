import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const StyleQuestionsHeader = StyleSheet.create({
    header :{
        display: "flex",
        flexDirection: 'row',
        height: windowHeight*0.08,
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

    conteinterUserName:{
        width:'70%',
        alignItems:'center'
    },

    styleText:{
        marginLeft:'5%'
    }
});

export default StyleQuestionsHeader;
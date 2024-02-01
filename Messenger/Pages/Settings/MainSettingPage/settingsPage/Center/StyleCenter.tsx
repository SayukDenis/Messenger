import { StyleSheet,Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowHWidth = Dimensions.get('window').width;

const StyleCentre = StyleSheet.create({

    conteiner:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imgStyle :{
        marginTop:'3%',
        height:windowHWidth*0.35,
        width:windowHWidth*0.35,
        borderRadius:10000000
    },

    editButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"4%",
        marginRight:"10%",
        borderRadius:14,
        height:windowHeight*0.05,
        width:windowHWidth*0.3,
        backgroundColor:'white',
        opacity:0.13
    },


    text:{
        marginTop:"2%",
        marginLeft:"3%",
        marginBottom:"2%",
        display:"flex",
        alignSelf:'flex-start'
    },

});

export default StyleCentre;
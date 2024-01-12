import { StyleSheet,Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowHWidth = Dimensions.get('window').width;

const StyleCentre = StyleSheet.create({
    
    conteiner:{
        display:'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imgStyle :{
        marginTop:'20%',
        height:windowHWidth*0.4,
        width:windowHWidth*0.4,
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
        marginLeft:"5%",
        marginBottom:"2%",
        display:"flex",
        alignSelf:'flex-start'
    },

    exitButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"5%",
        height:windowHeight*0.05,
        width:windowHWidth*0.3,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        opacity:0.13
    },

    editButtonText:{
        color:'#6A38AD',
    },

    conteinreModalwindow:{
        display:'flex',
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },

    modalWindow:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        height:'17%',
        width:'80%',
        borderWidth:1,
        borderRadius:35
    },

    modalTextConteiner:{
        flex:7,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E3E3E3',
        width:'100%',
        height:'50%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },

    modalButtonsConteiner:{
        flex:3,
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },

    modalButtonAgree:{
        alignItems:'center',
        justifyContent:'center',
        width:"50%",
        height:"100%",
        backgroundColor:'#DCDCDC',
        borderTopWidth:1,
        borderBottomLeftRadius:37,
    },

    agreeButtonText:{

    },

    modalButtonDisagree:{
        alignItems:'center',
        justifyContent:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        width:"50%",
        height:"100%",
        backgroundColor:'#DCDCDC',
        borderBottomRightRadius:40
    },

    disagreeButtonText:{
        color:'red'
    },

});

export default StyleCentre;
import { StyleSheet } from 'react-native'

const StyleCentre = StyleSheet.create({
    
    conteiner:{
        display:'flex',
        flex: 1,
        backgroundColor:'#E3C07C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imgStyle :{
        height:150,
        width:150,
        borderRadius:10000000
    },

    button:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"4%",
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderColor:'#858585',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'30%',
        height:'4%'
    },

    box:{
        width : '90%',
        height:1,
        backgroundColor:'#858585',
    },

    text:{
        marginTop:"2%",
        marginLeft:"5%",
        marginBottom:"2%",
        display:"flex",
        alignSelf:'flex-start'
    },

    editButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"5%",
        height:"5%",
        width:"20%",
        borderWidth:1,
        borderColor:'black',
        borderRadius:15
    },

    editButtonText:{
        color:'red'
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
        borderRadius:30
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
        borderBottomLeftRadius:30,
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
        borderBottomRightRadius:30
    },

    disagreeButtonText:{
        color:'red'
    },

});

export default StyleCentre;
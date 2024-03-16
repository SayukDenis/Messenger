import React from "react";
import { View, Dimensions, Text } from "react-native";
import Stiker from "./Styker";

const windowHeight = Dimensions.get('window').height;
const windowHWidth = Dimensions.get('window').width;

const SVGStiker = ()=>{

    return  <View style ={{flexDirection:'row',marginTop:"10%"}}>
                <View style= {{backgroundColor:'white',width:windowHWidth*0.09,height:windowHeight*0.04, position:'absolute',opacity:0.11, borderRadius:10}}></View>
                <View style={{marginRight:5,marginTop:4}}><Stiker  width={windowHWidth*0.09} height={windowHeight*0.032} color="black"></Stiker></View>
  </View>
}
export default SVGStiker
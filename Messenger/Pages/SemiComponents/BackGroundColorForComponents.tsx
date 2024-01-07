import React,{ReactNode} from "react";
import { View } from "react-native";

interface BackGroundColorForComponentsProps{
    height:number;
    width:number;
    children?:ReactNode;
}

const BackGroundColorForComponents:React.FC<BackGroundColorForComponentsProps>=({height,width,children})=>{
    return (<View style={{width,height,position: "absolute",
    backgroundColor: "white",
    zIndex: -1,
    opacity: 0.11,}}>
        {children}
    </View>)
}
export default BackGroundColorForComponents;
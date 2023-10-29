import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import StyleBlockUserCenter from "./StyleBlockUsersCenter";

const BlockUserCenter = ()=>{

    let blokedUserList : string[] = ["Denis","Denis","Denis","Denis"]

    return <View>
        <Text style ={StyleBlockUserCenter.styleText}>User</Text>
        {blokedUserList.map((item, index) => (
      <View key={index} style={StyleBlockUserCenter.blockedUsersCinteiner} >
        <TouchableOpacity style={StyleBlockUserCenter.BlockUserButtom} >
        <Image style={StyleBlockUserCenter.styleImage} source={{uri:'https://www.meme-arsenal.com/memes/a297a80a2839282005e0a60135421919.jpg'}}></Image>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    ))}
    </View>
}

export default BlockUserCenter;
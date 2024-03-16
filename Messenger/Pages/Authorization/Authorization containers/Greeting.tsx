import { Text, View } from "react-native"
import React from "react"
import { heightOfHeader, screenHeight } from "../../ChatList/Constants/ConstantsForChatlist"
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

const Greeting=()=>{
    return <View style={{ marginTop: heightOfHeader - screenHeight * 0.08 + 20 }}>
    <Text style={{ alignSelf: "center", fontSize: 25, color: "white" }}>
      {"Welcome to Telintik"}
    </Text>
  </View>
}

export default Greeting;
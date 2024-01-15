import React, { ReactNode } from "react"
import { headerstyles } from "../ChatList/Styles/HeaderStyle"
import { View } from "react-native"
import { screenHeight, screenWidth } from "../ChatList/Constants/ConstantsForChatlist"

interface DefaultContainerInHeaderProps{
    children?:ReactNode
}


const DefaultContainerInHeader:React.FC<DefaultContainerInHeaderProps>=({children})=>{
    return(
        <View
        style={[
          headerstyles.header,
          {
            width: screenWidth * 0.96,
            height: screenHeight * 0.08,
            flexDirection: "row",
          },
        ]}
      >{children}</View>
    )
}
export default DefaultContainerInHeader;
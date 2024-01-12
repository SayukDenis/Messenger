import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView"
import React from "react"

import HeaderForCreateChannelAndGroupOrWriteMessage from "./CreateChannelAndGroupOrWriteMessage/HeaderForCreateChannelAndGroupOrWriteMessage"
import MainForCreateChannelAngGroupOrWriteMessage from "./CreateChannelAndGroupOrWriteMessage/MainForCreateChannelAndGroupOrWriteMessage"

interface CreateChannelAndGroupOrWriteMessageProps{
    navigation:any
}

const CreateChannelAndGroupOrWriteMessage:React.FC<CreateChannelAndGroupOrWriteMessageProps>=({navigation})=>{
    return <BackGroundGradientView>
        <HeaderForCreateChannelAndGroupOrWriteMessage navigation={navigation}/>
        <MainForCreateChannelAngGroupOrWriteMessage navigation={navigation}/>
    </BackGroundGradientView>
}
export default CreateChannelAndGroupOrWriteMessage
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightOfHeader, screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";
import ButtonForSettings from "../../../SemiComponents/ButtonForSettings";

interface MainForCreateChannelAngGroupOrWriteMessageProps {
  navigation:any
}

const MainForCreateChannelAngGroupOrWriteMessage: React.FC<
  MainForCreateChannelAngGroupOrWriteMessageProps
> = ({navigation}) => {
    const marginTop=15;
    const marginLeft=screenWidth*0.03;
    const PressOnCreateGroup=useRef(()=>{
      navigation.navigate("Create Group Page")
    })
  return (
    <View style={{ marginTop: heightOfHeader + marginTop }}>
      <Text style={{ fontSize: 16, marginLeft ,marginBottom:10}}>
        {"Create group/channel"}
      </Text>
      <TouchableOpacity style={{marginBottom:2}}>
        <ButtonForSettings text="Create channel"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={PressOnCreateGroup.current}>
        <ButtonForSettings text="Create group"/>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, marginLeft ,marginBottom:10,marginTop}}>
        {"Message"}
      </Text>
      <TouchableOpacity>
        <ButtonForSettings text="Write message"/>
      </TouchableOpacity>
    </View>
  );
};

export default MainForCreateChannelAngGroupOrWriteMessage;

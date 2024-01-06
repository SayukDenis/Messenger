import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightOfHeader, screenHeight, screenWidth } from "../../Constants/ConstantsForChatlist";
import ButtonForSettings from "../../../SemiComponents/ButtonForSettings";

interface MainForCreateChannelAngGroupOrWriteMessageProps {}

const MainForCreateChannelAngGroupOrWriteMessage: React.FC<
  MainForCreateChannelAngGroupOrWriteMessageProps
> = ({}) => {
    const marginTop=15;
    const marginLeft=screenWidth*0.03;
  return (
    <View style={{ marginTop: heightOfHeader + marginTop }}>
      <Text style={{ fontSize: 16, marginLeft ,marginBottom:10}}>
        {"Create group/channel"}
      </Text>
      <TouchableOpacity style={{marginBottom:2}}>
        <ButtonForSettings text="Create channel"/>
      </TouchableOpacity>
      <TouchableOpacity>
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

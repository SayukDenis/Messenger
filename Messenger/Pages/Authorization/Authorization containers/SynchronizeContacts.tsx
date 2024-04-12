import React from "react";
import { Switch, Text, View } from "react-native";
import { screenWidth } from "../../ChatList/Constants/ConstantsForChatlist";

interface SynchronizeContactsProps{
    toggleSwitch:()=>void;
    isEnabled:boolean
}

const SynchronizeContacts:React.FC<SynchronizeContactsProps> =({isEnabled,toggleSwitch})=>{
    return (<View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          width: screenWidth * 0.8,
          marginTop: 15,
          justifyContent: "space-between",
          //backgroundColor: "black",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            alignSelf: "center",
          }}
        >
          {"Synchronize contacts"}
        </Text>
        <View>
          <Switch
            trackColor={{ false: "#868686", true: "#57C067" }}
            thumbColor={"white"}
            ios_backgroundColor="#868686"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          />
        </View>
      </View>)
}
export default SynchronizeContacts;
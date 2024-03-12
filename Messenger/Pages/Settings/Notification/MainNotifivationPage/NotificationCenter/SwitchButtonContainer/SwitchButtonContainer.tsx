import { Text, View , Switch } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React , {useEffect, useState} from "react";
import ContainerForButtonForSettings from "../../../../../SemiComponents/ContainerForButtonForSettings";
interface SwitchButtonContainerProps {
  text: string;
  switchState:boolean,
  updateState:(index :number) => void,
  index:number
}

const SwitchButtonContainer: React.FC<SwitchButtonContainerProps> = ({ text,switchState,index , updateState}) => {
    const [isEnabled, setIsEnabled] = useState(switchState);
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      updateState(index);
      console.log(text)
    };
    useEffect (()=>{
      setIsEnabled(switchState);
      console.log(switchState + " our state now")
    },[switchState])
  return (
    <ContainerForButtonForSettings>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 15,
          alignSelf: "center",
          color: "#6A38AD",
        }}
      >
        {text}
      </Text>
      <View
        style={{ alignSelf: "center", marginRight: 10, position: "relative" }}
      >
          <Switch style = {{transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }]}}
        trackColor={{ false: "#868686B2", true: '#2ADF47' }}
        thumbColor={isEnabled ? 'white' : '#white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </ContainerForButtonForSettings>
  );
};
export default SwitchButtonContainer;
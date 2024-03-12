import React, {useState} from "react";
import { View , Text } from "react-native";
import StyleNotificationCenter from "./StyleNotificationCenter";
import ButtonForSettings from "../../../../SemiComponents/ButtonForSettings";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwitchButtonContainer from "./SwitchButtonContainer/SwitchButtonContainer";


const NotificationCenter: React.FC<any> = ({ navigation })=> {

  const initialSwitchStates = Array(6).fill(false);

    const ArrayOFBButt : string [] = [ "Privates Chats","Group chats","Channels"];
    const SwitchesButtForNotficationSett : string[] = ["Text notification","Sound", "Vibration"];
    const SwitchesButtForNotficationCOunter : string[] = ["Consider channels","New members","Number of messages"] ;

    const [switchStates, setSwitchStates] = useState (initialSwitchStates);

    const SwitchStateFunck = (index: any) => {
      const newSwitchStates = [...switchStates];
      newSwitchStates[index] = !newSwitchStates[index];
      setSwitchStates(newSwitchStates);
      console.log(switchStates);
    };


    const handleButtonPress = (buttonText: string) => {
      navigation.navigate('EditNotification', { NameOfPage: buttonText });
    };
  
    return <View>
        <View style = {StyleNotificationCenter.articleContainer}><Text style = {StyleNotificationCenter.articleTextStyle}>Notification</Text></View>
        {ArrayOFBButt.map((buttonText, index) => (
        <View style = {{marginBottom:2}}>
            <TouchableOpacity  key={index} onPress={() => handleButtonPress(buttonText)} >
              <ButtonForSettings text={buttonText}  />
            </TouchableOpacity>
        </View>
      ))}
      <View style = {StyleNotificationCenter.articleContainer}><Text style = {StyleNotificationCenter.articleTextStyle}>Notification for Telingtik</Text></View>
      {SwitchesButtForNotficationSett.map((switchButtonText, index) => (
        <View style = {{marginBottom:2}}>
            <TouchableOpacity key={index} onPress={()=>SwitchStateFunck(index)} >
              <SwitchButtonContainer index={index} text={switchButtonText} switchState= {switchStates[index]} updateState={SwitchStateFunck}/>
            </TouchableOpacity>
        </View>
      ))}
      <View style = {StyleNotificationCenter.articleContainer}><Text style = {StyleNotificationCenter.articleTextStyle}>Notification counter</Text></View>
      {SwitchesButtForNotficationCOunter.map((switchButtonText, index) => (
        <View style = {{marginBottom:2}}>
            <TouchableOpacity key={index} onPress={()=>SwitchStateFunck(index+3)} >
              <SwitchButtonContainer  index={index+3} updateState={SwitchStateFunck} text={switchButtonText} switchState= {switchStates[index+3]}/>
            </TouchableOpacity>
        </View>
      ))}
    </View>

}

export default NotificationCenter
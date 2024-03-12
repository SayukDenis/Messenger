import React, {useState} from "react";
import { View ,TouchableOpacity } from "react-native";
import SwitchButtonContainer from "../../../Notification/MainNotifivationPage/NotificationCenter/SwitchButtonContainer/SwitchButtonContainer";
import ButtonForSettings from "../../../../SemiComponents/ButtonForSettings";

const PasswordCenter =()=>{
    const initialSwitchState =[false,false];
    const [switchStates, setSwitchStates] = useState (initialSwitchState);

    const SwitchStateFunck = (index: any) => {
      if(switchStates[0]==false && switchStates[1]== false && index ==1){
        const newSwitchStates = [...switchStates];
        newSwitchStates[0]=  true;
        newSwitchStates[1]=  true;
        setSwitchStates(newSwitchStates);
      }else{
        const newSwitchStates = [...switchStates];
        newSwitchStates[index] = !newSwitchStates[index];
        setSwitchStates(newSwitchStates);
      }
    };
    return(
        <View>
            <TouchableOpacity onPress={()=>SwitchStateFunck(0)} style = {{marginBottom:1, marginTop:"5%"}}>
                <SwitchButtonContainer  updateState={SwitchStateFunck} index={0}  text="On lock code" switchState={switchStates[0]}/>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginBottom:1}}>
                <ButtonForSettings text="Edit lock code"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>SwitchStateFunck(1)} style = {{marginBottom:1}}>
                <SwitchButtonContainer index={1} updateState={SwitchStateFunck} text="Unlock to Face or Touch id" switchState={switchStates[1]}/> 
            </TouchableOpacity>
        </View>
    )
}

export default PasswordCenter;
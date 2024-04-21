import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import StyleEditNotificationProfileCenter from "./StyleEditNotificationProfileCenter";
import SwitchButtonContainer from "../../MainNotifivationPage/NotificationCenter/SwitchButtonContainer/SwitchButtonContainer";
import ContainerForButtonForSettings from "../../../../SemiComponents/ContainerForButtonForSettings";
import SettingModalWindow from "../../../SettingsSemiComponents/SettingModalWindow/SettingModalWindow";
import { DeleteNotificationExceptionForChat } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { useDispatch } from "react-redux";

const EditNotificationProfileCenter : React.FC<any> = ({ navigation , route })=>{
    let SwitchButtons: string[] = ["Notification","Sound"];
    let ProfileName =route.params.ProfileName
    // переробити бо це костильна хуйня
    const initialSwitchStates = Array(2).fill(false);
    const [switchStates, setSwitchStates] = useState (initialSwitchStates);
    const SwitchStateFunck = (index: any) => {
        const newSwitchStates = [...switchStates];
        newSwitchStates[index] = !newSwitchStates[index];
        setSwitchStates(newSwitchStates);
        console.log(switchStates + "      fffff" );
    };

    const initilaModalState = false;
    const [IsModalVisible,setMoadlVisible] = useState(initilaModalState);

    const toggleModal = ()=>{
        setMoadlVisible(!IsModalVisible)
    }

    const dispatch=useDispatch();

    const AgreeButtonFunc = ()=>{
        setMoadlVisible(!IsModalVisible);
        dispatch(DeleteNotificationExceptionForChat(ProfileName));
        navigation.goBack();
    }

    return(
        <View>
            <View style = {{marginTop:"5%"}}>
                {SwitchButtons.map((switchButtonText, index) => (
                    <View style = {{marginBottom:2}}>
                        <TouchableOpacity key={index} onPress={()=>SwitchStateFunck(index)}>
                            <SwitchButtonContainer updateState={SwitchStateFunck} index={index} text={switchButtonText} switchState= {switchStates[index]} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <TouchableOpacity onPress={toggleModal} style ={{marginTop:25}}>
                <ContainerForButtonForSettings>
                    <View style = {StyleEditNotificationProfileCenter.DeleteButtonContainer}>
                        <Text style={StyleEditNotificationProfileCenter.DeleteTextStyle}>Delete exceptions</Text>
                    </View>
                </ContainerForButtonForSettings>
            </TouchableOpacity>
            <SettingModalWindow toggleModal={toggleModal} isModalVisible={IsModalVisible}  
            AgreeButtonfunc={AgreeButtonFunc} DisgreeButtonfunc={toggleModal}/>   
        </View>
    )
}

export default EditNotificationProfileCenter
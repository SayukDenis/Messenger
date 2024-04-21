import React, {useState} from "react";
import { View, TouchableOpacity, Text, Modal, Image } from "react-native";
import StyleEditNotificationCenter from "./StyleEditNotificationCenter";
import SwitchButtonContainer from "../../MainNotifivationPage/NotificationCenter/SwitchButtonContainer/SwitchButtonContainer";
import AddExeptions from "../../../ChatFolderPage/AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/AddExeptions";
import { useDispatch, useSelector } from "react-redux";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import AddMemberSVG from "../../../../SemiComponents/AddMemberSVG";
import { DeleteNotificationExceptionForChat, RemoveAllNotificationForPrivatesChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import DeleteButtonSvg from "./DeleteButtonSVG/DeleteButtinSVG";
import { RemoveAllNotificationForGroupsChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { RemoveAllNotificationForChannels } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import  StyleLogOutModalWindow from "..//..//..//MainSettingPage//settingsPage//Center//LogoutModalWindow//LogoutModalWindowStyle."
import SettingModalWindow from "../../../SettingsSemiComponents/SettingModalWindow/SettingModalWindow";

interface UserProfileProps {
    name: string,
    linkOfPhoto:string
}

const EditNotificationCenter : React.FC<any> = ({ navigation , route })=>{

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const initialSwitchStates = Array(2).fill(false);
    const [switchStates, setSwitchStates] = useState (initialSwitchStates);
    const SwitchStateFunck = (index: any) => {
        const newSwitchStates = [...switchStates];
        newSwitchStates[index] = !newSwitchStates[index];
        setSwitchStates(newSwitchStates);
        console.log(switchStates + "      fffff" );
    };
    let SwitchButtons : string[] = ["Text notification","Sound"];
    const NameOfPage = route.params.NameOfPage;
    const dispatch = useDispatch();

    const DelateAllBut =()=>{
       if(NameOfPage == "Privates Chats"){
        dispatch(RemoveAllNotificationForPrivatesChats())
        setModalVisible(!isModalVisible);
       }else if(NameOfPage =="Group chats" ){
        dispatch(RemoveAllNotificationForGroupsChats())
        setModalVisible(!isModalVisible);
       }else{
        dispatch(RemoveAllNotificationForChannels())
        setModalVisible(!isModalVisible);
       }
    }
    
    let listOfExeptionsForPrivatesChats : UserProfileProps[] ;
    if(NameOfPage == "Privates Chats" ){
        listOfExeptionsForPrivatesChats =useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForPrivateChats);
        listOfExeptionsForPrivatesChats=[];
    }else if (NameOfPage == "Group chats"){
        listOfExeptionsForPrivatesChats=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForGroups);
        listOfExeptionsForPrivatesChats=[];
    }else {
        listOfExeptionsForPrivatesChats=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForChannels);
        listOfExeptionsForPrivatesChats=[];
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
            <View style = {StyleEditNotificationCenter.ExeptionsTextContainer}>
                <Text style = {StyleEditNotificationCenter.ExeptionsStyleText}>Exceptions</Text>
            </View>
            {listOfExeptionsForPrivatesChats.length > 0 && (
                <TouchableOpacity onPress={() => navigation.navigate("AddExeptionsNotifiPage", { NameOfPage: NameOfPage })}  style = {StyleEditNotificationCenter.addNotifivationButton} >
                    <View style = {StyleEditNotificationCenter.styleForSvgContainer}> 
                        <AddMemberSVG kef={screenWidth*0.002} widthOfStroke={screenWidth*0.003}></AddMemberSVG>
                    </View>
                    <Text style = {StyleEditNotificationCenter.ExeptionsButtonTextStyle}>Exeptions</Text>
                    <BackGroundColorForComponents width={screenWidth*0.3} height={screenHeight*0.03}/>
                </TouchableOpacity>
            )}
            {listOfExeptionsForPrivatesChats.length > 0 ? (
                listOfExeptionsForPrivatesChats.map((item: any, index) => (
                    //тут треба буде зробити виделення через айді
                    <TouchableOpacity onPress={()=>navigation.navigate("EditNotificationProfilePage",{ ProfileName: item.name })} style = {StyleEditNotificationCenter.userExeptionsButtons} key={index}>
                        <View style = {{flexDirection:'row', alignItems:'center'}}>
                             <Image style ={{width:screenHeight*0.042, height:screenHeight*0.042, borderRadius:1000000}}   source={{uri:item.linkOfPhoto}}></Image>
                            <Text style = {{marginLeft:"2%"}}>{item.name}</Text>
                        </View>
                        <BackGroundColorForComponents width={screenWidth*0.94} height={screenHeight*0.07}></BackGroundColorForComponents>
                    </TouchableOpacity>
                ))
            ) : (
                    <TouchableOpacity onPress={() => navigation.navigate("AddExeptionsNotifiPage", { NameOfPage: NameOfPage })} style={{ marginTop: "5%" }}>
                        <AddExeptions text="Exeptions" />
                    </TouchableOpacity>
                )}
            {listOfExeptionsForPrivatesChats.length > 0 && (
                <View>
                    <TouchableOpacity 
                    onPress={toggleModal}
                    style={StyleEditNotificationCenter.DeleteAllexeptionButton}>
                        <View style ={{height:'100%',flexDirection:'row',alignItems:'center',paddingLeft:'3%'}}>
                            <DeleteButtonSvg/>
                            <Text style = {{fontSize:20,paddingLeft:'3%', paddingTop:'1%', color:'#CE2500'}}>Delete all exceptions</Text>
                        </View>
                        <BackGroundColorForComponents width={screenWidth*0.94} height={screenHeight*0.05}/>
                    </TouchableOpacity>
                    <SettingModalWindow isModalVisible={isModalVisible}  toggleModal={toggleModal} AgreeButtonfunc={DelateAllBut} DisgreeButtonfunc={toggleModal}/>
                </View>
            )}    
            
        </View>
    )
}

export default EditNotificationCenter;
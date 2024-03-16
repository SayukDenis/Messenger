import React, {useState} from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import StyleEditNotificationCenter from "./StyleEditNotificationCenter";
import SwitchButtonContainer from "../../MainNotifivationPage/NotificationCenter/SwitchButtonContainer/SwitchButtonContainer";
import AddExeptions from "../../../ChatFolderPage/AddFolderPage/AddFolderCenter/ComponentsForAddFolderCenter/AddExeptions";
import { useDispatch, useSelector } from "react-redux";
import BackGroundColorForComponents from "../../../../SemiComponents/BackGroundColorForComponents";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import AddMemberSVG from "../../../../SemiComponents/AddMemberSVG";
import { RemoveAllNotificationForPrivatesChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import DeleteButtonSvg from "./DeleteButtonSVG/DeleteButtinSVG";
import { RemoveAllNotificationForGroupsChats } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import { RemoveAllNotificationForChannels } from "../../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions";
import  StyleLogOutModalWindow from "..//..//..//MainSettingPage//settingsPage//Center//LogoutModalWindow//LogoutModalWindowStyle."

const EditNotificationCenter : React.FC<any> = ({ navigation , route })=>{

    const [isModalVisible, setModalVisible] = useState(false);
        const toggleModal = () => {
            setModalVisible(!isModalVisible);
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
    
    let listOfExeptionsForPrivatesChats : string[] ;
    if(NameOfPage == "Privates Chats" ){
        listOfExeptionsForPrivatesChats =useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForPrivateChats)
    }else if (NameOfPage == "Group chats"  ){
        listOfExeptionsForPrivatesChats=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForGroups)
    }else {
        listOfExeptionsForPrivatesChats=useSelector((state : any)=>  state.SettingsPagesReducers.AddNotifiExeptions.listOfExptionsForChannels)
    }
    return(
        <View>
            <View style = {{marginTop:"5%"}}>
                {SwitchButtons.map((switchButtonText, index) => (
                    <View style = {{marginBottom:2}}>
                        <TouchableOpacity key={index} ><SwitchButtonContainer text={switchButtonText} switchState= {false} ></SwitchButtonContainer></TouchableOpacity>
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
                listOfExeptionsForPrivatesChats.map((item: string, index) => (
                    <View style = {StyleEditNotificationCenter.userExeptionsButtons} key={index}>
                        <Text>{item}</Text>
                        <BackGroundColorForComponents width={screenWidth*0.94} height={screenHeight*0.07}></BackGroundColorForComponents>
                    </View>
                ))
            ) : (
                    <TouchableOpacity onPress={() => navigation.navigate("AddExeptionsNotifiPage", { NameOfPage: NameOfPage })} style={{ marginTop: "5%" }}>
                        <AddExeptions text="Exeptions" />
                    </TouchableOpacity>
                )}
            {listOfExeptionsForPrivatesChats.length > 0 && (
                <View>
                    <TouchableOpacity 
                    onPress={toggleModal }
                    style={StyleEditNotificationCenter.DeleteAllexeptionButton}>
                        <View style ={{height:'100%',flexDirection:'row',alignItems:'center',paddingLeft:'3%'}}>
                            <DeleteButtonSvg/>
                            <Text style = {{fontSize:20,paddingLeft:'3%', paddingTop:'1%', color:'#CE2500'}}>Delete all exceptions</Text>
                        </View>
                        <BackGroundColorForComponents width={screenWidth*0.94} height={screenHeight*0.05}/>
                    </TouchableOpacity>
                    <Modal 
                        animationType="none"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={toggleModal}> 
                        <View style = {StyleLogOutModalWindow.LogoutModalContainer}>
                            <View style = {StyleLogOutModalWindow.LogoutModalWindow}>
                                <View style = {StyleLogOutModalWindow.containerLogoutText}>
                                    <Text style = {StyleLogOutModalWindow.TextStyle}>Do you really want to delete?</Text>
                                </View>
                                <View style = {StyleLogOutModalWindow.containerOfButtons}>
                                    <TouchableOpacity style = {StyleLogOutModalWindow.AgreeButtonStyle} onPress={DelateAllBut}>
                                        <Text style = {StyleLogOutModalWindow.TextStyle}>Agree</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {StyleLogOutModalWindow.DisagreeButtonStyle} onPress={toggleModal}>
                                        <Text style ={StyleLogOutModalWindow.DisadgreeTextStyle}>Disagree</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>                                
                    </Modal>
                </View>
            )}    
            
        </View>
    )
}

export default EditNotificationCenter;
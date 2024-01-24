import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import StyleChatFolder from "./StyleChatFolder";
import ChatFolderHeader from "./ChatFolderHeader/ChatFolderHeader";
import ChatFolderCenter from "./ChatFolderCenter/ChatFolderCenter";
import FolderSvg from "./SvgComponents/FoldersSvg";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import { heightOfHeader } from "../../../ChatList/Constants/ConstantsForChatlist";

const ChatFolderPage : React.FC<any> = ({ navigation })=>{
    return <BackGroundGradientView>
        <View style = {StyleChatFolder.mainConteiner}>
        <HeaderContainer><ChatFolderHeader navigation ={navigation}/></HeaderContainer>
        <ScrollView>
            <View style ={{alignItems:'center',marginTop:heightOfHeader}}>
            </View>
            <View style = {{alignItems:'center', marginTop:"7%"}}>
            <FolderSvg/>
            </View>
         <ChatFolderCenter  navigation ={navigation}/>
        </ScrollView>
    </View>
    </BackGroundGradientView>
}

export default ChatFolderPage;
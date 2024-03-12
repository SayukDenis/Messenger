import React from "react";
import { View, Text, ScrollView,StatusBar,Button } from "react-native";
import QuestionsHeader from "./QuestinsHeader/QuestinsHeader";
import StyleQuestionsPage from "./StyleQuestionsPage";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderContainer from "../../SemiComponents/HeaderContainer";
import { heightOfHeader } from "../../ChatList/Constants/ConstantsForChatlist";

const QuestionPage: React.FC<any> = ({ navigation})=>{
    return(
    <BackGroundGradientView>
        <HeaderContainer><QuestionsHeader navigation = {navigation}/></HeaderContainer>
        <View style = {{marginTop:heightOfHeader}}></View>
        <ScrollView style ={StyleQuestionsPage.textConteinre}>
            <Text>Telintik Social Network Documentation</Text>
            <Text>Introduction:</Text>
            <Text>Telintik is a feature-rich social networking platform that aims to provide users with a secure and private communication experience, similar to Telegram. This documentation will guide you through the various features and functionalities of Telintik, helping you make the most of your social networking experience.</Text>
            <Text>1. Account Creation and Authentication:</Text>
            <Text>To get started with Telintik, users must create an account by providing their basic information, such as name, email address, and a secure password. Once the account is created, users can authenticate themselves using their login credentials.</Text>
            <Text>2. User Profile:</Text>
            <Text>Telintik allows users to create a comprehensive profile that showcases their personal information and interests. Users can upload a profile picture, provide a bio, and add relevant details to personalize their profile</Text>
            <Text>3. Privacy and Security:</Text>
            <Text>Telintik prioritizes user privacy and offers robust security features. These include end-to-end encryption for messages, two-factor authentication for enhanced login security, and the ability to control privacy settings, such as who can view your profile or send you messages.</Text>
            <Text>4. Contacts and Connections:</Text>
            <Text>Users can search for friends, colleagues, or people of interest on Telintik and send connection requests to establish a network of contacts. Once the requests are accepted, users can view each other's profiles and start interacting</Text>
            <Text>5. Messaging:</Text>
            <Text>Telintik provides a messaging platform for seamless communication between users. Users can send text messages, voice notes, images, videos, and documents. Group messaging is also supported, enabling users to create and participate in group conversations.</Text>
            <Text>6. Voice and Video Calls:</Text>
            <Text>Telintik offers high-quality voice and video calling features, a</Text>
        </ScrollView>

    </BackGroundGradientView>
    )
};

export default QuestionPage;
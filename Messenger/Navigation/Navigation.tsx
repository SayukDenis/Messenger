import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationForSettings from '../Pages/Settings/NavigationForSettings';
import { connect } from 'react-redux';
import ChatListNavigation from '../Pages/ChatList/СhatListNavigation/ChatListNavigation';
import DialogueNavigation from '../Pages/Chats/Dialogue/DialogueNavigation/DialogueNavigation';

export const Stack = createStackNavigator();
const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ChatListNavigation' screenOptions={{headerShown:false}}>
                <Stack.Screen name="ChatListNavigation" component={ChatListNavigation}/>
                <Stack.Screen name="NavigationForSettings" component={NavigationForSettings}/>
                <Stack.Screen name="DialogueNavigation" component={DialogueNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default connect(null)(Navigation)
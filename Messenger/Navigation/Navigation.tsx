import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../Pages/ChatList/ChatList';
import NavigationForSettings from '../Pages/Settings/NavigationForSettings';
import NavigationForAuthorization from '../Pages/Authorization/NavigationForAuthorization';
import { connect } from 'react-redux';
import ChatListNavigation from '../Pages/ChatList/СhatListNavigation/ChatListNavigation';
export const Stack = createStackNavigator();
const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ChatListNavigation' screenOptions={{headerShown:false}}>
                <Stack.Screen name="ChatListNavigation" component={ChatListNavigation}/>
                <Stack.Screen name="NavigationForSettings" component={NavigationForSettings}/>
                <Stack.Screen name="NavigationForAuthorization" component={NavigationForAuthorization} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export default connect(null)(Navigation)
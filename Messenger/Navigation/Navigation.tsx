import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from '../Pages/ChatList/ChatList';
import NavigationForSettings from '../Pages/Settings/NavigationForSettings';
import { connect } from 'react-redux';
export const Stack = createStackNavigator();
const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ChatList' screenOptions={{headerShown:false}}>
                <Stack.Screen name="ChatList" component={ChatList}/>
                <Stack.Screen name="NavigationForSettings" component={NavigationForSettings}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export default connect(null)(Navigation)
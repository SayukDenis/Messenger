import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authorization from './Authorization';
import PhoneCodeRegistration from './Pages/PhoneCodeRegistration';
import Registration from './Pages/Registration';
import CountrySelection from './Pages/CountrySelection';
import CodePassword from '../CodePassword/CodePassword';
import { Stack } from '../../Navigation/Navigation';
import ChatList from '../ChatList/ChatList';

const NavigationForAuthorization = () => {

  return (
    <Stack.Navigator 
    initialRouteName="Authorization"
     screenOptions={{ 
        headerShown: false 
        }}>
     <Stack.Screen name="Authorization" component={Authorization} />
    <Stack.Screen name="PhoneCodeRegistration" component={PhoneCodeRegistration} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="CodePassword" component={CodePassword} />
    <Stack.Screen name="CountrySelection" component={CountrySelection}/>
    <Stack.Screen name="ChatList" component={ChatList}/>
  </Stack.Navigator>
  );
 
};

export default NavigationForAuthorization;
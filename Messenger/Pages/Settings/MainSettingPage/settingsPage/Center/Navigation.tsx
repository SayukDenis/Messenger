import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settingspage from '../Settings';
import SavedmessagePage from '../../../SavedMessagePage/SavedMessagePage';
import EditPage from '../../EdiitPage/EditPage';
import QuestionPage from '../../../Questionspage/Questionspage';
import Center from './Center';



const Stack = createStackNavigator();


const Navigation = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerShown: false, 
        }}
      >
      
        <Stack.Screen name="Center" component={Center} />
        <Stack.Screen name="Settings" component={Settingspage} />
        <Stack.Screen name="Saved message" component={SavedmessagePage} />
        <Stack.Screen name="Edit page" component={EditPage} />
        <Stack.Screen name="Question page" component={QuestionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
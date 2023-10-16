import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settingspage from '../Settings';
import SavedmessagePage from '../../../SavedMessagePage/SavedMessagePage';
import EditPage from '../../EdiitPage/EditPage';
import QuestionPage from '../../../Questionspage/Questionspage';
import ChatFolderPage from '../../../ChatFolderPage/ChatFolderPage';
import ConfidentialityPage from '../../../ConfidentialityPage/MainConfidentiality/ConfidentialPage';



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
        <Stack.Screen name="Settings" component={Settingspage} />
        <Stack.Screen name="Saved message" component={SavedmessagePage} />
        <Stack.Screen name="Edit page" component={EditPage} />
        <Stack.Screen name="Question page" component={QuestionPage} />
        <Stack.Screen name="Chat folders" component={ChatFolderPage} />
        <Stack.Screen name="Confidentiality" component={ConfidentialityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
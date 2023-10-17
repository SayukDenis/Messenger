import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settingspage from '../Settings';
import SavedmessagePage from '../../../SavedMessagePage/SavedMessagePage';
import EditPage from '../../EdiitPage/EditPage';
import QuestionPage from '../../../Questionspage/Questionspage';
import ChatFolderPage from '../../../ChatFolderPage/ChatFolderPage';
import ConfidentialityPage from '../../../ConfidentialityPage/MainConfidentiality/ConfidentialPage';
import BlockUser from '../../../ConfidentialityPage/BlockedUser/BlockUser';
import PasswordPage from '../../../ConfidentialityPage/Password/Password';

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
        <Stack.Screen name="Confidentiality" component={NestedNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NestedNavigator=()=> {
  return (
    <Stack.Navigator
    initialRouteName="ConfidentialityPage"
    screenOptions={{
      headerShown: false,
    }}
  >
      <Stack.Screen name="ConfidentialityPage" component={ConfidentialityPage} />
      <Stack.Screen name="BlockUsers" component={BlockUser} />
      <Stack.Screen name="PasswordPage" component={PasswordPage} />
    </Stack.Navigator>
  );
}

export default Navigation;
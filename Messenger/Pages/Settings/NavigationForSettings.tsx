import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settingspage from './MainSettingPage/settingsPage/Settings';
import SavedmessagePage from './SavedMessagePage/SavedMessagePage';
import EditPage from './MainSettingPage/EdiitPage/MainEditPage/EditPage';
import QuestionPage from './Questionspage/Questionspage';
import ChatFolderPage from './ChatFolderPage/ChatFolderPage';
import ConfidentialityPage from './ConfidentialityPage/MainConfidentiality/ConfidentialPage';
import BlockUser from './ConfidentialityPage/BlockedUser/BlockUser';
import PasswordPage from './ConfidentialityPage/Password/Password';
import EditBioPage from './MainSettingPage/EdiitPage/EditBioPage/EditBioPage';
import EditUsernamePage from './MainSettingPage/EdiitPage/EditUserNamePage/EditUserName';
import { Stack } from '../../Navigation/Navigation';

const NavigationForSettings = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Settings" component={Settingspage} />
        <Stack.Screen name="Saved message" component={SavedmessagePage} />
        <Stack.Screen name="Edit page" component={EditPageNavigator} />
        <Stack.Screen name="Question page" component={QuestionPage} />
        <Stack.Screen name="Chat folders" component={ChatFolderPage} />
        <Stack.Screen
          name="Confidentiality"
          component={ConfidentialityPageNavigator}
        />
      </Stack.Navigator>
    </>
  );
};

const ConfidentialityPageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ConfidentialityPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ConfidentialityPage"
        component={ConfidentialityPage}
      />
      <Stack.Screen name="BlockUsers" component={BlockUser} />
      <Stack.Screen name="PasswordPage" component={PasswordPage} />
    </Stack.Navigator>
  );
};
const EditPageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="EditPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EditPage" component={EditPage} />
      <Stack.Screen name="EditBioPage" component={EditBioPage} />
      <Stack.Screen name="EditUsernamePage" component={EditUsernamePage} />
    </Stack.Navigator>
  );
};

export default NavigationForSettings;

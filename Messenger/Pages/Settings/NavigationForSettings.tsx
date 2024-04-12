import React from "react";
import Settingspage from "./MainSettingPage/settingsPage/Settings";
import SavedmessagePage from "./SavedMessagePage/SavedMessagePage";
import EditPage from "./MainSettingPage/EdiitPage/MainEditPage/EditPage";
import QuestionPage from "./Questionspage/Questionspage";
import ChatFolderPage from "./ChatFolderPage/MainChatFolderPage/ChatFolderPage";
import ConfidentialityPage from "./ConfidentialityPage/MainConfidentiality/ConfidentialPage";
import BlockUser from "./ConfidentialityPage/BlockedUser/BlockUser";
import PasswordPage from "./ConfidentialityPage/Password/Password";
import EditBioPage from "./MainSettingPage/EdiitPage/EditBioPage/EditBioPage";
import EditUsernamePage from "./MainSettingPage/EdiitPage/EditUserNamePage/EditUserName";
import AddFolderPage from "./ChatFolderPage/AddFolderPage/AddFolderPage";
import Notification from "./Notification/MainNotifivationPage/Notification";
import LanguagePage from "./LanguagePage/LanguagePage";
import Look from "../Look/Look";
import EditNotificationPage from "./Notification/EditNotificationPage/EditNotificationPage";
import { Stack } from "../../Navigation/Navigation";
import AddExeptionsNotifiPage from "./Notification/AddExeptionsNotifPage/AddExeptionsNotifiPage";
import AddNewChatToFolder from "./ChatFolderPage/AddNewChatToFolder.tsx/AddNewChatToFolder";

 export const NavigationForSettings = () => {
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
        <Stack.Screen name="Notification" component={EditNotificationPageNavigator} />
        <Stack.Screen name="Question page" component={QuestionPage} />
        <Stack.Screen name="Language" component={LanguagePage} />
        <Stack.Screen name="Look" component={Look} />
        <Stack.Screen name="Chat folders" component={ChatFolderPageNAvigator} />
        <Stack.Screen
          name="Confidentiality"
          component={ConfidentialityPageNavigator}
        />
      </Stack.Navigator>
    </>
  );
};

export const ConfidentialityPageNavigator = () => {
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

export const ChatFolderPageNAvigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chatfolders"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddFolderPage" component={AddFolderPage} />
      <Stack.Screen name="Chatfolders" component={ChatFolderPage} />
      <Stack.Screen name="AddNewChatToFolder" component={AddNewChatToFolder} />
    </Stack.Navigator>
  );
};

export const EditNotificationPageNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotificationPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NotificationPage" component={Notification} />
      <Stack.Screen name="EditNotification" component={EditNotificationPage} />
      <Stack.Screen name="AddExeptionsNotifiPage" component={AddExeptionsNotifiPage} />
    </Stack.Navigator>
  );
};

export default NavigationForSettings;

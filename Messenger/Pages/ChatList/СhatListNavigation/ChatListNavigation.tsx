import { Stack } from "../../../Navigation/Navigation";
import React from "react";
import ChatList from "../ChatList";
import SearchForAllPages from "../Components/SearchForAllPages";
import ContactsPage from "../Components/ContactsPage";
import { ChatFolderPageNAvigator } from "../../Settings/NavigationForSettings";
import CreateChannelAndGroupOrWriteMessage from "../Components/CreateChannelAndGroupOrWriteMessage";
import CreateGroupPage from "../Components/CreateGroupPage";
import CreateChannelPage from "../Components/CreateChannelPage";
import WriteMessagePage from "../Components/WriteMessagePage";
import AddMemberPage from "../Components/CreateChannelAndGroupOrWriteMessage/Add member/AddMemberPage";
import AllPhotoInGallery from "../Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Gallery/AllPhotoInGallery";
import CameraComponent from "../Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Camera/CameraComponent";
import CroppImagePage from "../../Authorization/Information containers/Cropp image containers/CroppImagePage";

const ChatListNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="SearchForAllPages" component={SearchForAllPages} />
      <Stack.Screen name="ContactsPage" component={ContactsPage} />
      <Stack.Screen name="Chat folders" component={ChatFolderPageNAvigator} />
      <Stack.Screen
        name="Create channel and group or write message"
        component={CreateChannelAndGroupOrWriteMessageNavigation}
      />
    </Stack.Navigator>
  );
};
const CreateChannelAndGroupOrWriteMessageNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Create channel and group or write navigation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Create channel and group or write navigation"
        component={CreateChannelAndGroupOrWriteMessage}
      />
      <Stack.Screen name="Create Group Page" component={CreateGroupPage} />
      <Stack.Screen name="Create Channel Page" component={CreateChannelPage} />
      <Stack.Screen name="Write Message Page" component={WriteMessagePage} />
      <Stack.Screen name="Add Member Page" component={AddMemberPage} />
      <Stack.Screen name="All Photo In Gallery" component={AllPhotoInGallery} />
      <Stack.Screen name="Camera Component" component={CameraComponent} />
      <Stack.Screen name="Cropp Image Page" component={CroppImagePage} />
    </Stack.Navigator>
  );
};
export default ChatListNavigation;

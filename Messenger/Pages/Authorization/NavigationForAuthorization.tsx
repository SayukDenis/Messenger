import React from "react";
import Authorization from "./Authorization";
import { Stack } from "../../Navigation/Navigation";
import ChatList from "../ChatList/ChatList";
import CountrySelectPage from "./Select country/CountrySelectPage";
import CodeVerificationPage from "./CodeVerification/CodeVerificationPage";
import AddUserInformationPage from "./Information containers/AddUserInformationPage";
import SetBioPage from "./Information containers/Bio containers/SetBioPage";
import SetTagPage from "./Information containers/Tag containers/SetTagPage";
import CameraComponent from "../ChatList/Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Camera/CameraComponent";
import CroppImagePage from "./Information containers/Cropp image containers/CroppImagePage";
import AllPhotoInGallery from "../ChatList/Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Gallery/AllPhotoInGallery";

const NavigationForAuthorization = () => {
  return (
    <Stack.Navigator
      initialRouteName="Authorization"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Authorization" component={Authorization} />
      <Stack.Screen name="Country Select Page" component={CountrySelectPage} />
      <Stack.Screen
        name="Code Verification Page"
        component={CodeVerificationPage}
      />
      <Stack.Screen
        name="Add User Information Page"
        component={AddUserInformationPage}
      />
      <Stack.Screen name="Set Tag Page" component={SetTagPage} />
      <Stack.Screen name="Set Bio Page" component={SetBioPage} />
      <Stack.Screen name="Camera Component" component={CameraComponent} />
      <Stack.Screen name="Cropp Image Page" component={CroppImagePage} />
      <Stack.Screen name="All Photo In Gallery" component={AllPhotoInGallery} />
    </Stack.Navigator>
  );
};

export default NavigationForAuthorization;

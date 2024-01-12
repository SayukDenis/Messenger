import React from "react";
import Folder from "../../../../dao/Models/Folder";
import { connect, useSelector } from "react-redux";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { CountOfUnreadMessages } from "../List of folders containers/Functions/CountOfUnreadMessage";
import { CountOfMessages } from "../List of folders containers/Functions/CountOfMessages";
import { View } from "react-native";
import { screenWidth } from "../../Constants/ConstantsForChatlist";

interface CountOfUnreadMessageOnFolderComponentProps {
  folder: Folder;
  isSelected:any;
}

const CountOfUnreadMessageOnFolderComponent: React.FC<
  CountOfUnreadMessageOnFolderComponentProps
> = ({
  folder,
isSelected
}) => {
  if (folder.folderName == "AllChats") {
    return;
  }
  const backgroundColorOfContainer: string=isSelected?"#466FFF":"#FFFFFF"
  const colorOfText: string=isSelected?"#FFFFFF":"#2B1D1D"
  const opacityOfBackgroundContainer: number=0.35
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });

  let CountOfUnreadMessageOnFolderComponent = 0;
  for (let i = 0; i < folder.chats.length; i++) {
    const numberOfUnreadMessageOnChat = CountOfUnreadMessages(
      selfProfile,
      folder.chats[i]
    );
    CountOfUnreadMessageOnFolderComponent +=
      numberOfUnreadMessageOnChat !== null ? 1 : 0;
  }

  return (
    CountOfUnreadMessageOnFolderComponent > 0 && (
      <View style={{ alignSelf: "center" }}>
        {CountOfMessages(
          CountOfUnreadMessageOnFolderComponent,
          backgroundColorOfContainer,
          colorOfText,
          opacityOfBackgroundContainer,
          14
        )}
      </View>
    )
  );
};

export default connect(null)(CountOfUnreadMessageOnFolderComponent);

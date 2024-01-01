// ListOfFolderContainersForFooter.tsx
import React, { Ref } from "react";
import { View, ScrollView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import FolderContainer from "./FolderContainer";
import { footerstyles } from "../../Styles/FooterStyle";
import FolderIndicator from "./FolderIndicator";
import { connect, useSelector } from "react-redux";
import ListOfFoldersButtons from "./ListOfFoldersButtons";
import ContainerForListOfFolderContainersAndFolderIndicator from "./ContainerForListOfFolderContainersAndFolderIndicator";

interface ListOfFolderContainersForFooterProps {
  scrollViewRefFooter: Ref<ScrollView | null>;
  isVisibleForModalFolder: boolean;
  OnPressRef: any;
  LongPressRef: any;
  positionsOfFolder: any;
  widths: any;
  handleLayout: any;
}

const ListOfFolderContainersForFooter: React.FC<
  ListOfFolderContainersForFooterProps
> = ({
  scrollViewRefFooter,
  isVisibleForModalFolder,
  OnPressRef,
  LongPressRef,
  widths,
  positionsOfFolder,
  handleLayout,
}) => {
  return (
    <ContainerForListOfFolderContainersAndFolderIndicator
      scrollViewRef={scrollViewRefFooter}
    >
      <ListOfFoldersButtons
        isVisibleForModalFolder={isVisibleForModalFolder}
        OnPressRef={OnPressRef}
        LongPressRef={LongPressRef}
        handleLayout={handleLayout}
      />
      <FolderIndicator
        widths={widths}
        positionsOfFolder={positionsOfFolder}
        isVisibleForModalFolder={isVisibleForModalFolder}
      />
    </ContainerForListOfFolderContainersAndFolderIndicator>
  );
};

export default connect(null)(ListOfFolderContainersForFooter);

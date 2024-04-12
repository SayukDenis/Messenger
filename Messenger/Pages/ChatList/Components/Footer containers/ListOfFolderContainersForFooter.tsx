import React, { Ref } from "react";
import { ScrollView } from "react-native";
import FolderIndicator from "./FolderIndicator";
import { connect } from "react-redux";
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

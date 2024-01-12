import React, { useRef, Ref, useEffect } from "react";
import {  ScrollView, Dimensions } from "react-native";
import { connect} from "react-redux";
;
import { booleanForLogging } from "../ChatList";
import ListOfFolderContainersForFooter from "./Footer containers/ListOfFolderContainersForFooter";
import FooterContainer from "./Footer containers/FooterContainer";

interface FooterProps {
  isTouchableForHeader: boolean;
  scrollViewRefFooter: Ref<ScrollView | null>;
  handleLayout: any;
  isVisibleForModalFolder: boolean;
  handleFolderPress: any;
  handleLongPress: any;
  positionsOfFolder: any;
  widths: any;
}

const Footer: React.FC<FooterProps> = ({
  isTouchableForHeader,
  scrollViewRefFooter,
  handleLayout,
  isVisibleForModalFolder,
  handleFolderPress,
  handleLongPress,
  widths,
  positionsOfFolder,
}) => {
  const OnPressRef = useRef((event: any, index:number) => {
    handleFolderPress.current(index);
  });
  const LongPressRef = useRef((e: any, index:number) => {
    handleLongPress.current(e, index);
  });
  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER FOOTER");
    }
  });
  return (
   <FooterContainer isTouchableForHeader={isTouchableForHeader}>
       <ListOfFolderContainersForFooter
          scrollViewRefFooter={scrollViewRefFooter}
          isVisibleForModalFolder={isVisibleForModalFolder}
          OnPressRef={OnPressRef}
          LongPressRef={LongPressRef}
          positionsOfFolder={positionsOfFolder}
          widths={widths}
          handleLayout={handleLayout}
        />
   </FooterContainer>
  );
};

export default connect(null)(Footer);

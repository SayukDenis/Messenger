import React, { useRef, Ref, useEffect } from "react";
import { Animated, ScrollView } from "react-native";
import { connect } from "react-redux";
import { booleanForLogging } from "../ChatList";
import ListOfFolderContainersForFooter from "./Footer containers/ListOfFolderContainersForFooter";
import FooterContainer from "./Footer containers/FooterContainer";
import ModalWindowSelectionChatFooter from "./List of folders containers/ModalWindowSelectionChatComponents/ModalWindowSelectionChatFooter";
import { screenHeight } from "../Constants/ConstantsForChatlist";

interface FooterProps {
  isTouchableForHeader: boolean;
  scrollViewRefFooter: Ref<ScrollView | null>;
  handleLayout: any;
  isVisibleForModalFolder: boolean;
  handleFolderPress: any;
  handleLongPress: any;
  positionsOfFolder: any;
  widths: any;
  isSelectChatMode: boolean;
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
  isSelectChatMode,
}) => {
  const OnPressRef = useRef((event: any, index: number) => {
    handleFolderPress.current(index);
  });
  const LongPressRef = useRef((e: any, index: number) => {
    handleLongPress.current(e, index);
  });
  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER FOOTER");
    }
  });

  const selectionChatFooterAnimationDuration = 400;

  const SelectionChatFooterAnimationStatePosition = useRef(
    new Animated.Value(0)
  );
  const SelectionChatFooterMainFooterAnimationStatePosition = useRef(
    new Animated.Value(0)
  );

  const SelectionChatFooterAnimationPosition =
    SelectionChatFooterAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [screenHeight * 0.06, 0],
    });
  const SelectionChatFooterMainFooterAnimationPosition =
    SelectionChatFooterMainFooterAnimationStatePosition.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, screenHeight * 0.06],
    });

  useEffect(() => {
    if (isSelectChatMode) {
      Animated.sequence([
        Animated.timing(
          SelectionChatFooterMainFooterAnimationStatePosition.current,
          {
            toValue: 1,
            duration: selectionChatFooterAnimationDuration,
            useNativeDriver: true,
          }
        ),
        Animated.timing(SelectionChatFooterAnimationStatePosition.current, {
          toValue: 1,
          duration: selectionChatFooterAnimationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.sequence([
        Animated.timing(SelectionChatFooterAnimationStatePosition.current, {
          toValue: 0,
          duration: selectionChatFooterAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(
          SelectionChatFooterMainFooterAnimationStatePosition.current,
          {
            toValue: 0,
            duration: selectionChatFooterAnimationDuration,
            useNativeDriver: true,
          }
        ),
      ]).start();
    }
  }, [isSelectChatMode]);

  return (
    <FooterContainer isTouchableForHeader={isTouchableForHeader}>
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ translateY: SelectionChatFooterAnimationPosition }],
        }}
      >
        <ModalWindowSelectionChatFooter />
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            { translateY: SelectionChatFooterMainFooterAnimationPosition },
          ],
        }}
      >
        <ListOfFolderContainersForFooter
          scrollViewRefFooter={scrollViewRefFooter}
          isVisibleForModalFolder={isVisibleForModalFolder}
          OnPressRef={OnPressRef}
          LongPressRef={LongPressRef}
          positionsOfFolder={positionsOfFolder}
          widths={widths}
          handleLayout={handleLayout}
        />
      </Animated.View>
    </FooterContainer>
  );
};

export default connect(null)(Footer);

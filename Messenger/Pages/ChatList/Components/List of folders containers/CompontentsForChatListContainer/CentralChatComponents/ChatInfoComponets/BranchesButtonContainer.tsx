import { BranchesButton } from "./BranchesButtonComponents/BranchesButton";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";

interface BranchesButtonContainerProps {
  onBranchPress: () => void;
  isSelectChatMode: boolean;
}

const BranchesButtonContainer: React.FC<BranchesButtonContainerProps> = ({
  onBranchPress,
  isSelectChatMode,
}) => {
  const animationDuration = 600;

  const branchesButtonAnimationStateScale = useRef(new Animated.Value(0));

  const branchesButtonAnimationScale =
    branchesButtonAnimationStateScale.current.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

  useEffect(() => {
    if (isSelectChatMode) {
      Animated.timing(branchesButtonAnimationStateScale.current, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(branchesButtonAnimationStateScale.current, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [isSelectChatMode]);

  return (
    <View style={listOfChatsStyle.branchesButtonContainer}>
      <Animated.View
        style={{ transform: [{ scale: branchesButtonAnimationScale }] }}
      >
        <BranchesButton onBranchPress={onBranchPress} />
      </Animated.View>
    </View>
  );
};

export default connect(null)(BranchesButtonContainer);

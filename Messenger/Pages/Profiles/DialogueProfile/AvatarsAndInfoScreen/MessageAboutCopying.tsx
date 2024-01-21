// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Easing, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import CopyIcon from "../../SemiComponents/Screens/MainScreen/Icons/CopyIcon";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface AnimatedMessageAboutCopyingProps {
  isVisible: boolean;
  onEnd: () => void;
  text: string;
}

const AnimatedMessageAboutCopying: React.FC<
  AnimatedMessageAboutCopyingProps
> = (props) => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    if (!isAnimationRunning) {
      setIsAnimationRunning(true);

      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          setIsAnimationRunning(false);
          props.onEnd();
        }, 8000);
      });
    }
  };

  const resetAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (props.isVisible) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [props.isVisible]);

  const margin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight, 0.9 * screenHeight],
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: margin,
          },
        ],
        position: "absolute",
        zIndex: 2,
      }}
    >
      <View style={styles.containerForAnimatedMessage}>
        <CopyIcon style={styles.copyIcon} />
        <Text style={styles.animatedMessageText}>{props.text}</Text>
      </View>
    </Animated.View>
  );
};

export default AnimatedMessageAboutCopying;

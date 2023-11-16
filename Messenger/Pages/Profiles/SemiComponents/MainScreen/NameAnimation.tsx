import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, Text, TextStyle } from "react-native";

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

interface NameAnimationProps {
  textWidth: number;
  primaryTitle: string;
  style: TextStyle;
}

const NameAnimation: React.FC<NameAnimationProps> = (props) => {
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);

  const animatedValueOne = useRef(new Animated.Value(0)).current;
  const animatedValueTwo = useRef(new Animated.Value(0)).current;

  const PushTextToLeft = (animatedValue: Animated.Value) => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 25 * props.textWidth,
        useNativeDriver: false,
      }).start(() => {
        setIsFirstAnimation(false);
        TeleportText(animatedValue);
      });
    }, 2000);
  };

  const PushTextToCenter = (animatedValue: Animated.Value) => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 0.5,
        duration: 25 * props.textWidth,
        useNativeDriver: false,
      }).start(() => {
        PushTextToLeft(animatedValue);
      });
    }, 6.65 * props.textWidth);
  };

  const TeleportText = (animatedValue: Animated.Value) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start(() => {
      PushTextToCenter(animatedValue);
    });
  };

  useEffect(() => {
    PushTextToLeft(animatedValueOne);
  }, [animatedValueOne]);

  useEffect(() => {
    PushTextToCenter(animatedValueTwo);
  }, [animatedValueTwo]);

  const marginFirstCycle = animatedValueOne.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -screenWidth * 0.005 * props.textWidth],
  });

  const marginForAnimatedValueOne = animatedValueOne.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      screenWidth * 0.005 * props.textWidth,
      0,
      -screenWidth * 0.005 * props.textWidth,
    ],
  });

  const marginForAnimatedValueTwo = animatedValueTwo.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      screenWidth * 0.005 * props.textWidth,
      0,
      -screenWidth * 0.005 * props.textWidth,
    ],
  });

  return (
    <>
      <Animated.View
        style={{
          transform: [
            {
              translateX: isFirstAnimation
                ? marginFirstCycle
                : marginForAnimatedValueOne,
            },
          ],
        }}
      >
        <Text
          numberOfLines={1}
          style={[props.style, { height: props.style.fontSize * 1.23 }]}
        >
          {props.primaryTitle}
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: marginForAnimatedValueTwo,
            },
          ],
        }}
      >
        <Text
          numberOfLines={1}
          style={[
            props.style,
            {
              position: "absolute",
              top: -props.style.fontSize * 1.23,
            },
          ]}
        >
          {props.primaryTitle}
        </Text>
      </Animated.View>
    </>
  );
};

export default NameAnimation;

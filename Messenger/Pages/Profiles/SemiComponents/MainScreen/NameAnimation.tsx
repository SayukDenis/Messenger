import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, Text, TextStyle } from "react-native";

interface NameAnimationProps {
  textWidth: number;
  primaryTitle: string;
  style: TextStyle;
}

const NameAnimation: React.FC<NameAnimationProps> = (props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const screenWidth: number = Dimensions.get("screen").width;

  useEffect(() => {
    const PushTextToLeft = () => {
      setTimeout(() => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 20 * props.textWidth,
          useNativeDriver: false,
        }).start(() => {
          setIsFirstAnimation(false);
          TeleportText();
        });
      }, 2000);
    };

    const PushTextToCenter = () => {
      Animated.timing(animatedValue, {
        toValue: 0.5,
        duration: 20 * props.textWidth,
        useNativeDriver: false,
      }).start(() => {
        PushTextToLeft();
      });
    };

    const TeleportText = () => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(() => {
        PushTextToCenter();
      });
    };

    PushTextToLeft();
  }, [animatedValue]);

  const marginLeftFirstCycle = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      0,
      -screenWidth * 0.00175 * props.textWidth,
      -screenWidth * 0.0035 * props.textWidth,
    ],
  });

  const marginLeft = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      screenWidth * 0.0035 * props.textWidth,
      0,
      -screenWidth * 0.0035 * props.textWidth,
    ],
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: isFirstAnimation ? marginLeftFirstCycle : marginLeft,
          },
        ],
      }}
    >
      <Text numberOfLines={1} style={props.style}>
        {props.primaryTitle}
      </Text>
    </Animated.View>
  );
};

export default NameAnimation;

import React, { useState, useEffect, useRef } from "react";
import { Animated, Dimensions, Text, TextStyle } from "react-native";

interface NameAnimationProps {
  textWidth: number;
  primaryTitle: string;
  style: TextStyle;
}

const NameAnimation: React.FC<NameAnimationProps> = (props) => {
  const animatedValueOne = useRef(new Animated.Value(0)).current;
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const screenWidth: number = Dimensions.get("screen").width;

  useEffect(() => {
    const PushTextToLeft = () => {
      setTimeout(() => {
        Animated.timing(animatedValueOne, {
          toValue: 1,
          duration: 25 * props.textWidth,
          useNativeDriver: false,
        }).start(() => {
          setIsFirstAnimation(false);
          TeleportText();
        });
      }, 2000);
    };

    const PushTextToCenter = () => {
      setTimeout(() => {
        Animated.timing(animatedValueOne, {
          toValue: 0.5,
          duration: 25 * props.textWidth,
          useNativeDriver: false,
        }).start(() => {
          PushTextToLeft();
        });
      }, 6.65 * props.textWidth);
    };

    const TeleportText = () => {
      Animated.timing(animatedValueOne, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(() => {
        PushTextToCenter();
      });
    };

    PushTextToLeft();
  }, [animatedValueOne]);

  const marginLeftFirstCycle = animatedValueOne.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -screenWidth * 0.005 * props.textWidth],
  });

  const marginLeft = animatedValueOne.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      screenWidth * 0.005 * props.textWidth,
      0,
      -screenWidth * 0.005 * props.textWidth,
    ],
  });

  const animatedValueTwo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const PushTextToLeft = () => {
      setTimeout(() => {
        Animated.timing(animatedValueTwo, {
          toValue: 1,
          duration: 25 * props.textWidth,
          useNativeDriver: false,
        }).start(() => {
          TeleportText();
        });
      }, 2000);
    };

    const PushTextToCenter = () => {
      setTimeout(() => {
        Animated.timing(animatedValueTwo, {
          toValue: 0.5,
          duration: 25 * props.textWidth,
          useNativeDriver: false,
        }).start(() => {
          PushTextToLeft();
        });
      }, 6.65 * props.textWidth);
    };

    const TeleportText = () => {
      Animated.timing(animatedValueTwo, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(() => {
        PushTextToCenter();
      });
    };

    PushTextToCenter();
  }, [animatedValueTwo]);

  const marginLeftTwo = animatedValueTwo.interpolate({
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
              translateX: isFirstAnimation ? marginLeftFirstCycle : marginLeft,
            },
          ],
        }}
      >
        <Text numberOfLines={1} style={props.style}>
          {props.primaryTitle}
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: marginLeftTwo,
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
              top: -0.03 * Dimensions.get("screen").height,
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

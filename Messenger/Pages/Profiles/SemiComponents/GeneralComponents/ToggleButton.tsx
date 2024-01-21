// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated, Dimensions } from "react-native";
import { styles } from "./Styles";

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

interface ToggleButtonProps {
  isEnabled: boolean;
  Toggle: (value: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const [currentPosition, setCurrentPosition] = useState(
    props.isEnabled ? "Right" : "Left"
  );

  const AnimatedCircle = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const Move = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 120,
        useNativeDriver: false,
      }).start(() => {
        if (props.isEnabled === false) setCurrentPosition("Left");
        else setCurrentPosition("Right");
      });
    };

    useEffect(() => {
      if (
        (props.isEnabled === false && currentPosition === "Right") ||
        (props.isEnabled === true && currentPosition === "Left")
      )
        Move();
    }, []);

    const marginFromRightToLeft = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.15 * screenWidth - 0.033 * screenHeight, 0],
    });

    const marginFromLeftToRight = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.15 * screenWidth - 0.033 * screenHeight],
    });

    return (
      <TouchableOpacity
        style={styles.toggleButtonContainer}
        onPress={() => {
          props.Toggle(!props.isEnabled);
        }}
      >
        <View
          style={[
            styles.toggleButtonBackground,
            {
              backgroundColor: props.isEnabled
                ? "rgb(42, 223, 71)"
                : "rgb(161, 156, 145)",
            },
          ]}
        >
          <Animated.View
            style={{
              transform: [
                {
                  translateX:
                    currentPosition == "Left"
                      ? marginFromLeftToRight
                      : marginFromRightToLeft,
                },
              ],
            }}
          >
            <View style={styles.toggleButtonCircle} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  return <AnimatedCircle />;
};

export default React.memo(ToggleButton);

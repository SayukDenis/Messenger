// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ViewStyle,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";

interface ToggleButtonProps {
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  isEnabled: boolean;
  Toggle: (value: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const screenWidth: number = Dimensions.get("screen").width;

  const [currentPosition, setCurrentPosition] = useState(
    props.isEnabled ? "Right" : "Left"
  );

  const AnimatedCircle = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const Move = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
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
      outputRange: [0.075 * screenWidth, 0],
    });

    const marginFromLeftToRight = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.075 * screenWidth],
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
            props.containerStyle,
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
            <View style={[styles.toggleButtonCircle, props.circleStyle]} />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  return <AnimatedCircle />;
};

export default React.memo(ToggleButton);

//Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles";

interface UsernameProps {
  primaryTitle: string;
}

const Username: React.FC<UsernameProps> = (props) => {
  const Animate = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const animateText = () => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 350 * props.primaryTitle.length,
          useNativeDriver: false,
        }).start(() => {
          teleportText();
        });
      };

      const teleportText = () => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start(() => {
          animateText();
        });
      };

      animateText();
    }, [animatedValue]);

    const marginLeft = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [
        Dimensions.get("screen").width * 0.049 * props.primaryTitle.length,
        0,
        -Dimensions.get("screen").width * 0.049 * props.primaryTitle.length,
      ],
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX: marginLeft }],
        }}
      >
        <JacquesFrancoisText
          numberOfLines={1}
          text={props.primaryTitle}
          style={styles.profileTitle}
        />
      </Animated.View>
    );
  };

  return (
    <View
      style={[
        styles.containerForProfiteTitle,
        {
          width: Dimensions.get("screen").width * 0.575,
          overflow: "hidden",
          right: (100 * Dimensions.get("screen").width) / 356,
        },
      ]}
    >
      <View style={{ width: props.primaryTitle.length * 15 }}>
        <Animate />
      </View>
    </View>
  );
};

export default Username;

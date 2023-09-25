import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { BlurView } from "expo-blur";

interface BlurProps {
  visibleWhen: boolean;
  onPress: any;
  style?: any;
}

const Blur: React.FC<BlurProps> = (props) => {
  return (
    <>
      {props.visibleWhen && (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <BlurView intensity={10} style={props.style} />
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default Blur;

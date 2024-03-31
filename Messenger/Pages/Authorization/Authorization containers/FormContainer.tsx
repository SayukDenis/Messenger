import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";
import CountryFlagEmoji from "../Select country/Country select containers/CountryFlagEmoji";
import DefaultFormContainer from "./DefaultFormContainer";

interface FormContainerProps {
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  borderTop?: boolean;
  widthOfFirstContainer?: number;
}

const FormContainer: React.FC<FormContainerProps> = ({
  childrenLeft,
  childrenRight,
  borderTop = false,
  widthOfFirstContainer = screenWidth * 0.12,
}) => {
  return (
    <DefaultFormContainer borderTop={borderTop}>
      <View
        style={{
          justifyContent: "center",
          width: widthOfFirstContainer,
          // backgroundColor: "red",
        }}
      >
        {childrenLeft}
      </View>
      <View
        style={{
          height: screenHeight * 0.035,
          width: 1,
          backgroundColor: "white",
          alignSelf: "center",
        }}
      />
      {childrenRight}
    </DefaultFormContainer>
  );
};
export default FormContainer;

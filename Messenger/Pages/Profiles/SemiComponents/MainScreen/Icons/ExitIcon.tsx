import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Polyline } from "react-native-svg";

interface ExitDoorIconProps {
  style?: ViewStyle;
}

const ExitDoorIcon: React.FC<ExitDoorIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="2 0 24 24" fill="none">
      <Path
        d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
        stroke="red"
      />
      <Path
        d="M16 12L16.3904 11.6877L16.6403 12L16.3904 12.3123L16 12ZM4 12.5C3.72386 12.5 3.5 12.2761 3.5 12C3.5 11.7239 3.72386 11.5 4 11.5V12.5ZM12.3904 6.68765L16.3904 11.6877L15.6096 12.3123L11.6096 7.31235L12.3904 6.68765ZM16.3904 12.3123L12.3904 17.3123L11.6096 16.6877L15.6096 11.6877L16.3904 12.3123ZM16 12.5H4V11.5H16V12.5Z"
        fill="red"
      />
    </Svg>
  );
};

export default ExitDoorIcon;

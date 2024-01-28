import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { connect } from "react-redux";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/themes";
interface BackGroundGradinetViewProps {
  children?: ReactNode;
}

const BackGroundGradinetView: React.FC<BackGroundGradinetViewProps> = ({
  children,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <LinearGradient
      colors={[
        theme.backgroundGradient.first,
        theme.backgroundGradient.second,
        theme.backgroundGradient.third,
      ]}
      locations={[0.25, 0.5, 0.75]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ height: screenHeight, width: screenWidth }}
    >
      {children}
    </LinearGradient>
  );
};
export default connect(null)(BackGroundGradinetView);

import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../../Resources/themes";
import { height } from "../Chats/SemiComponents/ChatConstants";
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
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};
export default connect(null)(BackGroundGradinetView);

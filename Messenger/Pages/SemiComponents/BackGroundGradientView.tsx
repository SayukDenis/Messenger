import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { View, ViewStyle, Platform, Dimensions, StatusBar } from 'react-native';
import { headerstyles } from '../ChatList/Styles/HeaderStyle';
import Constants from "expo-constants";
import { connect } from 'react-redux';
interface BackGroundGradinetViewProps {
  children: ReactNode;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const BackGroundGradinetView: React.FC<BackGroundGradinetViewProps> = ({ children }) => {
  return (
    <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {children}
      </LinearGradient>
  );
};
export default connect(null)(BackGroundGradinetView)
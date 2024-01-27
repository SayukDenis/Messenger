import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { screenHeight, screenWidth } from '../ChatList/Constants/ConstantsForChatlist';
import { height } from '../Chats/Dialogue/DialogueConstants';
interface BackGroundGradinetViewProps {
  children?: ReactNode;
}

const BackGroundGradinetView: React.FC<BackGroundGradinetViewProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      locations={[0.25, 0.5, 0.75]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{height: height, width:screenWidth}}>
      {children}
    </LinearGradient>
  );
};
export default connect(null)(BackGroundGradinetView)
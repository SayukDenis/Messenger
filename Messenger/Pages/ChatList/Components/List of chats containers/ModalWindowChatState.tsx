import React, { useState } from "react";
import BlurAll from "../../../SemiComponents/BlurAll";
import { View } from "react-native";
import ChatMenu from "./ChatMenu";
import { modalWindowChatStateStyle } from "../../Styles/ModalWindowChatStateStyle";
import ChatWindow from "./ChatWindow";

interface ModalWindowChatStateProps {
  visibleChatModalWindow: boolean;
  setHiddenModalWindowChatState: React.MutableRefObject<() => void>;
}

const ModalWindowChatState: React.FC<ModalWindowChatStateProps> = ({
  visibleChatModalWindow,
  setHiddenModalWindowChatState,
}) => {
  if (!visibleChatModalWindow) return null;

  const [animation, setAnimation] = useState(true);

  if (!animation) setHiddenModalWindowChatState.current();

  const setEndAnimation = () => setAnimation(false);

  const [visibleChatMenu, setVisibleChatMenu] = useState(true);

  const setHiddenChatMenu = () => setVisibleChatMenu(false);

  return (
    <BlurAll handlePress={() => {}} handlePressOut={setHiddenChatMenu}>
      <View style={modalWindowChatStateStyle.modalWindowScreen}>
        <View style={modalWindowChatStateStyle.modalWindowContainer}>
          <ChatWindow />
          <ChatMenu
            visibleChatMenu={visibleChatMenu}
            setEndAnimation={setEndAnimation}
          />
        </View>
      </View>
    </BlurAll>
  );
};

export default ModalWindowChatState;

import { connect, useDispatch, useSelector } from "react-redux";
import BlurAll from "../../../SemiComponents/BlurAll";
import React, { ReactNode, useState } from "react";
import { EnumForChatListBlurs } from "../Enums/EnumsForChatListBlurs";
import BlurForModeOfEmployment from "./BlurForModeOfEmployment";
import { setStateForEndOfBlurForChatList } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import ModalWindowOfPressOnModeOfEmployment from "./ModalWindowOfPressOnModeOfEmployment";
import ModalWindowOfPressOnHeadersAvatar from "./ModalWindowOfPressOnHeadersAvatar";
interface BlursForChatListProps {
  handlePress: () => void;
  handlePressOut: () => void;
}

const BlursForChatList: React.FC<BlursForChatListProps> = ({
  handlePress,
  handlePressOut,
}) => {
  const [blurStatePrev, setBlurStatePrev] = useState(EnumForChatListBlurs.None);
  const blurState = useSelector((state: any) => {
    let blur: EnumForChatListBlurs =
      state.chatListReducer.enumForChatListBlurs.enumForChatListBlurs;
    return blur;
  });
  const dispatch = useDispatch();
  const stateForEndOfAnimationBlur = useSelector((state: any) => {
    const stateForEnd =
      state.chatListReducer.stateForEndOfBlurForChatList
        .stateForEndOfBlurForChatList;
    return stateForEnd;
  });
  if (blurState == EnumForChatListBlurs.None && !stateForEndOfAnimationBlur) {
    return;
  }

  if (blurStatePrev !== blurState && blurState !== EnumForChatListBlurs.None) {
    setBlurStatePrev(blurState);
  }

  const setContent = (blurState: EnumForChatListBlurs):ReactNode => {
    let content: ReactNode = null;
    switch (blurState) {
      case EnumForChatListBlurs.None: {
        content =
          blurStatePrev != EnumForChatListBlurs.None
            ? setContent(blurStatePrev)
            : null;
        break;
      }
      case EnumForChatListBlurs.ModeOfEmploymentTouch:
        dispatch(setStateForEndOfBlurForChatList(true));
        content = (
          <BlurForModeOfEmployment>
            <ModalWindowOfPressOnHeadersAvatar />
          </BlurForModeOfEmployment>
        );
        break;
      case EnumForChatListBlurs.SelectModeOfEmployment:
        dispatch(setStateForEndOfBlurForChatList(true));
        content = (
          <BlurForModeOfEmployment>
            <ModalWindowOfPressOnModeOfEmployment />
          </BlurForModeOfEmployment>
        );
        break;
      case EnumForChatListBlurs.OnChatPress:
        dispatch(setStateForEndOfBlurForChatList(true));
        
        break
      default:
        break;
    }
    return content;
  };

  return (
    <BlurAll handlePress={handlePress} handlePressOut={handlePressOut}>
      {setContent(blurState)}
    </BlurAll>
  );
};

export default connect(null)(BlursForChatList);

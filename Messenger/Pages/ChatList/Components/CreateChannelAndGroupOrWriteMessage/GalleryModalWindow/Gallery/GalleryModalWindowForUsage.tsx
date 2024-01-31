import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";
import BlurAll from "../../../../../SemiComponents/BlurAll";
import GalleryModalWindow from "../GalleryModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisibleGalleryModalWindow } from "../../../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface GalleryModalWindowForUsageProps {
  navigation: any;
  cameFrom: string;
}

const GalleryModalWindowForUsage: React.FC<GalleryModalWindowForUsageProps> = ({
  navigation,
  cameFrom,
}) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const dispatch = useDispatch();
  const isVisibleGalleryModalWindow: boolean = useSelector((state: any) => {
    return state.chatListReducer.isVisibleGalleryModalWindow
      .isVisibleGalleryModalWindow;
  });

  const handlePress = () => {
    setStartTime(Date.now());
  };

  function handlePressOut() {
    setEndTime(Date.now());
    const duration = startTime - endTime;
    if (duration < 16) {
      dispatch(setIsVisibleGalleryModalWindow(false));
      return;
    }
    setStartTime(Date.now());
  }
  return (
    <>
      {isVisibleGalleryModalWindow ? (
        <BlurAll handlePress={handlePress} handlePressOut={handlePressOut}>
          <GalleryModalWindow cameFrom={cameFrom} navigation={navigation} />
        </BlurAll>
      ) : null}
    </>
  );
};
export default GalleryModalWindowForUsage;

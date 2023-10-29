import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  LayoutChangeEvent,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import { footerstyles } from "../Styles/FooterStyle";
import ListOfFolder from "./ListOfFolder";
import FolderContainer from "./Footer containers/FolderContainer";
import FolderModalWindow from "./Footer containers/FolderModalWindow";
import { BlurView } from "expo-blur";
import { useDispatch, useSelector } from "react-redux";
import { setAnimationState } from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import Footer from "./Footer";
import { mySelfUser } from "../1HelpFullFolder/Initialization";
import ModalWindowFolderState from "./List of folders containers/ModalWindowFolderState";
import { FlatList } from "react-native";
interface MainProps {
  user: MySelfUser;
  onPressForTouchableHeader: () => void;
  isTouchableForHeader: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Main: React.FC<MainProps> = ({
  user,
  isTouchableForHeader,
  onPressForTouchableHeader,
}) => {
  const [selectedFolder, setSelectedFolder] = useState<number>(0);
  const [selectedLongPressFolder, setSelectedLongPressFolder] =
    useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentPosition, setCurrentPosition] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isVisibleForModalFolder, setisVisibleForModalFolder] = useState(false);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionXInContainer, setPositionXInContainer] = useState<number>(0);

  const dispatch = useDispatch();
  const animationState = useSelector((state: any) => {
    return state.animationState;
  });

  const scrollViewRef = useRef<FlatList| null>(null);
  const scrollViewRefFooter = useRef<ScrollView | null>(null);

  const [widths, setWidths] = useState<number[]>(
    user.folders.map(() => screenWidth * 0.1831)
  );
  const viewsRefs: any = [user.folders.forEach(() => useRef(null))];
  const [positionsOfFolder, setPositionOfFolder] = useState<number[]>(
    user.folders.map(() => 0)
  );

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      setCurrentPosition(value);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const handleFolderPress = (index: number) => {
    if (selectedFolder === index) {
      return;
    }
    setSelectedFolder(index);
    scrollToFolder(index);
  };

  const scrollToIcon = (index: number): void => {
    scrollViewRefFooter?.current?.scrollTo({
      x:
        positionsOfFolder[index] - (screenWidth * 0.92) / 2 + widths[index] / 2,
      animated: true,
    });
  };

  const updateSelectedFolder = () => {
    const newSelectedFolder = Math.round(currentPosition / screenWidth);
    scrollToIcon(newSelectedFolder);
    setSelectedFolder(newSelectedFolder);
  };

  const handleHorizontalScroll = (event: any) => {
    let newHorizontalPosition = event.nativeEvent.contentOffset.x;
    if (newHorizontalPosition < 0) {
      newHorizontalPosition = 0;
    } else if (
      newHorizontalPosition >
      screenWidth * (user.folders.length - 1)
    ) {
      newHorizontalPosition = screenWidth * (user.folders.length - 1);
    }
    setCurrentPosition(newHorizontalPosition);
  };

  const handleMomentumScrollEnd = () => {
    updateSelectedFolder();
  };

  const scrollToFolder = (folderId: number) => {
    scrollViewRef.current?.scrollToIndex({
      index: folderId,
      animated: true,
    });
    scrollToIcon(folderId);
  };

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    const { width } = event.nativeEvent.layout;
    const position = event.nativeEvent.layout.x;
    const updatePosition = [...positionsOfFolder];
    updatePosition[index] = position;
    setPositionOfFolder(updatePosition);
    const updatedWidths = [...widths];
    updatedWidths[index] = width;
    setWidths(updatedWidths);
  };

  const handleLongPress = (e: GestureResponderEvent, index: number) => {
    setSelectedLongPressFolder(index);
    const target = e.nativeEvent;
    setPositionX(target.pageX);
    setPositionXInContainer(target.locationX);
    if (target.pageX - target.locationX + widths[index] > screenWidth * 0.98) {
      scrollViewRefFooter.current?.scrollTo({
        x: positionsOfFolder[index] - screenWidth * 0.92 + widths[index],
        animated: false,
      });
      setPositionX(screenWidth * 0.964 - widths[index]);
      setPositionXInContainer(0);
    } else if (target.pageX - target.locationX < screenWidth * 0.04) {
      scrollViewRefFooter.current?.scrollTo({
        x: positionsOfFolder[index],
        animated: false,
      });
      setPositionX(screenWidth * 0.044);
      setPositionXInContainer(0);
    }
    setisVisibleForModalFolder(true);
    dispatch(setAnimationState(true));
  };

  const handlePress = () => {
    setStartTime(Date.now());
  };

  function handlePressOut() {
    setEndTime(Date.now());
    const duration = startTime - endTime;
    if (duration < 16) {
      setisVisibleForModalFolder(false);
      return;
    }
    setStartTime(Date.now());
  }

  const setAnimation = () => {
    dispatch(setAnimationState(false));
  };

  return (
    <>
      <ModalWindowFolderState
        isVisibleForModalFolder={isVisibleForModalFolder}
        animationState={animationState}
        selectedLongPressFolder={selectedLongPressFolder}
        selectedFolder={selectedFolder}
        user={user}
        positionX={positionX}
        positionXInContainer={positionXInContainer}
        widths={widths}
        setAnimation={setAnimation}
        handlePress={handlePress}
        handlePressOut={handlePressOut}
      />

      <FlatList
        data={user.folders}
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        nestedScrollEnabled={true}
        style={{ marginTop: screenHeight * 0.05 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
        <View>
          <ListOfFolder
            key={index}
            user={user}
            currentFolder={index}
            selectedFolder={selectedFolder}
          />
          </View>
        )}
        onScroll={handleHorizontalScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        windowSize={3}
      />

     
      {isTouchableForHeader ? (
        <TouchableOpacity
          onPress={onPressForTouchableHeader}
          style={{
            height: screenHeight,
            width: screenWidth,
            position: "absolute",
            zIndex: 4,
          }}
        />
      ) : null}
    </>
  );
};

export default Main;

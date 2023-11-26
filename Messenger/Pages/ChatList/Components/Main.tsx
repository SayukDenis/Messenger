import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  Platform,
  LayoutChangeEvent,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  setCurrentPositionForChatList,
  setFolderSelectedArray,
  setSelectedFolderForChatList,
} from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import MySelfUser from "../1HelpFullFolder/MySelfUser";
import ListOfFolder from "./ListOfFolder";
import { connect, useDispatch, useSelector } from "react-redux";
import { setAnimationState } from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import Footer from "./Footer";
import { mySelfUser } from "../1HelpFullFolder/Initialization";
import ModalWindowFolderState from "./List of folders containers/ModalWindowFolderState";
import { FlatList } from "react-native";
import Header from "./Header";
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
  const [selectedLongPressFolder, setSelectedLongPressFolder] =
    useState<number>(0);
  const [startTime, setStartTime] = useState(0);
  const [endDragOfChatList, setEndDragOfChatList] = useState(true);
  const [endTime, setEndTime] = useState(0);
  const [isVisibleForModalFolder, setisVisibleForModalFolder] = useState(false);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionXInContainer, setPositionXInContainer] = useState<number>(0);
  const dispatch = useDispatch();
  const animationState = useSelector((state: any) => {
    return state.chatListReducer.animation.animationState;
  });
  const folderSelectedArray = useSelector((state: any) => {
    return state.chatListReducer.folderSelectedArray.folderSelectedArray;
  });
  useEffect(() => {
    //console.log(folderSelectedArray)
  });
  const selectFolder = useSelector((state: any) => {
    return state.chatListReducer.selectedFolder.selectedFolder;
  });

  const scrollViewRef = useRef<FlatList | null>(null);
  const scrollViewRefFooter = useRef<ScrollView | null>(null);

  const widths = useRef<number[]>(user.folders.map(() => screenWidth * 0.1831));
  const viewsRefs: any = [user.folders.forEach(() => useRef(null))];
  const positionsOfFolder = useRef<number[]>(user.folders.map(() => 0));

  const handleFolderPress = useRef((index: number) => {
    setEndDragOfChatList(false);
    NewFolderSelect(index);
    scrollToFolder(index);
  });

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
    dispatch(setCurrentPositionForChatList(newHorizontalPosition));
    const newFolder: number = Math.round(newHorizontalPosition / screenWidth);
    //console.log(mySelfUser.folders[newFolder].name)
    scrollToPosition(newHorizontalPosition);
    if (newFolder != selectFolder) {
      if(!endDragOfChatList){
          return
      }
      NewFolderSelect(newFolder);
    }
  };
  const NewFolderSelect = (newFolder: number) => {
    dispatch(setSelectedFolderForChatList(newFolder));
    let bufferFolderSelectedArray = [...folderSelectedArray];
    bufferFolderSelectedArray[selectFolder] = false;
    bufferFolderSelectedArray[newFolder] = true;
    dispatch(setFolderSelectedArray(bufferFolderSelectedArray));
  };
  const scrollToFolder =  async (folderId: number) => {
    await scrollViewRef.current?.scrollToIndex({
      index: folderId,
      animated: true,
    });

    //scrollToIconOnTouch(folderId)
  };
  const scrollToPosition = (currentPosition: number) => {
    scrollViewRefFooter.current?.scrollTo({
      x:
        -(screenWidth * 0.92) / 2 +
        widths.current[Math.round(currentPosition / screenWidth)] / 2 +
        ((((currentPosition -
          screenWidth * Math.round(currentPosition / screenWidth)) %
          screenWidth) /
          screenWidth) *
          widths.current[Math.round(currentPosition / screenWidth)] +
          positionsOfFolder.current[Math.round(currentPosition / screenWidth)]),
      animated: false,
    });
  };

  const handleLayout = useRef((event: LayoutChangeEvent, index: number) => {
    const { width } = event.nativeEvent.layout;
    const position = event.nativeEvent.layout.x;
    const updatePosition = [...positionsOfFolder.current];
    updatePosition[index] = position;
    positionsOfFolder.current = updatePosition;
    const updatedWidths = [...widths.current];
    updatedWidths[index] = width;
    widths.current = updatedWidths;
  });

  const handleLongPress = useRef((e: GestureResponderEvent, index: number) => {
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
  });
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
        selectedFolder={selectFolder}
        user={user}
        positionX={positionX}
        positionXInContainer={positionXInContainer}
        widths={widths.current}
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
        onMomentumScrollEnd={()=>{setEndDragOfChatList(true)}}
        scrollEventThrottle={1}
        nestedScrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <ListOfFolder key={index} user={user} currentFolder={index} />
          </View>
        )}
        onScroll={handleHorizontalScroll}
        // onMomentumScrollBegin={()=>{}}
        windowSize={3}
        //initialNumToRender={3}
      />
      <Footer
        user={mySelfUser}
        isTouchableForHeader={isTouchableForHeader}
        scrollViewRefFooter={scrollViewRefFooter}
        handleLayout={handleLayout}
        isVisibleForModalFolder={isVisibleForModalFolder}
        handleFolderPress={handleFolderPress}
        handleLongPress={handleLongPress}
        positionsOfFolder={positionsOfFolder}
        widths={widths}
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

export default connect(null)(Main);

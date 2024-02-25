import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  Dimensions,
  LayoutChangeEvent,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from "react-native";
import {
  setBooleanForTouchOnHamburgerInHeaderChatList,
  setCurrentPositionForChatList,
  setEnumForChatListBlurs,
  setFolderSelectedArray,
  setSelectedFolderForChatList,
} from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import ListOfFolder from "./ListOfFolder";
import { connect, useDispatch, useSelector } from "react-redux";
import { setAnimationStateForFolderChatList } from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import Footer from "./Footer";
import ModalWindowFolderState from "./List of folders containers/ModalWindowFolderState";
import { FlatList } from "react-native";
import SelfProfile from "../../../dao/Models/SelfProfile";
import { booleanForLogging } from "../ChatList";
import BlursForChatList from "./Headers containers/BlursForChatList";
import { EnumForChatListBlurs } from "./Enums/EnumsForChatListBlurs";
import ModalWindowChatState from "./List of chats containers/ModalWindowChatState";

interface MainProps {
  navigation: any;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Main: React.FC<MainProps> = ({ navigation }) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const currentTab = useSelector((state: any) => {
    let Tab = state.chatListReducer.currentTab.currentTab;
    return Tab;
  });

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
    return state.chatListReducer.animationForChatListFolder
      .animationForChatListFolder;
  });
  const folderSelectedArray = useSelector((state: any) => {
    return state.chatListReducer.folderSelectedArray.folderSelectedArray;
  });
  const isTouchableForHeader = useSelector((state: any) => {
    // console.log(state.chatListReducer.booleanForHamburgerTouchable.isTouchable)
    return state.chatListReducer.booleanForHamburgerTouchable.isTouchable;
  });

  const selectFolder = useSelector((state: any) => {
    //console.log(selfProfile.tabs[currentTab].folders[state.chatListReducer.selectedFolder.selectedFolder].folderName)
    return state.chatListReducer.selectedFolder.selectedFolder;
  });

  const scrollViewRef = useRef<FlatList | null>(null);
  const scrollViewRefFooter = useRef<ScrollView | null>(null);

  const widths = useRef<number[]>(
    selfProfile.tabs[currentTab].folders.map(() => screenWidth * 0.1831)
  );

  const positionsOfFolder = useRef<number[]>(
    selfProfile.tabs[currentTab].folders.map(() => 0)
  );

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
      screenWidth * (selfProfile.tabs[currentTab].folders.length - 1)
    ) {
      newHorizontalPosition =
        screenWidth * (selfProfile.tabs[currentTab].folders.length - 1);
    }
    dispatch(setCurrentPositionForChatList(newHorizontalPosition));
    const newFolder: number = Math.round(newHorizontalPosition / screenWidth);

    scrollToPosition(newHorizontalPosition);
    if (newFolder != selectFolder) {
      if (!endDragOfChatList) {
        return;
      }
      NewFolderSelect(newFolder);
    }
  };
  useEffect(() => {
    scrollViewRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, [currentTab]);
  const NewFolderSelect = (newFolder: number) => {
    dispatch(setSelectedFolderForChatList(newFolder));
    let bufferFolderSelectedArray = [...folderSelectedArray];
    bufferFolderSelectedArray[selectFolder] = false;
    bufferFolderSelectedArray[newFolder] = true;
    dispatch(setFolderSelectedArray(bufferFolderSelectedArray));
  };
  const scrollToFolder = async (folderId: number) => {
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
  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER MAIN");
    }
  }, [booleanForLogging]);

  const handleLongPress = useRef((e: GestureResponderEvent, index: number) => {
    setSelectedLongPressFolder(index);
    const target = e.nativeEvent;
    setPositionX(target.pageX);
    setPositionXInContainer(target.locationX);
    if (
      target.pageX - target.locationX + widths.current[index] >
      screenWidth * 0.98
    ) {
      scrollViewRefFooter.current?.scrollTo({
        x:
          positionsOfFolder.current[index] -
          screenWidth * 0.92 +
          widths.current[index],
        animated: false,
      });
      setPositionX(screenWidth * 0.98 - widths.current[index]);
      setPositionXInContainer(0);
    } else if (target.pageX - target.locationX < screenWidth * 0.04) {
      scrollViewRefFooter.current?.scrollTo({
        x: positionsOfFolder.current[index],
        animated: false,
      });
      setPositionX(screenWidth * 0.06);
      setPositionXInContainer(0);
    }
    setisVisibleForModalFolder(true);
    dispatch(setAnimationStateForFolderChatList(true));
  });

  const handlePress = () => {
    setStartTime(Date.now());
  };

  function handlePressOut() {
    setEndTime(Date.now());
    const duration = startTime - endTime;
    if (duration < 16) {
      dispatch(setEnumForChatListBlurs(EnumForChatListBlurs.None));
      setisVisibleForModalFolder(false);
      return;
    }
    setStartTime(Date.now());
  }

  const setAnimation = () => {
    dispatch(setAnimationStateForFolderChatList(false));
  };

  const [visibleChatModalWindow, setVisibleChatModalWindow] = useState(false);

  const setVisibleModalWindowChatState = useRef(() => {
    setVisibleChatModalWindow(true);
  });

  const setHiddenModalWindowChatState = useRef(() => {
    setVisibleChatModalWindow(false);
  });

  return (
    <>
      <View style={{ flex: 1 }}>
        <ModalWindowFolderState
          isVisibleForModalFolder={isVisibleForModalFolder}
          animationState={animationState}
          selectedLongPressFolder={selectedLongPressFolder}
          selectedFolder={selectFolder}
          positionX={positionX}
          positionXInContainer={positionXInContainer}
          widths={widths}
          setAnimation={setAnimation}
          handlePress={handlePress}
          handlePressOut={handlePressOut}
        />
        <ModalWindowChatState
          visibleChatModalWindow={visibleChatModalWindow}
          setHiddenModalWindowChatState={setHiddenModalWindowChatState}
        />
        <BlursForChatList
          handlePress={handlePress}
          handlePressOut={handlePressOut}
        />
        <FlatList
          data={selfProfile.tabs[currentTab].folders}
          horizontal
          pagingEnabled
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={() => {
            setEndDragOfChatList(true);
          }}
          scrollEventThrottle={1}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ListOfFolder
              key={index}
              currentFolder={index}
              navigation={navigation}
              setVisibleModalWindowChatState={setVisibleModalWindowChatState}
            />
          )}
          onScroll={handleHorizontalScroll}
          windowSize={10}
          initialNumToRender={1}
        />
        <Footer
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
            onPress={() =>
              dispatch(
                setBooleanForTouchOnHamburgerInHeaderChatList(
                  !isTouchableForHeader
                )
              )
            }
            style={{
              height: screenHeight,
              width: screenWidth,
              position: "absolute",
              zIndex: 4,
            }}
          />
        ) : null}
      </View>
    </>
  );
};

export default connect(null)(Main);

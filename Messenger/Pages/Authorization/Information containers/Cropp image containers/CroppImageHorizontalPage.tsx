import React, { useState, useEffect, useRef, Dispatch } from "react";
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import { TouchableOpacity } from "react-native";
import CrossSVG from "./CrossSVG";
import ArrowForSettingsButton from "../../../ChatList/Components/SVG/ArrowForSettingsButton";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsVisibleGalleryModalWindow,
  setPhotoForCreateGroupOrChannel,
} from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { CroppImageProps } from "./CroppImageVertiacalPage";
import { Accelerometer } from "expo-sensors";
interface CroppImageHorizontalPageProps {
  navigation: any;
  route: any;
}
const CroppImageHorizontalPage: React.FC<CroppImageHorizontalPageProps> = ({
  navigation,
  route,
}) => {
  const picture: { width: number; height: number; uri: string } =
    route.params.picture;
  const [croppImage, setCroppImage] = useState<CroppImageProps>({
    uri: picture.uri,
    width: picture.height,
    x: 0,
    y: (picture.width - picture.height) / 2,
  });
  const margin = 20;
  const height: number = screenWidth - margin;
  const width: number = picture.width * (height / picture.height);

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollViewRefHigh = useRef<ScrollView>(null);
  const scrollViewRefHorizontal = useRef<ScrollView>(null);
  const [isInitialRender, setInitialRender] = useState(false);
  const [kef, setKef] = useState(1);
  const selectedPhoto: string = useSelector((state: any) => {
    return state.chatListReducer.setPhotoForCreateGroupOrChannel
      .photoForCreateGroupOrChannel;
  });
  const dispatch = useDispatch();
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!isInitialRender) {
      return;
    }
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    const currentOffsetX = event.nativeEvent.contentOffset.x;
    const currentSizeHeight = event.nativeEvent.contentSize.height;
    const kefOfIncreaseHeight = currentSizeHeight / height;
    setKef(kefOfIncreaseHeight);

    scrollViewRefHigh.current?.scrollTo({
      x: currentOffsetX,
      y: currentOffsetY,
      animated: false,
    });
    scrollViewRefHorizontal.current?.scrollTo({
      x: currentOffsetX,
      y: currentOffsetY,
      animated: false,
    });
  };
  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    const currentOffsetX = event.nativeEvent.contentOffset.x;
    const currentSizeHeight = event.nativeEvent.contentSize.height;
    const kefOfIncreaseHeight = currentSizeHeight / height;
    setKef(kefOfIncreaseHeight);
    const desiredMinHorizontalOffset =
      (margin / 2) * kefOfIncreaseHeight - margin / 2 < 0
        ? 0
        : (margin / 2) * kefOfIncreaseHeight - margin / 2;
    const desiredMaxHorizontalOffset =
      desiredMinHorizontalOffset + width * kefOfIncreaseHeight - height;
    let x = currentOffsetX;
    let y = currentOffsetY;
    if (desiredMinHorizontalOffset > currentOffsetX) {
      x = desiredMinHorizontalOffset;
    } else if (desiredMaxHorizontalOffset < currentOffsetX) {
      x = desiredMaxHorizontalOffset;
    }
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    scrollViewRef.current?.scrollTo({
      x,
      y,
      animated: false,
    });
    const newHeightOfPicture =
      height / kefOfIncreaseHeight / (height / picture.height);
    setCroppImage({
      x:
        (x - desiredMinHorizontalOffset) /
        kefOfIncreaseHeight /
        (width / picture.width),
      y: y / kefOfIncreaseHeight / (width / picture.width),
      uri: picture.uri,
      width:
        newHeightOfPicture > picture.height
          ? picture.height
          : newHeightOfPicture,
    });
  };

  const onBackButtonPress = () => {
    navigation.goBack();
  };
  const onSubmitButtonPress = () => {
    saveImage();
  };
  const saveImage = async () => {
    const sourceUri = picture.uri;
    const id =
      "x:" + croppImage.x ||
      0 + "y:" + croppImage.y ||
      0 + "width:" + croppImage.width;
    const savePath = `${FileSystem.documentDirectory}image${
      (picture as any).creationTime
    }${id}.png`;
    if (selectedPhoto != "") {
      await deleteFileIfExists(selectedPhoto);
    }
    await deleteFileIfExists(savePath);
    const cropOptions = {
      originX: croppImage?.x || 0,
      originY: croppImage?.y || 0,
      width: croppImage?.width || picture.width,
      height: croppImage?.width || picture.width,
    };
    await ImageManipulator.manipulateAsync(
      sourceUri,
      [
        {
          crop: cropOptions,
        },
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    )
      .then(async (manipulatedImage) => {
        await FileSystem.copyAsync({
          from: manipulatedImage.uri,
          to: savePath,
        });
      })
      .then(() => {
        dispatch(setPhotoForCreateGroupOrChannel(savePath));
        Accelerometer.removeAllListeners();
       dispatch(setIsVisibleGalleryModalWindow(false));
        navigation.navigate(route.params.cameFrom);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const deleteFileIfExists = async (filePath: string) => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      if (fileInfo.exists) {
        await FileSystem.deleteAsync(filePath);
        //console.log("Delete file");
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const _renderImage = () => (
    <ScrollView
      ref={scrollViewRefHigh}
      style={{
        alignSelf: "center",
        backgroundColor: "blue",
      }}
    >
      <ScrollView
        ref={scrollViewRefHorizontal}
        horizontal={true}
        contentOffset={{ x: (width - screenWidth) / 2, y: 0 }}
        style={{
          width: screenWidth,
        }}
      >
        <View
          style={{
            height: height * kef,
            width: (width + margin) * kef,
            alignSelf: "center",
            //backgroundColor: "gray",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: picture.uri }}
            style={{
              width: width * kef,
              height: height * kef,
              alignSelf: "center",
            }}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          height: height,
          backgroundColor: "red",
        }}
      >
        {_renderImage()}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          // backgroundColor: "blue",
          opacity: 0.6,
          width: height * 3,
          aspectRatio: 1,
          borderRadius: 10000,
          position: "absolute",
          borderWidth: height,
          borderColor: "black",
        }}
      />

      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        onScrollBeginDrag={() => {
          setInitialRender(true);
        }}
        horizontal={true}
        decelerationRate={0.1}
        onMomentumScrollEnd={onScrollEnd}
        onScrollEndDrag={onScrollEnd}
        contentOffset={{ x: (width - screenWidth) / 2, y: 0 }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={10}
        minimumZoomScale={1}
        maximumZoomScale={8}
        style={{
          position: "absolute",

          width: screenWidth,
          height: height,
          //backgroundColor: "red",
          opacity: 0.3,
        }}
      >
        <View
          style={{
            width: width + margin,
            height,
            //backgroundColor: "red",
            justifyContent: "center",
          }}
        ></View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          width: screenWidth,
          height: screenHeight * 0.1,
          //backgroundColor: "blue",
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          onPress={onBackButtonPress}
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            height: screenHeight * 0.06,
            aspectRatio: 1,
            borderRadius: screenHeight,
            marginLeft: 20,
            opacity: 0.7,
            justifyContent: "center",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <CrossSVG />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSubmitButtonPress}
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            height: screenHeight * 0.06,
            aspectRatio: 1,
            borderRadius: screenHeight,
            marginRight: 20,
            opacity: 0.7,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              // backgroundColor: "red"
              marginLeft: screenWidth * 0.01,
            }}
          >
            <ArrowForSettingsButton
              color={"#2B1D1D"}
              arrowHeight={screenHeight * 0.03}
              arrowWidth={screenWidth * 0.05}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CroppImageHorizontalPage;

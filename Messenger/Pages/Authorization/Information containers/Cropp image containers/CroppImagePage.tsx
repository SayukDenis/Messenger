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
import { setPhotoForCreateGroupOrChannel } from "../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
interface CroppImagePageProps {
  navigation: any;
  route: any;
}
export interface CroppImageProps {
  uri: string;
  x?: number;
  y?: number;
  width?: number;
}
const CroppImagePage: React.FC<CroppImagePageProps> = ({
  navigation,
  route,
}) => {
  const picture: { width: number; height: number; uri: string } =
    route.params.picture;
  const [croppImage, setCroppImage] = useState<CroppImageProps>({
    uri: picture.uri,
    width: picture.width,
    x: 0,
    y: (picture.height - picture.width) / 2,
  });
  const margin = 0;
  const width = screenWidth - margin;
  const height = picture.height * (width / picture.width);
  const heightOfScrolledView = screenHeight + (height - width);
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
    const kefOfIncreaseHeight = currentSizeHeight / heightOfScrolledView;
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
    const kefOfIncreaseHeight = currentSizeHeight / heightOfScrolledView;
    setKef(kefOfIncreaseHeight);
    const heightOfScrollCircle = (screenHeight + (height - width) - height) / 2;
    const desiredMinVerticalOffset =
      heightOfScrollCircle * (kefOfIncreaseHeight - 1) < 0
        ? 0
        : heightOfScrollCircle * (kefOfIncreaseHeight - 1);
    const desiredMaxVerticalOffset =
      desiredMinVerticalOffset + (height * kefOfIncreaseHeight - width);
    const desiredMinHorizontalOffset =
      (margin / 2) * kefOfIncreaseHeight - margin / 2 < 0
        ? 0
        : (margin / 2) * kefOfIncreaseHeight - margin / 2;
    const desiredMaxHorizontalOffset =
      desiredMinHorizontalOffset + width * kefOfIncreaseHeight - width;
    let x = currentOffsetX;
    let y = currentOffsetY;
    if (currentOffsetY < desiredMinVerticalOffset) {
      y = desiredMinVerticalOffset;
    } else if (currentOffsetY > desiredMaxVerticalOffset) {
      y = desiredMaxVerticalOffset;
    }
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

    setCroppImage({
      x:
        (x - desiredMinHorizontalOffset) /
        kefOfIncreaseHeight /
        (width / picture.width),
      y:
        (y - desiredMinVerticalOffset) /
        kefOfIncreaseHeight /
        (width / picture.width),
      uri: picture.uri,
      width:
        width / kefOfIncreaseHeight / (width / picture.width) > picture.width
          ? picture.width
          : width / kefOfIncreaseHeight / (width / picture.width),
    });
  };

  const onBackButtonPress = () => {
    navigation.goBack();
  };
  const onSubmitButtonPress = () => {
    route.params.setOnAddPhotoPress(false);
    saveImage();
    navigation.navigate("Add User Information Page");
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
    await deleteFileIfExists(selectedPhoto);
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
        dispatch(setPhotoForCreateGroupOrChannel(savePath));
      })
      .catch((error) => {
        //console.error(error);
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
      contentOffset={{ y: (height - width) / 2, x: 0 }}
      style={{
        height: screenHeight,
        alignSelf: "center",
        width: screenWidth,
      }}
    >
      <ScrollView
        ref={scrollViewRefHorizontal}
        horizontal={true}
        style={{
          width: screenWidth,
        }}
      >
        <View
          style={{
            height: heightOfScrolledView * kef,
            width: screenWidth * kef, //*kefOfIncreaseHeight
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
          height: screenHeight,
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
          width: width * 3,
          aspectRatio: 1,
          borderRadius: 10000,
          position: "absolute",
          borderWidth: width,
          borderColor: "black",
        }}
      />
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        onScrollBeginDrag={() => {
          setInitialRender(true);
        }}
        decelerationRate={0.1}
        onMomentumScrollEnd={onScrollEnd}
        onScrollEndDrag={onScrollEnd}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={10}
        minimumZoomScale={1}
        maximumZoomScale={8}
        contentOffset={{ y: (height - width) / 2, x: 0 }}
        style={{
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          //backgroundColor: "red",
          opacity: 0.3,
        }}
      >
        <View
          style={{
            width: screenWidth,
            height: heightOfScrolledView,
            //backgroundColor: "black",
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

export default CroppImagePage;

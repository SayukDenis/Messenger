import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from "react-native";
import { AutoFocus, Camera, CameraType, FlashMode } from "expo-camera";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../../Constants/ConstantsForChatlist";
import { FlipType, SaveFormat, manipulateAsync } from "expo-image-manipulator";
import CrossSVG from "../../../../../Authorization/Information containers/Cropp image containers/CrossSVG";
import ReverseCameraSVG from "./ReverseCameraSVG";
import FlashLightSVG from "./FlashLightSVG";
import ScaleOfCameraContainer from "./ScaleOfCameraContainer";
import { Accelerometer } from "expo-sensors";
import { myFixedNumber } from "./Functions/FunctionsForScaleCamera";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

interface CameraProps {
  navigation: any;
  route: any;
}
const maxHeightOfCircle = screenHeight * 0.04;
const minHeightOfCircle = screenHeight * 0.03;

const CameraComponent: React.FC<CameraProps> = ({ navigation, route }) => {
  const firstDigit = 1;
  const secondDigit = 2;
  const thirdDigit = 3;
  const isFocused = useIsFocused();
  const scrollZoomRef = useRef<ScrollView>(null);
  const horizontalScrollZoomRef = useRef<ScrollView>(null);
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
  const cameraRef = useRef<Camera | null>(null);
  const heightOfCamera = (screenWidth / 3) * 4;
  const [zoom, setZoom] = useState(0);
  const [orientation, setOrientation] = useState<number>(0);
  const [scrolling, setScrolling] = useState(false);
  const [
    isScrollingForHorizontalScrollView,
    setIsScrollingForHorizontalScrollView,
  ] = useState<boolean>(false);
  const [isScrollingForZoomScrollView, setIsScrollingForZoomScrollView] =
    useState<boolean>(false);
  const widthOfEveryContainer = screenWidth / 16;
  const selectPhoto = useSelector(
    (state: any) =>
      state.chatListReducer.setPhotoForCreateGroupOrChannel
        .photoForCreateGroupOrChannel
  );
  useEffect(() => {
    if (!isFocused) {
      Accelerometer.removeAllListeners();
    } else {
      Accelerometer.addListener((results) => {
        const x = results.x;
        const y = results.y;
        const angleInRadians = Math.atan2(y, x);
        const angleInDegrees = angleInRadians * (180 / Math.PI);
        calculateAngle(angleInDegrees);
      });
    }
  }, [isFocused]);

  const calculateAngle = (angle: number) => {
    if (angle < -45 && angle > -135) {
      setOrientation(0);
    } else if ((angle > -180 && angle < -135) || (angle > 135 && angle < 180)) {
      setOrientation(90);
    } else if (angle > 45 && angle < 135) {
      setOrientation(180);
    } else if (angle > -45 && angle < 45) {
      setOrientation(270);
    }
  };
  const removeAccelerometerListener = () => {
    Accelerometer.removeAllListeners();
  };

  const flipCamera = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
    zoomTo(1);
  };
  const changeFlashMode = () => {
    setFlashMode((prev: FlashMode) =>
      prev == FlashMode.on ? FlashMode.off : FlashMode.on
    );
  };
  const onBackButtonPress = () => {
    removeAccelerometerListener();
    navigation.goBack();
  };
  const handleTakePhoto = async () => {
    if (!cameraRef.current) return;

    let photo = await cameraRef.current?.takePictureAsync();

    if (type === CameraType.front) {
      photo = await manipulateAsync(
        photo?.uri || "",
        [
          { rotate: orientation == 90 || orientation == 270 ? 0 : 180 },
          { flip: FlipType.Vertical },
        ],
        { format: SaveFormat.PNG }
      );
    } else if (orientation == 90 || orientation == 270) {
      photo = await manipulateAsync(photo.uri, [{ rotate: 180 }], {
        format: SaveFormat.PNG,
      });
    }
    //removeAccelerometerListener();
    navigation.navigate("Cropp Image Page", {
      picture: photo,
      cameFrom: route.params.cameFrom,
    });
  };
  const zoomTo = (zoomTo: number) => {
    scrollZoomRef.current?.scrollResponderZoomTo({
      x: 0,
      y: 0,
      width: screenWidth / zoomTo,
      height: heightOfCamera / zoomTo,
      animated: false,
    });
    horizontalScrollZoomRef.current?.scrollTo({
      y: 0,
      x: (zoomTo - 1) * widthOfEveryContainer + 1,
      animated: false,
    });

    setZoom((zoomTo - 1) * 0.01);
  };
  const onZoomScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = event.nativeEvent.contentOffset.x;
    let zooming: number = x / widthOfEveryContainer + 1;

    if (zooming < 1) {
      zooming = 1;
    } else if (zooming >= 8) {
      zooming = 8;
    }

    const finalZooming = myFixedNumber(zooming);
    if (isScrollingForHorizontalScrollView) {
      //console.log("Low scroll");
      scrollZoomRef.current?.scrollResponderZoomTo({
        x: 0,
        y: 0,
        width: screenWidth / zooming,
        height: heightOfCamera / zooming,
      });
    }
    //console.log(finalZooming);
    setZoom((finalZooming - 1) * 0.01);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentSizeHeight = event.nativeEvent.contentSize.height;
    const kefOfIncreaseHeight = currentSizeHeight / heightOfCamera;
    let zooming = (kefOfIncreaseHeight - 1) * 0.01;
    if (zooming < 0) {
      zooming = 0;
    } else if (zooming > 0.07) {
      zooming = 0.07;
    }
    if (isScrollingForZoomScrollView) {
      horizontalScrollZoomRef.current?.scrollTo({
        y: 0,
        x: (zooming / 0.01) * widthOfEveryContainer,
        animated: false,
      });
    }

    setZoom(zooming < 0 ? 0 : zooming);
  };
  // useEffect(()=>{console.log(zoom)},[zoom])

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          top: screenHeight / 2,
          alignSelf: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 10,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            transform: [{ rotate: `${orientation}deg` }],
          }}
        >
          Орієнтація: {orientation}
        </Text>
      </View>
      <View
        style={{
          width: screenWidth,
          height: (screenHeight - heightOfCamera) / 2,
        }}
      >
        <View
          style={{
            marginTop: heightOfHeader - screenHeight * 0.06,
            justifyContent: "center",
            // backgroundColor:"blue",
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={changeFlashMode}
            style={{
              marginLeft: 20,
              // transform: [{ rotate: `${orientation}deg` }],
            }}
          >
            {flashMode == FlashMode.off ? (
              <View
                style={{
                  height: screenHeight * 0.03,
                  aspectRatio: 1,
                  //backgroundColor: "red",
                  borderRadius: screenHeight * 0.04,
                  borderWidth: 2,
                  borderColor: "white",
                  overflow: "hidden",
                  justifyContent: "center",
                  transform: [{ rotate: `${orientation}deg` }],
                }}
              >
                <View
                  style={{
                    alignSelf: "center",

                    //backgroundColor: "red"
                  }}
                >
                  <FlashLightSVG />
                </View>
                <View
                  style={{
                    height: screenHeight * 0.03,
                    width: 2,
                    borderRadius: 1,
                    position: "absolute",
                    backgroundColor: "white",
                    alignSelf: "center",
                    transform: [{ rotate: "-45deg" }],
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: screenHeight * 0.03,
                  aspectRatio: 1,
                  //backgroundColor: "red",
                  borderRadius: screenHeight * 0.04,
                  // borderWidth: 2,
                  // borderColor: "white",
                  backgroundColor: "#FFDE69",
                  overflow: "hidden",
                  justifyContent: "center",
                  transform: [{ rotate: `${orientation}deg` }],
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <FlashLightSVG color="black" />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Camera
        style={{
          width: screenWidth,
          height: heightOfCamera,
        }}
        flashMode={flashMode}
        autoFocus={AutoFocus.on}
        type={type}
        ref={cameraRef}
        zoom={zoom}
      />
      {isScrollingForHorizontalScrollView ? (
        <View
          style={{
            // backgroundColor: "blue",
            position: "absolute",
            bottom:
              (screenHeight - heightOfCamera) / 2 + screenHeight * 0.05 + 10,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "#FFDE69" }}>
            {myFixedNumber(zoom / 0.01 + 1) + "x"}
          </Text>
        </View>
      ) : null}
      <View
        style={{
          //marginTop: (screenHeight - heightOfCamera) / 2,
          width: maxHeightOfCircle * 4,
          height: screenHeight * 0.05,
          position: "absolute",
          zIndex: 2,
          // backgroundColor: "blue",
          alignSelf: "center",
          bottom: (screenHeight - heightOfCamera) / 2,
          //opacity: 0.3,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={horizontalScrollZoomRef}
          onTouchEnd={(event) => {
            if (!scrolling) {
              const pageX = event.nativeEvent.pageX;
              const widthOfScrollView = maxHeightOfCircle * 4;
              const posititonOfScrollView =
                (screenWidth - widthOfScrollView) / 2;
              const touchOnScrollview = pageX - posititonOfScrollView;
              if (touchOnScrollview < widthOfScrollView / 3) {
                zoomTo(firstDigit);
              } else if (touchOnScrollview < (widthOfScrollView / 3) * 2) {
                zoomTo(secondDigit);
              } else if (touchOnScrollview < widthOfScrollView) {
                zoomTo(thirdDigit);
              }
            }
            setScrolling(false);
            setIsScrollingForHorizontalScrollView(false);
          }}
          scrollEventThrottle={16}
          onScroll={onZoomScroll}
          onScrollBeginDrag={() => {
            setScrolling(true);
            setIsScrollingForHorizontalScrollView(true);
          }}
          style={{
            width: maxHeightOfCircle * 4,
            height: screenHeight * 0.05,
            position: "absolute",
           // backgroundColor: "red",
            zIndex: 10,
            opacity: 0.3,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <View
              key={number}
              style={{
                width: widthOfEveryContainer,
                height: screenHeight * 0.05,
                //backgroundColor: "blue",
                justifyContent: "center",
                //borderWidth: 1,
                //borderColor: "green",
              }}
            ></View>
          ))}
          <View
            style={{
              width: maxHeightOfCircle * 4 - widthOfEveryContainer + 1,
              height: screenHeight * 0.05,
              // backgroundColor: "blue",
              justifyContent: "center",
              // borderWidth: 1,
              //borderColor: "green",
            }}
          />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            justifyContent: "center",
            transform: [{ rotate: `${orientation}deg` }],
          }}
          onPress={() => {
            zoomTo(firstDigit);
          }}
        >
          <ScaleOfCameraContainer digit={firstDigit} zoom={zoom} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            justifyContent: "center",
            transform: [{ rotate: `${orientation}deg` }],
          }}
          onPress={() => {
            zoomTo(secondDigit);
          }}
        >
          <ScaleOfCameraContainer digit={secondDigit} zoom={zoom} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            justifyContent: "center",
            transform: [{ rotate: `${orientation}deg` }],
          }}
          onPress={() => {
            zoomTo(thirdDigit);
          }}
        >
          <ScaleOfCameraContainer digit={thirdDigit} zoom={zoom} />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollZoomRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onTouchEnd={() => {
          setIsScrollingForZoomScrollView(false);
        }}
        onTouchStart={() => {
          setIsScrollingForZoomScrollView(true);
        }}
        onScroll={onScroll}
        minimumZoomScale={1}
        maximumZoomScale={8}
        scrollEventThrottle={16}
        style={{
          marginTop: (screenHeight - heightOfCamera) / 2,
          width: screenWidth,
          height: heightOfCamera,
          position: "absolute",
          zIndex: 1,
          // backgroundColor: "red",
          //opacity: 0.3,
        }}
      >
        <View
          style={{
            width: screenWidth,
            height: heightOfCamera,
          }}
        />
      </ScrollView>
      <View
        style={{
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          width: screenWidth,
          flex: 1,
          //backgroundColor: "blue",
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onBackButtonPress}
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            height: screenHeight * 0.06,
            aspectRatio: 1,
            borderRadius: screenHeight,
            marginLeft: 20,
            // opacity: 0.7,
            justifyContent: "center",
          }}
        >
          <View style={{ alignSelf: "center" }}>
            <CrossSVG />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: screenHeight * 0.08,
            aspectRatio: 1,
            borderRadius: screenHeight * 0.1,
          }}
          onPress={handleTakePhoto}
        >
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              alignItems: "center",
              borderColor: "black",
              borderWidth: 3,
              height: screenHeight * 0.075,
              aspectRatio: 1,
              borderRadius: screenHeight * 0.1,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={flipCamera}
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            height: screenHeight * 0.06,
            aspectRatio: 1,
            borderRadius: screenHeight,
            marginRight: 20,
            //opacity: 0.7,
            justifyContent: "center",
            transform: [{ rotate: `${orientation}deg` }],
          }}
        >
          <View
            style={{
              alignSelf: "center",
              //backgroundColor: "red"
            }}
          >
            <ReverseCameraSVG />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const textStyle = StyleSheet.create({
  text: {
    alignSelf: "center",
  },
  nonSelectText: { color: "white" },
  selectText: { color: "#FFDE69" },
});
export const viewStyle = StyleSheet.create({
  container: {
    alignSelf: "center",
    overflow: "hidden",
    justifyContent: "center",
    borderRadius: screenHeight * 0.04,
    // backgroundColor:"black",
    aspectRatio: 1,
  },
  nonSelectContainer: { width: minHeightOfCircle },
  selectContainer: { width: maxHeightOfCircle },
  backGroundView: {
    position: "absolute",
    width: maxHeightOfCircle,
    aspectRatio: 1,
    backgroundColor: "gray",
    zIndex: -1,
    opacity: 0.4,
  },
  wrapContainer: {
    justifyContent: "center",
    //backgroundColor: "white",
    height: maxHeightOfCircle,
    aspectRatio: 1,
    alignSelf: "center",
  },
});

export default CameraComponent;

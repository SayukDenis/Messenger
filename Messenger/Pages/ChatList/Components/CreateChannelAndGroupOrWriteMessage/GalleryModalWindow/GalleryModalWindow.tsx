import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../../../Constants/ConstantsForChatlist";
import * as MediaLibrary from "expo-media-library";
import { useDispatch } from "react-redux";
import { setPhotoForCreateGroupOrChannel } from "../../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { Camera, CameraType } from "expo-camera";
import CameraSVG from "../../../../SemiComponents/CameraSVG";

interface GalleryModalWindowProps {
  setOnAddPhotoPress: Dispatch<SetStateAction<boolean>>;
  navigation: any;
}

const GalleryModalWindow: React.FC<GalleryModalWindowProps> = ({
  setOnAddPhotoPress,
  navigation,
}) => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const cameraRef = useRef<Camera | null>(null);
  useEffect(() => {
    getPhotos();
  }, []);
  //console.log(cameraRef.current?._cameraRef.)
  const getPhotos = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
    });
    setPhotos(assets);
  };
  
  const margin = 6;
  const widthOfImage = screenWidth / 5 - margin * 3;
  const borderRadius = 20;
  const width = widthOfImage * 5 + margin * 10;
  const dispatch = useDispatch();
  const data = [null, ...photos.slice(0, 9)];
  for (let i = data.length; i < 10; i++) {
    data.push(null);
  }
  const onGalleryPress = useRef(() => {
    navigation.navigate("All Photo In Gallery", { setOnAddPhotoPress });
  });
  const onCameraPress = useRef(() => {
    navigation.navigate("Camera Component", { setOnAddPhotoPress });
  });
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    // console.log(index);
    const margin = 5;
    if (index == 0) {
      return (
        <TouchableOpacity
          style={{
            width: widthOfImage,
            aspectRatio: 1,
            margin,
            overflow: "hidden",
            //backgroundColor: "red",
            borderRadius: 10,
          }}
          onPress={onCameraPress.current}
        >
          <View style={{ flex: 1 }}>
            <Camera
              style={{
                width: widthOfImage,
                aspectRatio: 1,
                justifyContent: "center",
              }}
              type={CameraType.back}
              ref={cameraRef}
            >
              <View style={{ alignSelf: "center" }}>
                <CameraSVG kef={0.5} strokeColor={"white"} />
              </View>
            </Camera>
          </View>
        </TouchableOpacity>
      );
    }
    if (item == null) {
      return (
        <View
          style={{
            width: widthOfImage,
            aspectRatio: 1,
            margin,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        ></View>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          //dispatch(setPhotoForCreateGroupOrChannel(item.uri));
          //setOnAddPhotoPress(false);
          navigation.navigate("Cropp Image Page",{picture:item,setOnAddPhotoPress})
        }}
      >
        <Image
          source={{ uri: item.uri }}
          style={{
            width: widthOfImage,
            aspectRatio: 1,
            margin,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        width: screenWidth,
        bottom: 20,
      }}
      activeOpacity={1}
    >
      <View
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          overflow: "hidden",
          // backgroundColor: "white",
          width,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            ///backgroundColor:"black",
            marginTop: 5,
            marginBottom: 3,
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={5}
            style={{
              //backgroundColor: "white",
              alignSelf: "center",
            }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            height: widthOfImage * 3,
            width,
            backgroundColor: "white",
            opacity: 0.6,
            zIndex: -1,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          height: screenHeight * 0.05,
          width,
          //backgroundColor: "white",
          alignSelf: "center",
          justifyContent: "center",
          marginBottom: 1,
        }}
        onPress={onGalleryPress.current}
      >
        <Text style={{ alignSelf: "center", color: "#734CA5", fontSize: 15 }}>
          Gallery
        </Text>
        <View
          style={{
            position: "absolute",
            height: screenHeight * 0.05,
            width,
            backgroundColor: "white",
            opacity: 0.7,
            zIndex: -1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: screenHeight * 0.05,
          width,
          alignSelf: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          overflow: "hidden",
        }}
        onPress={() => {
          dispatch(setPhotoForCreateGroupOrChannel(""));
          setOnAddPhotoPress(false);
        }}
      >
        <Text style={{ alignSelf: "center", color: "#CE2500" }}>
          Delete photo
        </Text>
        <View
          style={{
            position: "absolute",
            height: screenHeight * 0.05,
            width,
            backgroundColor: "white",
            opacity: 0.7,
            zIndex: -1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignSelf: "center",
          overflow: "hidden",
          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={() => {
          setOnAddPhotoPress(false);
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            fontSize: 15,
            color: "#734CA5",
          }}
        >
          Cancel
        </Text>
        <View
          style={{
            position: "absolute",
            height: widthOfImage * 3,
            width,
            backgroundColor: "white",
            opacity: 0.6,
            zIndex: -1,
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default GalleryModalWindow;

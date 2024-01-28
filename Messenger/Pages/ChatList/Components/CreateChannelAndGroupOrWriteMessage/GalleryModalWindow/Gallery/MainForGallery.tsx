import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../../Constants/ConstantsForChatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
interface MainForGalleryProps {
    navigation:any;
    setOnAddPhotoPress:Dispatch<SetStateAction<boolean>>
}

const MainForGallery: React.FC<MainForGalleryProps> = ({navigation,setOnAddPhotoPress}) => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const dispatch=useDispatch();
  useEffect(() => {
    getPhotos();
  }, []);
  const margin = 1;
  const widthOfImage = screenWidth / 3;
  const getPhotos = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
    });
    setPhotos(assets);
  };
  const onPhotoPress=(index:number)=>{
    /*dispatch(setPhotoForCreateGroupOrChannel(photos[index].uri));
    setOnAddPhotoPress(false);
    navigation.goBack();*/
    navigation.navigate("Cropp Image Page",{picture:photos[index],setOnAddPhotoPress})
  }
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity onPress={()=>onPhotoPress(index)} style={{
        marginBottom:margin,
        marginRight:(index+1)%3!=0?margin:0
      }}
      activeOpacity={0.8}>
        <Image
          source={{ uri: item.uri }}
          style={{
            width: widthOfImage,
            aspectRatio: 1,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      numColumns={3}
      ListHeaderComponent={
        <View style={{ width: screenWidth, height: heightOfHeader }} />
      }
      ListFooterComponent={
        <View style={{ width: screenWidth, height: screenHeight * 0.03 }} />
      }
    />
  );
};

export default MainForGallery;

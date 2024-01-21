import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import BackGroundColorForComponents from "../../../../../SemiComponents/BackGroundColorForComponents";
import BackGroundGradientView from "../../../../../SemiComponents/BackGroundGradientView";
import HeaderForGallery from "./HeaderForGallery";
import MainForGallery from "./MainForGallery";

interface AllPhotoInGalleryProps {
  navigation: any;
  route: any;
}

const AllPhotoInGallery: React.FC<AllPhotoInGalleryProps> = ({
  navigation,
  route,
}) => {
  return (
    <BackGroundGradientView>
      <HeaderForGallery navigation={navigation} />
      <MainForGallery navigation={navigation} setOnAddPhotoPress={route.params.setOnAddPhotoPress}/>
    </BackGroundGradientView>
  );
};

export default AllPhotoInGallery;

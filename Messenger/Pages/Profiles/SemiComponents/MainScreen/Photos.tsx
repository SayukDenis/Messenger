// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { user } from "../DBUser.tsx";
import styles from "./Styles.tsx";

interface PhotosProps {}

const Photos: React.FC<PhotosProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={user.photosAndVideos}
        keyExtractor={(item) => user.photosAndVideos.indexOf(item).toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={{
          gap: 0.005 * Dimensions.get("screen").width,
          paddingBottom: 0.08 * Dimensions.get("screen").height,
        }}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                alert("Pressed");
              }}
              style={[
                styles.photo,
                {
                  left:
                    0.005 *
                    Dimensions.get("screen").width *
                    (user.photosAndVideos.indexOf(item) % 3),
                },
              ]}
            >
              <Image style={styles.photo} source={{ uri: item.url }} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Photos;

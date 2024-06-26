// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import Header from "../../GeneralComponents/Header";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import { Album, PhotoOrVideo } from "../../DatabaseSimulation/DBClasses";
import RightArrow from "../../Assets/Icons/RightArrow";
import { LinearGradient } from "expo-linear-gradient";

interface NewAlbumScreenProps {
  navigation: StackNavigationProp<{}>;
}

const NewAlbumScreen: React.FC<NewAlbumScreenProps> = (props) => {
  const [newAlbumName, setNewAlbumName] = useState("");
  var isValid: boolean = true;

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Header
        primaryTitle="New album"
        onGoBackPress={() => {
          GetProfile().selectedPhotosAndVideos = new Array<PhotoOrVideo>();
          props.navigation.goBack();
        }}
      />

      {/* Done button */}
      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          isValid = true;

          if (newAlbumName.length == 0) {
            isValid = false;
            alert("Enter new album name");
          } else if (GetProfile().selectedPhotosAndVideos.length == 0) {
            isValid = false;
            alert("Add at least 1 photo");
          }

          GetProfile().albums.map((album) => {
            if (album.name == newAlbumName) {
              isValid = false;
              alert("This album name already exists");
            }
          });

          if (isValid) {
            GetProfile().albums.push(
              new Album(
                newAlbumName,
                GetProfile().selectedPhotosAndVideos[0],
                GetProfile().selectedPhotosAndVideos
              )
            );

            GetProfile().albums.sort((a, b) => a.name.localeCompare(b.name));

            props.navigation.goBack();
            GetProfile().selectedPhotosAndVideos = new Array<PhotoOrVideo>();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
      </TouchableOpacity>

      <View
        style={{
          top: -0.06 * Dimensions.get("screen").width,
        }}
      >
        {/* Title for name input */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>Name</Text>
        </View>

        {/* Branch name input */}
        <View style={styles.settingOption}>
          <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            style={styles.linearGradient}
          />
          <TextInput
            style={styles.newBranchNameInput}
            onChangeText={(text: string) => {
              setNewAlbumName(text);
            }}
            value={newAlbumName}
            placeholder="Name album"
            maxLength={25}
          />
        </View>

        {/* Title for Photo selection */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>Photo</Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("GalleryScreen" as never)}
          style={styles.settingOption}
        >
          <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            style={styles.linearGradient}
          />
          <Text style={styles.settingOptionTitle}>Gallery</Text>
          <RightArrow style={styles.settingOptionRightArrow} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NewAlbumScreen;

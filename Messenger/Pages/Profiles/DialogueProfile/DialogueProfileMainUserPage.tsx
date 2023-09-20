import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  JacquesFrancoisText,
  styles,
} from "./DialogueProfileMainUserPageStyles";
import {
  Entypo,
  Fontisto,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

const mainAvatarPath: string = "./DialogueProfileAssets/mainAvatar.jpg";
var profileName: string = "ДенисDenis";
var lastTimeOnlineString: string = "Був online давно";

if (profileName.length > 10) {
  profileName = profileName.slice(0, 10) + "...";
}

const DialogueProfileMainUserPage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topToolBar}>
        <JacquesFrancoisText text={profileName} style={styles.profileTitle} />
        <JacquesFrancoisText
          text={lastTimeOnlineString}
          style={styles.onlineStatusTitle}
        />
        <TouchableOpacity
          style={styles.goBackFromProfileButton}
          onPress={() => {
            alert("Going back...");
          }}
        >
          <Entypo name="chevron-thin-left" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchMessagesButton}
          onPress={() => {
            alert("Searching...");
          }}
        >
          <Fontisto name="search" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.elseFeaturesButton}
          onPress={() => {
            alert("Else features...");
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          alert("avatar press");
        }}
      >
        <Image
          style={styles.mainAvatarImage}
          source={require(mainAvatarPath)}
        />
      </TouchableOpacity>
      <View style={styles.horizontalContainerForCalling}>
        <TouchableOpacity
          onPress={() => {
            alert("Calling (no camera)...");
          }}
        >
          <FontAwesome5 name="phone-alt" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Calling (with camera)...");
          }}
        >
          <FontAwesome name="video-camera" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.multimediaBar}>
        <TouchableOpacity
          onPress={() => {
            alert("Photos");
          }}
        >
          <JacquesFrancoisText text="Photos" style={styles.multimediaTitle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Files");
          }}
        >
          <JacquesFrancoisText text="Files" style={styles.multimediaTitle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Voice");
          }}
        >
          <JacquesFrancoisText text="Voice" style={styles.multimediaTitle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Links");
          }}
        >
          <JacquesFrancoisText text="Links" style={styles.multimediaTitle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DialogueProfileMainUserPage;

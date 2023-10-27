// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { user } from "../DBUser.tsx";
import styles from "./Styles.tsx";
import MicrophoneIcon from "./Icons/MicrophoneIcon.tsx";

interface VoiceProps {}

const Voice: React.FC<VoiceProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={user.voice}
        keyExtractor={(item) => user.voice.indexOf(item).toString()}
        horizontal={false}
        numColumns={1}
        contentContainerStyle={{
          paddingBottom: 0.09 * Dimensions.get("screen").height,
        }}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.fileContainer}
              onPress={() => {
                alert(item.author + "'s voice message is pressed...");
              }}
            >
              <View style={styles.fileFormatContainer}>
                <MicrophoneIcon style={styles.microphoneIcon} />
              </View>
              <View style={[styles.fileNameContainer, { width: "50%" }]}>
                <Text numberOfLines={1} style={styles.fileNameText}>
                  {item.author}
                </Text>
              </View>
              <View style={styles.voiceTimeAndDateContainer}>
                <Text numberOfLines={1} style={styles.fileNameText}>
                  {item.time + " " + item.date}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Voice;

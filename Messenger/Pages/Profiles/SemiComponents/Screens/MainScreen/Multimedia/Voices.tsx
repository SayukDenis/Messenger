// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";
import styles from "../Styles";
import MicrophoneIcon from "../Icons/MicrophoneIcon";
import { Voice } from "../../../DatabaseSimulation/DBClasses";
import CheckMarkIcon from "../Icons/CheckMarkIcon";

interface VoicesProps {
  onPress: (value: Voice) => void;
  onLongPress: (value: Voice) => void;
  isSelectionVisible: boolean;
  isCheckMarkVisible: (value: Voice) => boolean;
}

const Voices: React.FC<VoicesProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={GetProfile().voice}
        keyExtractor={(item) => GetProfile().voice.indexOf(item).toString()}
        horizontal={false}
        numColumns={1}
        contentContainerStyle={{
          paddingBottom: 0.5 * Dimensions.get("screen").height,
        }}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.fileContainer}
              onPress={() => {
                props.onPress(item);
              }}
              onLongPress={() => {
                props.onLongPress(item);
              }}
            >
              <View style={styles.fileFormatContainer}>
                <MicrophoneIcon style={styles.microphoneIcon} />
              </View>
              <View style={[styles.fileNameContainer, { width: "40%" }]}>
                <Text numberOfLines={1} style={styles.fileVoiceOrLinkTitle}>
                  {item.author}
                </Text>
                <Text numberOfLines={1} style={styles.fileVoiceOrLinkTitle}>
                  {", " + item.time + ", " + item.date}
                </Text>
              </View>
              {props.isSelectionVisible && (
                <View style={styles.checkMarkContainerForPhoto}>
                  {props.isCheckMarkVisible(item) && (
                    <CheckMarkIcon style={styles.checkMarkIcon} />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Voices;

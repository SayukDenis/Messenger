// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import styles from "../Styles";
import DownArrowIcon from "../Icons/DownArrowIcon";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";
import { File } from "../../../DatabaseSimulation/DBClasses";
import CheckMarkIcon from "../Icons/CheckMarkIcon";

interface FilesProps {
  onPress: (value: File) => void;
  onLongPress: (value: File) => void;
  onDownloadPress: () => void;
  isSelectionVisible: boolean;
  isCheckMarkVisible: (value: File) => boolean;
}

const Files: React.FC<FilesProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={GetProfile().files}
        keyExtractor={(item) => GetProfile().files.indexOf(item).toString()}
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
                <Text numberOfLines={1} style={styles.fileFormatText}>
                  {item.format}
                </Text>
              </View>
              <View style={styles.fileNameContainer}>
                <Text numberOfLines={1} style={styles.fileVoiceOrLinkTitle}>
                  {item.name}
                </Text>
              </View>
              {props.isSelectionVisible ? (
                <View style={styles.checkMarkContainerForFile}>
                  {props.isCheckMarkVisible(item) && (
                    <CheckMarkIcon style={styles.checkMarkIcon} />
                  )}
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    props.onDownloadPress();
                  }}
                  style={styles.downloadFileIconContainer}
                >
                  <DownArrowIcon style={styles.downloadFileIcon} />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Files;

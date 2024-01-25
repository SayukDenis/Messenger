// Oleksii Kovalenko telegram - @traewe

import React from "react";
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";
import styles from "../Styles";
import { Link } from "../../../DatabaseSimulation/DBClasses";
import CheckMarkIcon from "../Icons/CheckMarkIcon";

interface LinksProps {
  onPress: (value: Link) => void;
  onLongPress: (value: Link) => void;
  isSelectionVisible: boolean;
  isCheckMarkVisible: (value: Link) => boolean;
}

const Links: React.FC<LinksProps> = (props) => {
  return (
    <View style={styles.mediaContainer}>
      <FlatList
        data={GetProfile().links}
        keyExtractor={(item) => GetProfile().links.indexOf(item).toString()}
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
                  png
                </Text>
              </View>
              <View
                style={[
                  styles.fileNameContainer,
                  { width: "95%", bottom: "50%" },
                ]}
              >
                <Text
                  numberOfLines={1}
                  style={[styles.fileVoiceOrLinkTitle, { width: "80%" }]}
                >
                  {item.name}
                </Text>
              </View>
              <View
                style={[styles.fileNameContainer, { width: "80%", top: "50%" }]}
              >
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(item.url);
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.fileVoiceOrLinkTitle,
                      { color: "rgb(43, 118, 134)" },
                    ]}
                  >
                    {item.url}
                  </Text>
                </TouchableOpacity>
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

export default Links;

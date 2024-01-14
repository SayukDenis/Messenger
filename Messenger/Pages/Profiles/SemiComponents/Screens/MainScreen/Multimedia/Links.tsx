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

interface LinksProps {}

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
                alert(item.url + "'s voice message is pressed...");
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
                <Text numberOfLines={1} style={styles.fileNameText}>
                  {item.name}
                </Text>
              </View>
              <View
                style={[styles.fileNameContainer, { width: "95%", top: "50%" }]}
              >
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(item.url);
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.fileNameText,
                      { color: "rgb(43, 118, 134)" },
                    ]}
                  >
                    {item.url}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Links;

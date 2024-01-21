// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./Styles";
import { useIsFocused } from "@react-navigation/native";
import { channel } from "../../DatabaseSimulation/DBChannel";
import { contacts } from "../../DatabaseSimulation/DBVariables";
import { Contact } from "../../DatabaseSimulation/DBClasses";
import { ScrollView } from "react-native-gesture-handler";
import CheckmarkIcon from "../../../DialogueProfile/PermissionScreen/Icons/CheckMarkIcon";
import { LinearGradient } from "expo-linear-gradient";
import DownArrowIcon from "./Icons/DownArrowIcon";

interface ForwardToChatsScreenProps {
  navigation: StackNavigationProp<{}>;
}

const ForwardToChatsScreen: React.FC<ForwardToChatsScreenProps> = (props) => {
  const [searchedName, setSearchedName] = useState("");
  const [selectedChats, setSelectedChats] = useState(new Array<Contact>());

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <View style={styles.topToolBar}>
        <LinearGradient
          colors={["#cf9b95", "#c98bb8", "#c37adb"]}
          style={styles.linearGradient}
        />
        {/* Going back button */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.goBackButton}
        >
          <DownArrowIcon />
        </TouchableOpacity>

        {/* Search in chat view */}
        <View style={styles.searchInChatContainer}>
          <TextInput
            style={styles.contactNameInput}
            onChangeText={(text: string) => {
              setSearchedName(text);
            }}
            value={searchedName}
            placeholder="Search"
            maxLength={25}
            placeholderTextColor="rgb(136, 130, 130)"
          />
        </View>
      </View>

      {/* Done button */}
      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
      </TouchableOpacity>

      <ScrollView>
        {/* Contacts list */}
        <View
          style={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
          }}
        >
          {contacts.map((item, index) => {
            return (
              (!searchedName || item.name.startsWith(searchedName)) && (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      if (!selectedChats.includes(item)) {
                        setSelectedChats(selectedChats.concat([item]));
                      } else {
                        setSelectedChats(
                          selectedChats.filter((chat) => chat !== item)
                        );
                      }
                    }}
                    style={styles.contactContainer}
                  >
                    <Image
                      source={{ uri: item.avatar }}
                      style={styles.contactAvatarInList}
                    />
                    <View style={styles.contactTitleContainer}>
                      <Text numberOfLines={1} style={styles.contactTitleInList}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.contactCheckMarkContainer}>
                      {selectedChats.includes(item) && (
                        <CheckmarkIcon
                          style={styles.checkmarkIcon}
                          stroke="rgb(115, 76, 165)"
                        />
                      )}
                    </View>
                  </TouchableOpacity>

                  <View style={styles.separatingLine} />
                </View>
              )
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ForwardToChatsScreen;

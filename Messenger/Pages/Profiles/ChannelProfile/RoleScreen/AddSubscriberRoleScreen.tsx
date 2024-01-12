// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { styles } from "./Styles";
import {
  addFunction,
  channel,
  selectedRole,
} from "../../SemiComponents/DBUser";
import GoBackButton from "../../SemiComponents/GeneralComponents/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckmarkIcon from "../../DialogueProfile/PermissionScreen/Icons/CheckMarkIcon";
import { LinearGradient } from "expo-linear-gradient";

interface AddSubscriberRoleScreenProps {
  navigation: StackNavigationProp<{}>;
}

const AddSubscriberRoleScreen: React.FC<AddSubscriberRoleScreenProps> = (
  props
) => {
  const [searchedName, setSearchedName] = useState("");
  const [subscribers, setSubscribers] = useState(
    selectedRole.selectedRole.subscribers
  );

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <View style={styles.topToolBar}>
        {/* Going back button */}
        <GoBackButton onPress={() => props.navigation.goBack()} />

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
          selectedRole.selectedRole.subscribers = subscribers;

          props.navigation.goBack();
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
      </TouchableOpacity>

      <View style={styles.separatingLine} />

      <ScrollView>
        <View style={styles.contactsTitleContainer}>
          <Text style={styles.contactsTitle}>Contacts</Text>
        </View>
        {/* Contacts list */}
        <View
          style={{
            top: 0.035 * Dimensions.get("screen").height,
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
        >
          {channel.subscribers.map((item, index) => {
            return (
              (!searchedName || item.name.startsWith(searchedName)) && (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (!subscribers.includes(item)) {
                      setSubscribers(subscribers.concat([item]));

                      addFunction(() => {
                        selectedRole.selectedRole.subscribers =
                          selectedRole.selectedRole.subscribers.filter(
                            (subscriber) => {
                              subscriber != item;
                            }
                          );
                      });
                    }
                  }}
                  style={[
                    styles.contactContainer,
                    { borderTopWidth: index === 0 ? 0 : 0.2 },
                  ]}
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
                    {subscribers.includes(item) && (
                      <CheckmarkIcon
                        style={styles.checkmarkIcon}
                        stroke="black"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              )
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AddSubscriberRoleScreen;

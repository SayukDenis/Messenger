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
import GoBackButton from "../../GeneralComponents/GoBackButton";
import { channel } from "../../DatabaseSimulation/DBChannel";
import { contacts } from "../../DatabaseSimulation/DBVariables";
import { ScrollView } from "react-native-gesture-handler";
import CheckmarkIcon from "../../../DialogueProfile/PermissionScreen/Icons/CheckMarkIcon";
import { LinearGradient } from "expo-linear-gradient";

interface AddSubscriberScreenProps {
  navigation: StackNavigationProp<{}>;
}

const AddSubscriberScreen: React.FC<AddSubscriberScreenProps> = ({
  navigation,
}) => {
  const [searchedName, setSearchedName] = useState("");
  const [subscribers, setSubscribers] = useState(channel.subscribers);

  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <View style={styles.topToolBar}>
        {/* Going back button */}
        <GoBackButton onPress={() => navigation.goBack()} />

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
          channel.subscribers = subscribers;
          navigation.goBack();
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
      </TouchableOpacity>

      <ScrollView>
        {/* Contacts list */}
        <View
          style={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
        >
          {contacts.map((item, index) => {
            return (
              (!searchedName || item.name.startsWith(searchedName)) && (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (!channel.subscribers.includes(item)) {
                      setSubscribers(subscribers.concat([item]));
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

export default AddSubscriberScreen;

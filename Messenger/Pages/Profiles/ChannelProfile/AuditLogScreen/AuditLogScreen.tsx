// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { channel } from "../../SemiComponents/DBUser";
import DeletedUserIcon from "./Icons/DeletedUserIcon";
import AddedUserIcon from "./Icons/AddedUserIcon";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";

interface AuditLogScreenProps {
  navigation: StackNavigationProp<{}>;
}

const AuditLogScreen: React.FC<AuditLogScreenProps> = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Audit log"
        onGoBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView>
        {channel.events.map((item, index) => {
          return (
            <View key={index} style={styles.eventContainer}>
              {/* Icons */}
              <View style={styles.eventIconContainer}>
                {item.text.includes("Deleted user") && (
                  <DeletedUserIcon style={styles.eventIcon} />
                )}
                {item.text.includes("Added user") && (
                  <AddedUserIcon style={styles.eventIcon} />
                )}
                {item.text.includes("message") && (
                  <BinIcon style={styles.eventIcon} color="#BF0404" />
                )}
              </View>

              {/* Authors and events */}
              <View style={styles.eventInfoMainContainer}>
                <Image
                  source={{ uri: item.author.avatar }}
                  style={styles.eventAuthorAvatar}
                />
                <View style={styles.eventInfoContainer}>
                  <Text style={styles.eventAuthorTitle} numberOfLines={1}>
                    {item.author.name}
                  </Text>
                  <Text style={styles.eventText}>{item.text}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AuditLogScreen;

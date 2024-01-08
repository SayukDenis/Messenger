// Oleksii Kovalenko telegram - @traewe

import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import PlusIcon from "../../SemiComponents/BranchesScreen/Icons/PlusIcon";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import { channel } from "../../SemiComponents/DBUser";
import { useIsFocused } from "@react-navigation/native";

interface RolesScreenProps {
  navigation: StackNavigationProp<{}>;
}

const RolesScreen: React.FC<RolesScreenProps> = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Roles"
        onGoBackPress={() => {
          props.navigation.goBack();
        }}
      />

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("NewRoleScreen" as never);
          }}
          style={styles.settingOption}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.plusRoleTitle}>Role</Text>
        </TouchableOpacity>

        <View
          style={{
            paddingBottom: 0.07 * Dimensions.get("screen").height,
            zIndex: 0,
          }}
        >
          {channel.roles.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  //tempCharacter().selectedBranchParent = item;
                  //navigation.navigate("ChangeBranchParentScreen" as never);
                }}
                style={styles.settingOption}
              >
                <View
                  style={[
                    styles.roleAvatarInList,
                    {
                      backgroundColor: item.color,
                    },
                  ]}
                >
                  <Text style={{ fontSize: 20 }}>{item.emoji}</Text>
                </View>
                <View style={styles.roleTitleContainer}>
                  <Text numberOfLines={1} style={styles.roleTitleInList}>
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    //setIsDeleteBranchPressed(true);
                    //setBranchNameToRemove(item.name);
                  }}
                  style={styles.binIconContainer}
                >
                  <BinIcon style={styles.binIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RolesScreen;

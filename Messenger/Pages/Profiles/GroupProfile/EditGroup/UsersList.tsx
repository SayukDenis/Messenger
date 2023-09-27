import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { UserProps } from "./UserProfile";
import { styles } from "./ProfileGroupStyles";

interface UsersListProps {
  users: UserProps[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <View style={{ bottom: "50%", height: 370 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.Nickname}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.PersonIcon} source={{ uri: item.ImagePath }} />
          </View>
        )}
      />
    </View>
  );
};

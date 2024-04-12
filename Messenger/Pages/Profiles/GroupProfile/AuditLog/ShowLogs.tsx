//Viktor Hraboviuk

import React from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuditLogHead } from "./AuditLogHead";
import { AuditLog } from "../../SemiComponents/DatabaseSimulation/DBUser";

interface ShowLogsProps {}

export const ShowLogs: React.FC<ShowLogsProps> = (props) => {
  return (
    <View>
      {AuditLog.MembersName.map((item, index) => (
        <>
          <Image
            style={styles.PersonIcon}
            source={{ uri: AuditLog.Photo[index].url }}
          />
          <Text style={styles.PersonNick}>{item.name}</Text>
        </>
      ))}
    </View>
  );
};

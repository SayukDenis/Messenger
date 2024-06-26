import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";
import { styles } from "./ProfileGroupStyles";
import { user } from "../../SemiComponents/DatabaseSimulation/DBUser";

interface GroupHeadProps {
  GroupHeadName: string;
  BioText: string;
}

export const GroupHead: React.FC<GroupHeadProps> = ({
  GroupHeadName,
  BioText,
}) => {
  const navigation = useNavigation();

  const ChangeNameAndBio = () => {
    user.profileName = GroupHeadName;
    user.GroupBio = BioText;
  };
  const handleEditGroupPress = () => {
    navigation.navigate("SettingsMenu" as never);
  };

  return (
    <View style={styles.topToolBar}>
      <TouchableOpacity
        style={{ top: "40%", right: "43%" }}
        onPress={handleEditGroupPress}
      >
        <Svg width={12} height={23} viewBox="0 0 12 23" fill="none">
          <Rect
            width={1.61477}
            height={14.7084}
            rx={0.807384}
            transform="matrix(0.556114 -0.831106 0.674407 0.73836 0.101562 11.2344)"
            fill="#434343"
          />
          <Path
            d="M1.62799 11.5393C1.32107 11.8628 0.876982 11.8208 0.636087 11.4456C0.395192 11.0703 0.448714 10.5039 0.755632 10.1805L9.76803 0.681975C10.0749 0.358504 10.519 0.400467 10.7599 0.775702C11.0008 1.15094 10.9473 1.71735 10.6404 2.04082L1.62799 11.5393Z"
            fill="#434343"
          />
        </Svg>
      </TouchableOpacity>
      <Text style={{ top: "15%" }}>{GroupHeadName}</Text>
      <TouchableOpacity
        style={{ left: "38%", top: "-6%" }}
        onPress={() => ChangeNameAndBio()}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

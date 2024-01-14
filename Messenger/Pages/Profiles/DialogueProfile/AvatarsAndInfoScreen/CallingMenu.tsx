// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DatabaseSimulation/DBUser";
import * as Clipboard from "expo-clipboard";

interface CallingMenuProps {
  isVisible: boolean;
  onCopyPress: () => void;
  onCancelPress: () => void;
}

const CallingMenu: React.FC<CallingMenuProps> = (props) => {
  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  const callingMenuOptionsNames: string[] = [
    "Copy number",
    "Call in Telentik",
    "Call",
  ];
  const callingMenuOptionsOnPress: (() => void)[] = [
    () => {
      copyToClipboard(user.phoneNumber);
      props.onCopyPress();
    },
    () => {
      alert("Call in Telentik");
    },
    () => {
      alert("Call");
    },
  ];
  return (
    <>
      {props.isVisible && (
        <>
          <View style={styles.callingMenuMainContainer}>
            <View style={styles.phoneNumberContainer}>
              <Text style={{ fontSize: 14 }}>
                <Text style={styles.phoneNumberTitle}>Number: </Text>
                🇺🇦 {user.phoneNumber}
              </Text>
            </View>

            {callingMenuOptionsNames.map((option, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.callingMenuOptionContainer}
                  onPress={() => {
                    callingMenuOptionsOnPress[index]();
                  }}
                >
                  <Text style={styles.callingMenuOptionTitle}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Cancel button */}
          <TouchableOpacity
            style={styles.callingMenuCancelButton}
            onPress={() => {
              props.onCancelPress();
            }}
          >
            <Text style={styles.callingMenuOptionTitle}>Cancel</Text>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default CallingMenu;

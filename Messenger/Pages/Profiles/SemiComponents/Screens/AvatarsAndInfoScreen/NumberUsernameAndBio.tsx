// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";
import * as Clipboard from "expo-clipboard";
import { FindingBioHeight } from "./FindingBioHeight";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;

interface NumberUsernameAndBioProps {
  onUsernamePress: (text: string) => void;
  onNumberPress: () => void;
}

const NumberUsernameAndBio: React.FC<NumberUsernameAndBioProps> = (props) => {
  const [bioTextHeight, setBioTextHeight] = useState(0);
  const [isFullBioVisible, setIsFullBioVisible] = useState(false);

  const [userCharacteristicsCount, setUserCharacteristicsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    if (GetProfile().phoneNumber) count++;
    if (GetProfile().username) count++;
    if (GetProfile().bio) count++;

    setUserCharacteristicsCount(count);
  }, [GetProfile().phoneNumber, GetProfile().username, GetProfile().bio]);

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  return (
    <>
      {(GetProfile().username ||
        GetProfile().phoneNumber ||
        GetProfile().bio) && (
        <>
          <FindingBioHeight
            setBioTextHeight={(value: number) => {
              setBioTextHeight(value);
            }}
          />

          <View
            style={[
              styles.userInfoMainContainer,
              {
                height: isFullBioVisible
                  ? (userCharacteristicsCount - 1) * 0.053 * screenHeight +
                    bioTextHeight
                  : userCharacteristicsCount * 0.053 * screenHeight,
              },
            ]}
          >
            {GetProfile().phoneNumber && (
              <>
                <View style={styles.separatingHorizontalLine} />

                {/* Number */}
                <TouchableOpacity
                  style={styles.infoView}
                  onPress={() => {
                    props.onNumberPress();
                  }}
                >
                  <Text style={styles.infoTitle}>Num:</Text>
                  <View style={styles.separatingVerticalLine} />
                  <Text
                    style={[
                      styles.infoTitle,
                      { color: "rgba(255, 255, 255, 0.54)" },
                    ]}
                  >
                    {GetProfile().phoneNumber}
                  </Text>
                </TouchableOpacity>

                <View style={styles.separatingHorizontalLine} />
              </>
            )}

            {GetProfile().username && (
              <>
                {!GetProfile().phoneNumber && (
                  <View style={styles.separatingHorizontalLine} />
                )}

                {/* Username */}
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(GetProfile().username);
                    props.onUsernamePress("Username");
                  }}
                  style={styles.infoView}
                >
                  <Text style={styles.infoTitle}>Username:</Text>
                  <View style={styles.separatingVerticalLine} />
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.infoTitle,
                      { color: "rgba(255, 255, 255, 0.54)", width: "85%" },
                    ]}
                  >
                    {GetProfile().username}
                  </Text>
                </TouchableOpacity>

                <View style={styles.separatingHorizontalLine} />
              </>
            )}

            {GetProfile().bio && (
              <>
                {!GetProfile().phoneNumber && !GetProfile().username && (
                  <View style={styles.separatingHorizontalLine} />
                )}

                {/* Bio */}
                <TouchableOpacity
                  onPress={() => {
                    setIsFullBioVisible(!isFullBioVisible);
                  }}
                  style={[
                    styles.infoView,
                    {
                      height: isFullBioVisible
                        ? bioTextHeight
                        : 0.053 * screenHeight,
                    },
                  ]}
                >
                  <Text style={styles.infoTitle}>Bio:</Text>
                  <View style={styles.separatingVerticalLine} />
                  <Text
                    numberOfLines={isFullBioVisible ? 100 : 1}
                    style={[
                      styles.infoTitle,
                      { color: "rgba(255, 255, 255, 0.54)" },
                    ]}
                  >
                    {GetProfile().bio}
                  </Text>
                </TouchableOpacity>

                <View style={styles.separatingHorizontalLine} />
              </>
            )}
          </View>
        </>
      )}
    </>
  );
};

export default NumberUsernameAndBio;

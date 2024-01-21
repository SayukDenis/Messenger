// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DatabaseSimulation/DBUser";
import * as Clipboard from "expo-clipboard";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;

interface NumberUsernameAndBioProps {
  onUsernamePress: (text: string) => void;
  onNumberPress: () => void;
}

const NumberUsernameAndBio: React.FC<NumberUsernameAndBioProps> = (props) => {
  const [bioTextHeight, setBioTextHeight] = useState(0);
  const [userInfoMainContainerHeight, setUserInfoMainContainerHeight] =
    useState(0);
  const [isFullBioVisible, setIsFullBioVisible] = useState(false);

  useEffect(() => {
    let height = 0;

    if (user.phoneNumber) {
      height += 0.053 * screenHeight;
    }
    if (user.username) {
      height += 0.053 * screenHeight;
    }
    if (user.bio) {
      height += Math.max(bioTextHeight, 0.053 * screenHeight);
    }

    setUserInfoMainContainerHeight(height);
  }, [bioTextHeight, user.phoneNumber, user.username, user.bio]);

  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
  };

  return (
    <>
      {(user.username || user.phoneNumber || user.bio) && (
        <>
          {/* Finding user's bio height */}
          <View
            style={[
              styles.infoView,
              { height: "100%", position: "absolute", opacity: 0 },
            ]}
          >
            <Text
              style={[styles.infoTitle, { color: "rgba(255, 255, 255, 0.54)" }]}
              onLayout={(event) => {
                setBioTextHeight(
                  Math.max(
                    event.nativeEvent.layout.height * 1.75,
                    0.05 * screenHeight
                  )
                );
              }}
            >
              <Text style={styles.infoTitle}>Bio: </Text>
              {user.bio}
            </Text>
          </View>

          <View
            style={[
              styles.userInfoMainContainer,
              {
                height: isFullBioVisible
                  ? userInfoMainContainerHeight
                  : 0.159 * screenHeight,
              },
            ]}
          >
            {user.phoneNumber && (
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
                    {user.phoneNumber}
                  </Text>
                </TouchableOpacity>

                <View style={styles.separatingHorizontalLine} />
              </>
            )}

            {user.username && (
              <>
                {!user.phoneNumber && (
                  <View style={styles.separatingHorizontalLine} />
                )}

                {/* Username */}
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(user.username);
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
                    {user.username}
                  </Text>
                </TouchableOpacity>

                <View style={styles.separatingHorizontalLine} />
              </>
            )}

            {user.bio && (
              <>
                {!user.phoneNumber && !user.username && (
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
                    {user.bio}
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

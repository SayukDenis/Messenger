// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DBUser";
import * as Clipboard from "expo-clipboard";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

interface NumberUsernameAndBioProps {
  onUsernameAndBioPress: (text: string) => void;
  onNumberPress: () => void;
}

const NumberUsernameAndBio: React.FC<NumberUsernameAndBioProps> = (props) => {
  const [bioTextHeight, setBioTextHeight] = useState(0);

  var userInfoMainContainerHeight: number = 0;

  if (user.phoneNumber) {
    userInfoMainContainerHeight += 0.05 * screenHeight;
  }
  if (user.username) {
    userInfoMainContainerHeight += 0.05 * screenHeight;
  }
  if (user.bio) {
    userInfoMainContainerHeight += bioTextHeight;
  }

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
              style={[styles.infoTitle, { color: "black" }]}
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
              { height: userInfoMainContainerHeight },
            ]}
          >
            {user.phoneNumber && (
              <>
                {/* Number */}
                <TouchableOpacity
                  style={styles.infoView}
                  onPress={() => {
                    props.onNumberPress();
                  }}
                >
                  <Text style={styles.infoTitle}>Number: </Text>
                  <Text
                    style={[
                      styles.infoTitle,
                      { color: "black", fontFamily: null },
                    ]}
                  >
                    {user.phoneNumber}
                  </Text>
                </TouchableOpacity>

                {user.username && <View style={styles.separatingLine} />}
              </>
            )}

            {user.username && (
              <>
                {/* Username */}
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(user.username);
                    props.onUsernameAndBioPress("Username");
                  }}
                  style={styles.infoView}
                >
                  <Text style={styles.infoTitle}>Username: </Text>
                  <Text style={[styles.infoTitle, { color: "black" }]}>
                    {user.username}
                  </Text>
                </TouchableOpacity>

                {user.bio && <View style={styles.separatingLine} />}
              </>
            )}

            {user.bio && (
              <>
                {/* Bio */}
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(user.bio);
                    props.onUsernameAndBioPress("Bio");
                  }}
                  style={[styles.bioInfoView, { height: bioTextHeight }]}
                >
                  <Text style={[styles.infoTitle, { color: "black" }]}>
                    <Text style={styles.infoTitle}>Bio: </Text>
                    {user.bio}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </>
      )}
    </>
  );
};

export default NumberUsernameAndBio;
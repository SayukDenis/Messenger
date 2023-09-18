import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import { styles } from "./DialogueProfileMainUserPageStyles";

const mainAvatarPath = "./mainAvatar.jpg";

const DialogueProfileMainUserPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.topToolBar}></View>
        <Image
          style={styles.mainAvatarImage}
          source={require(mainAvatarPath)}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default DialogueProfileMainUserPage;

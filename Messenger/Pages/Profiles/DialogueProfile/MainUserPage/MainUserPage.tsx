import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./Styles";
import TopToolBar from "./TopToolBar";
import AvatarWithCallingButtons from "./AvatarWithCallingButtons";
import MultimediaBar from "./MultimediaBar";
import Blur from "./Blur";

const avatarURL: string = "https://picsum.photos/id/1084/536/354";
var profileName: string = "Олексій Коваленко";
var lastTimeOnline: string = "Був online давно";

const MainUserPage = () => {
  const [isElseFeaturesVisible, setIsElseFeaturesVisible] = useState(false);
  const [isPhotoAlbumSelectionVisible, setIsPhotoAlbumSelectionVisible] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isPhotoAlbumSelectionVisible}
        onPress={() => {
          setIsPhotoAlbumSelectionVisible(false);
        }}
        style={styles.blurEffectPhotosAlbumButton}
      />

      <Blur
        visibleWhen={isElseFeaturesVisible === true}
        onPress={() => {
          setIsElseFeaturesVisible(false);
        }}
        style={styles.blurEffectElseFeaturesButton}
      />

      <TopToolBar
        primaryTitle={profileName}
        secondaryTitle={lastTimeOnline}
        elseFeaturesVisible={isElseFeaturesVisible === true}
        elseFeaturesPressing={(value) => setIsElseFeaturesVisible(value)}
        settingsTitle="Settings"
        offNotificationtitle="Off notification"
        onNotificationtitle="On notification"
        clearChatTItle="Clear chat"
        forwardContactTitle="Forward contact"
        blockTitle="Block"
        unblockTitle="Unblock"
      />

      <AvatarWithCallingButtons AvatarURL={avatarURL} />

      <MultimediaBar
        isphotoOrAlbumButtonHolding={isPhotoAlbumSelectionVisible}
        photoOrAlbumButtonHolding={(value) =>
          setIsPhotoAlbumSelectionVisible(value)
        }
        photosButtonTitle="Photos"
        albumsButtonTitle="Albums"
        filesButtonTitle="Files"
        voiceButtonTitle="Voice"
        linksButtonTitle="Links"
        videosButtonTitle="Videos"
        photosQuantity={600}
        videosQuantity={20}
        albumsQuantity={50}
        filesQuantity={3}
        voiceQuantity={3214}
        linksQuantity={5}
      />
    </View>
  );
};

export default MainUserPage;

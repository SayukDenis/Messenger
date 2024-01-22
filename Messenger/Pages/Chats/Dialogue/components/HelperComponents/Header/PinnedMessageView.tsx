import { View, Text } from 'react-native';
import React from 'react';
import { screenHeight, screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import { LinearGradient } from 'expo-linear-gradient';
import { CHARS_PER_LINE } from '../../../DialogueConstants';
import DialogueMessagesPinnedMessageIcon from '../../../SVG/DialogueMessagesPinnedMessageIcon';
import { MessageProps } from '../../../GeneralInterfaces/IMessage';

const PinnedMessageView = ({ pinnedMessage }: { pinnedMessage: MessageProps }) => {
  return (
    <View style={{ position: 'absolute', bottom: -screenHeight*0.185, backgroundColor: '#fff', overflow: 'hidden', borderRadius: 9999, alignSelf: 'center', alignItems: 'center' }}>
        <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            locations={[0.25, 0.5, 0.75]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              opacity: 0.7,
              top: 0,
              position: "absolute",
              left: 0,
              right: 0,
              height: screenHeight,
              width: screenWidth,
            }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth*0.9, paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center' }}>
            <Text>Pinned message: {pinnedMessage?.content?.length>CHARS_PER_LINE?pinnedMessage?.content.slice(0,40):pinnedMessage?.content}</Text>
            <View style={{ flexDirection: 'row' }}>
              { true&&
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 12 }}>
                  <Text>2</Text>
                  <View style={{ width: 1.4, height: '100%', backgroundColor: 'black', marginHorizontal: 5 }} />
                  <Text>2</Text>
                </View>
              }
              <DialogueMessagesPinnedMessageIcon />
            </View>
          </View>
      </View>
  )
}

export default PinnedMessageView;
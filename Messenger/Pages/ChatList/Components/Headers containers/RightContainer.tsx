import React, { useEffect } from 'react';
import { View,Animated, Dimensions } from 'react-native';
import ContactsSvg from '../SVG/ContactsSvg';
import AddChatSvg from '../SVG/AddChatSvg';
import AddFolderSvg from '../SVG/AddFolderSvg';
import WriteMessageSvg from '../SVG/WriteMessageSvg';
import UserIconSvg from '../SVG/UserIconSvg';
import RightContainersForSwipe from '../List of folders containers/RightContainersForSwipe';
import { connect } from 'react-redux';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RightContainer = () => {
   const kefForSizeOfSvg: number = 0.073;
   useEffect(()=>{
    console.log("Rerender Right Container")
   })
  return (
    <Animated.View
      style={[
        {
          width: screenWidth * 0.765,
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{ alignSelf: "center", marginLeft: screenWidth * 0.025 }}
        >
          <ContactsSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </View>
        <View
          style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
        >
          <AddFolderSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </View>
        <View
          style={{ alignSelf: "center", marginLeft: screenWidth * 0.05 }}
        >
          <WriteMessageSvg
            width={screenWidth * kefForSizeOfSvg}
            height={screenHeight * kefForSizeOfSvg}
          />
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <UserIconSvg
          width={screenWidth * kefForSizeOfSvg}
          height={screenHeight * kefForSizeOfSvg}
        />
      </View>
    </Animated.View>
  );
};

export default connect(null)( RightContainer);

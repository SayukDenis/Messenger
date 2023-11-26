import React, { useEffect, useRef } from 'react';
import { View,Animated, Dimensions } from 'react-native';
import ContactsSvg from '../SVG/ContactsSvg';
import AddChatSvg from '../SVG/AddChatSvg';
import AddFolderSvg from '../SVG/AddFolderSvg';
import WriteMessageSvg from '../SVG/WriteMessageSvg';
import UserIconSvg from '../SVG/UserIconSvg';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationForSettings from '../../../Settings/NavigationForSettings';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RightContainer = ({navigation}) => {
   const kefForSizeOfSvg: number = 0.073;
   useEffect(()=>{
    console.log("Rerender Right Container")
   })
   const PressOnUserIcon=useRef(()=>{
    console.log(10)
    navigation.navigate("NavigationForSettings");
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
          style={{ alignSelf: "center", marginLeft: screenWidth * 0 }}
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
      <TouchableOpacity
      onPress={PressOnUserIcon.current}
        style={{
          alignSelf: "center",
        }}
      >
        <UserIconSvg
          width={screenWidth * kefForSizeOfSvg}
          height={screenHeight * kefForSizeOfSvg}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default connect(null)( RightContainer);
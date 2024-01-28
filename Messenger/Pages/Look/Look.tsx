import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, View } from "react-native";
import { globalStyles } from "../../Resources/styles";
import { Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import ButtonForSettings from "../SemiComponents/ButtonForSettings";
import { ThemeContext } from "../../Resources/themes";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header";
import RadioGroup from "./Components/RadioGroup";
import { heightOfHeader } from "../ChatList/Constants/ConstantsForChatlist";
import BackGroundGradientView from "../SemiComponents/BackGroundGradientView";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const radioOptions = [
  { id: 1, label: "System mode" },
  { id: 2, label: "Dark mode" },
  { id: 3, label: "Light mode" },
];

const Look = () => {
  const [selectedRadioBtn, setSelectRadioBtn] = useState(1);

  const { theme, toggleTheme } = useContext(ThemeContext); // це потрібно буде на кожній сторінці

  const handleRadioPress = (id: number) => {
    setSelectRadioBtn(id);
    toggleTheme(id);
  };

  // <SafeAreaView
  //     style={{ flex: 1, backgroundColor: theme.header_and_footer_background }}
  //   ></SafeAreaView>

  return (
    <>
      {/* <StatusBar
        translucent
        backgroundColor={theme.header_and_footer_background}
        barStyle={theme.statusbar as any}
      /> */}
      <BackGroundGradientView>
        <Header theme_prop={theme} />
        <View style={{ height: heightOfHeader, marginBottom: 5 }} />

        <RadioGroup
          options={radioOptions}
          selectedOption={selectedRadioBtn}
          onPress={handleRadioPress}
        />

        <Text
          style={{
            marginLeft: 15,
            marginBottom: 7,
            marginTop: 20,
            color: theme.mainText,
          }}
        >
          Themes
        </Text>
        <TouchableOpacity
          style={{ marginBottom: 2, marginHorizontal: screenWidth * 0.03 }}
        >
          <ButtonForSettings text="Themes for Telentik"></ButtonForSettings>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: screenWidth * 0.03 }}>
          <ButtonForSettings text="Wallpaper/chats for color" />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 15,
            marginBottom: 7,
            marginTop: 20,
            color: theme.mainText,
          }}
        >
          For chats
        </Text>
        <TouchableOpacity
          style={{ marginBottom: 2, marginHorizontal: screenWidth * 0.03 }}
        >
          <ButtonForSettings text="Text size"></ButtonForSettings>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: screenWidth * 0.03 }}>
          <ButtonForSettings text="Rounding the corners of messages"></ButtonForSettings>
        </TouchableOpacity>

        <View></View>
      </BackGroundGradientView>
    </>
  );
};

export default Look;

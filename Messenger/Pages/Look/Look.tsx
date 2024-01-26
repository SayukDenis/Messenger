import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, useColorScheme } from "react-native";
import BackButton from "../SemiComponents/BackButton";
import { globalStyles } from "../../Resources/styles";
import { Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import ButtonForSettings from "../SemiComponents/ButtonForSettings";
import ContainerForButtonForSettings from "../SemiComponents/ContainerForButtonForSettings";
import { ThemeContext } from "../../Resources/themes";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Look = () => {
  const [selectedRadioBtn, setSelectRadioBtn] = useState(1);

  const { theme, toggleTheme } = useContext(ThemeContext); // це потрібно буде на кожній сторінці

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.header_and_footer_background }}
    >
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#D7B168", "#D783FF"]}
      >
        <View
          style={[
            globalStyles.header,
            { marginBottom: 17, alignItems: "center" },
            { backgroundColor: theme.header_and_footer_background },
          ]}
        >
          <View>
            {/* <Text
            style={{
              backgroundColor: "yellow",
              width: screenWidth * 0.1,
              height: "100%",
              verticalAlign: "middle",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Back
          </Text> */}
            <TouchableOpacity>
              <BackButton />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              textAlign: "center",
              //backgroundColor: "red",
              width: screenWidth * 0.8,
              height: "100%",
              verticalAlign: "middle",
              color: theme.big_text,
            }}
          >
            Look
          </Text>
        </View>
        <TouchableOpacity
          style={styles.radioBtnContainer}
          onPress={() => {
            setSelectRadioBtn(1);
            toggleTheme(1);
          }}
        >
          <ContainerForButtonForSettings>
            <Text style={styles.radioText}>System mode</Text>
            <View style={styles.externalCircle}>
              {selectedRadioBtn == 1 ? (
                <View style={styles.internalCircle}></View>
              ) : null}
            </View>
          </ContainerForButtonForSettings>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioBtnContainer}
          onPress={() => {
            setSelectRadioBtn(2);
            toggleTheme(2);
          }}
        >
          <ContainerForButtonForSettings>
            <Text style={styles.radioText}>Dark mode</Text>
            <View style={styles.externalCircle}>
              {selectedRadioBtn == 2 ? (
                <View style={styles.internalCircle}></View>
              ) : null}
            </View>
          </ContainerForButtonForSettings>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioBtnContainer}
          onPress={() => {
            setSelectRadioBtn(3);
            toggleTheme(3);
          }}
        >
          <ContainerForButtonForSettings>
            <Text style={styles.radioText}>Light mode</Text>
            <View style={styles.externalCircle}>
              {selectedRadioBtn == 3 ? (
                <View style={styles.internalCircle}></View>
              ) : null}
            </View>
          </ContainerForButtonForSettings>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => setSelectRadioBtn(4)}>
        <ContainerForButtonForSettings>
          <Text style={styles.radioText}>TEST</Text>
          <View style={styles.externalCircle}>
            {selectedRadioBtn == 4 ? (
              <View style={styles.internalCircle}></View>
            ) : null}
          </View>
        </ContainerForButtonForSettings>
      </TouchableOpacity> */}

        <Text style={{ marginLeft: 15, marginBottom: 7, marginTop: 20 }}>
          Themes
        </Text>
        <TouchableOpacity style={{ marginBottom: 2 }}>
          <ButtonForSettings text="Themes for Telentik"></ButtonForSettings>
        </TouchableOpacity>

        <TouchableOpacity>
          <ButtonForSettings text="Wallpaper/chats for color" />
        </TouchableOpacity>

        <Text style={{ marginLeft: 15, marginBottom: 7, marginTop: 20 }}>
          For chats
        </Text>
        <TouchableOpacity style={{ marginBottom: 2 }}>
          <ButtonForSettings text="Text size"></ButtonForSettings>
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonForSettings text="Rounding the corners of messages"></ButtonForSettings>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: theme.background,
            height: 70,
            marginHorizontal: 25,
          }}
        >
          <Text
            style={{
              flex: 1,
              color: theme.text,
              alignSelf: "center",
              fontSize: 24,
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Toggle theme
          </Text>
        </TouchableOpacity>

        <View></View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const radioCircleWidth = screenHeight * 0.06 * (3 / 8);

const styles = StyleSheet.create({
  radioBtnContainer: {
    height: screenHeight * 0.06,
    width: screenWidth * 0.94,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    //backgroundColor: "white",
    opacity: 1,
    marginVertical: 1.2,
  },
  externalCircle: {
    borderRadius: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FEE0A3",
    height: radioCircleWidth,
    width: radioCircleWidth,
    position: "relative",
  },
  internalCircle: {
    borderRadius: 45,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#5F453A",
    height: radioCircleWidth * (7 / 15),
    width: radioCircleWidth * (7 / 15),
  },
  radioText: {
    fontSize: 16,
    marginLeft: 15,
    alignSelf: "center",
    color: "#6A38AD",
  },
  testThemeContainer: {
    height: screenHeight * 0.06,
    width: screenWidth * 0.94,
  },
});

export default Look;

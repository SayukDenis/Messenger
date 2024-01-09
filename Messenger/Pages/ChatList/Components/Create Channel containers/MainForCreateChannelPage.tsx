import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  heightOfHeader,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";
import EditButton from "../../../SemiComponents/EditButton";
import { TouchableOpacity } from "react-native";
import ContainerForButtonForSettings from "../../../SemiComponents/ContainerForButtonForSettings";
import TextInputValidateForCountOfText from "../../../SemiComponents/TextInputValidateForCountOfText";
import AddMemberSVG from "../../../SemiComponents/AddMemberSVG";
import CameraSVG from "../../../SemiComponents/CameraSVG";

interface MainForCreateChannelPageProps {
  navigation: any;
}

const MainForCreateChannelPage: React.FC<MainForCreateChannelPageProps> = ({
  navigation,
}) => {
  const [inputTextForName, setInputTextForName] = useState<string>("");
  const [inputTextForBio, setInputTextForBio] = useState<string>("");
  const radiusOfPhotoContiner = screenWidth * 0.33;
  //const radiusOfPhotoContiner=screenHeight*0.15
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const marginBottom = 10;
  return (
    <ScrollView scrollEnabled={false} style={{ marginTop: heightOfHeader }}>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#E3CFB1",
          borderRadius: 100,
          height: radiusOfPhotoContiner,
          aspectRatio: 1,
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <CameraSVG />
      </View>
      <TouchableOpacity>
        <EditButton />
      </TouchableOpacity>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Name"}
        </Text>
      </View>
      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={"Channel name"}
          maxNumberOfChars={43}
          setInputText={setInputTextForName}
          inputText={inputTextForName}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Bio"}
        </Text>
      </View>
      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={"Channel bio"}
          maxNumberOfChars={100}
          setInputText={setInputTextForBio}
          inputText={inputTextForBio}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Users"}
        </Text>
      </View>
      <TouchableOpacity>
        <ContainerForButtonForSettings>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                //backgroundColor: "white",
                alignSelf: "center",
                justifyContent: "center",
                marginLeft: marginLeft - 3,
              }}
            >
              <AddMemberSVG />
            </View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
                paddingLeft: 3,
                //backgroundColor: "red",
              }}
            >
              {"Users"}
            </Text>
          </View>
        </ContainerForButtonForSettings>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MainForCreateChannelPage;

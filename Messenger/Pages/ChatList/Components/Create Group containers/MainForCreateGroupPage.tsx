import React, {  useEffect, useRef, useState } from "react";
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
import { connect, useDispatch, useSelector } from "react-redux";

interface MainForCreateGroupPageProps {
  navigation: any;
}

const MainForCreateGroupPage: React.FC<MainForCreateGroupPageProps> = ({
  navigation,
}) => {
  const [inputTextForName, setInputTextForName] = useState<string>("");
  const [inputTextForBio, setInputTextForBio] = useState<string>("");
  const dispatch=useDispatch()
  const radiusOfPhotoContiner = screenWidth * 0.33;
  const marginTop = 15;
  const marginLeft = screenWidth * 0.03;
  const marginBottom = 10;
  const PressOnAddMembers = useRef(() => {
    navigation.navigate("Add Member Page");
  });
  const props = useSelector((state: any) => {
    return state.chatListReducer.createGroupOrChannel;
    //console.log(props);
  });
  useEffect(()=>{
    console.log(props)
  },[props])

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
          placeHolder={"Group name"}
          maxNumberOfChars={43}
          inputText={inputTextForName}
          setInputText={setInputTextForName}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Bio"}
        </Text>
      </View>
      <ContainerForButtonForSettings>
        <TextInputValidateForCountOfText
          placeHolder={"Group bio"}
          maxNumberOfChars={100}
          inputText={inputTextForBio}
          setInputText={setInputTextForBio}
        />
      </ContainerForButtonForSettings>
      <View style={{ marginTop, marginLeft }}>
        <Text style={{ color: "#2B1D1D", fontSize: 17, marginBottom }}>
          {"Members"}
        </Text>
      </View>
      <TouchableOpacity onPress={PressOnAddMembers.current}>
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
              {"Member"}
            </Text>
          </View>
        </ContainerForButtonForSettings>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default connect(null)(MainForCreateGroupPage);

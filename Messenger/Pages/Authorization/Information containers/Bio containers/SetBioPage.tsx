import React, { useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../../../SemiComponents/BackGroundGradientView";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../SemiComponents/BackButton";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../../ChatList/Constants/ConstantsForChatlist";
import FormContainer from "../../Authorization containers/FormContainer";
import DoneButtonComponent from "./DoneButtonComponent";
import BackButtonComponent from "./BackButtonComponent";
import ChildrenRightComponent from "./FormContainerChildren/ChildrenRightComponent";
import ChildrenLeftComponent from "./FormContainerChildren/ChildrenLeftComponent";
interface SetBioPageProps {
  navigation: any;
  route: any;
}

const SetBioPage: React.FC<SetBioPageProps> = ({ navigation, route }) => {
  const [inputBio, setInputBio] = useState<string>(route.params.bio);
  const textInputRef = useRef<TextInput>(null);
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  const pressOnDoneButton = () => {
    route.params.setBio(inputBio);
    navigation.goBack();
  };
  return (
    <BackGroundGradientView>
      <ScrollView scrollEnabled={false}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginTop: heightOfHeader - screenHeight * 0.06,
            justifyContent: "space-between",
          }}
        >
          <BackButtonComponent pressOnBackButton = {pressOnBackButton}/>
            <Text style={{ alignSelf: "center", fontSize: 22, color: "#2B1D1D" }}>
             {"Bio"}
            </Text>
          <DoneButtonComponent pressOnDoneButton={pressOnDoneButton}/>
        </View>
        <Text
          style={{
            color: "white",
            marginLeft: screenWidth * 0.1,
            fontSize: 18,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          {"Your bio"}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => textInputRef.current?.focus()}
        >
          <FormContainer
            borderTop={true}
            childrenLeft={
              <ChildrenLeftComponent/>
            }
            childrenRight={
              <ChildrenRightComponent 
                inputBio = {inputBio}
                screenWidth = {screenWidth}
                setInputBio={setInputBio}
                textInputRef = {textInputRef}/>
            }
          />
        </TouchableOpacity>
      </ScrollView>
    </BackGroundGradientView>
  );
};

export default SetBioPage;

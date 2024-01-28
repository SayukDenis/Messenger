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
          <TouchableOpacity
          onPress={pressOnBackButton}
            style={{
              width: screenWidth * 0.2, // backgroundColor: "red"
            }}
          >
            <BackButton />
          </TouchableOpacity>
          <Text style={{ alignSelf: "center", fontSize: 22, color: "#2B1D1D" }}>
            {"Bio"}
          </Text>
          <TouchableOpacity
          onPress={pressOnDoneButton}
            style={{ width: screenWidth * 0.2, justifyContent: "center" }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                color:"#6E23CD"
              }}
            >
              {"Done"}
            </Text>
          </TouchableOpacity>
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
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  //alignSelf: "center",
                }}
              >
                {"Bio"}
              </Text>
            }
            childrenRight={
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <View style={{ alignSelf: "center", marginLeft: 10 }}>
                  <TextInput
                    placeholder="Enter your bio"
                    placeholderTextColor="white"
                    ref={textInputRef}
                    value={inputBio}
                    onChangeText={setInputBio}
                    style={{
                      fontSize: 18,
                      color: "white",
                      width: screenWidth * 0.55,
                     // backgroundColor: "black",
                    }}
                    maxLength={70}
                  />
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    marginRight: 4,
                    width: screenWidth * 0.08,
                    //backgroundColor: "red",
                    justifyContent: "center",
                  }}
                >
  
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 2,
                      color: "white",
                      alignSelf: "center",
                    }}
                  >
                    {`${inputBio.length}/70`}
                  </Text>
                </View>
              </View>
            }
          />
        </TouchableOpacity>
      </ScrollView>
    </BackGroundGradientView>
  );
};

export default SetBioPage;

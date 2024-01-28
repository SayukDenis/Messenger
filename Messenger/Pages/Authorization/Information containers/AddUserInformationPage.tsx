import React, { useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightOfHeader,
  screenHeight,
  screenWidth,
} from "../../ChatList/Constants/ConstantsForChatlist";
import BackButton from "../../SemiComponents/BackButton";
import UserIconSvg from "../../ChatList/Components/SVG/UserIconSvg";
import FormContainer from "../Authorization containers/FormContainer";
import DefaultFormContainer from "../Authorization containers/DefaultFormContainer";
import ArrowForSettingsButton from "../../ChatList/Components/SVG/ArrowForSettingsButton";
import SetTagPage from "./Tag containers/SetTagPage";
import BlurAll from "../../SemiComponents/BlurAll";
import GalleryModalWindow from "../../ChatList/Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/GalleryModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoForCreateGroupOrChannel } from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { CommonActions } from "@react-navigation/native";

interface AddUserInformationPageProps {
  navigation: any;
}

const AddUserInformationPage: React.FC<AddUserInformationPageProps> = ({
  navigation,
}) => {
  const radiusOfUserPhoto = screenWidth * 0.3;
  const widthOfFirstContainer = screenWidth * 0.16;
  const [name, setName] = useState<string>("");
  const [surName, setSurname] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [onAddPhotoPress, setOnAddPhotoPress] = useState<boolean>(false);
  const nameInputRef = useRef<TextInput>(null);
  const surNameInputRef = useRef<TextInput>(null);

  const selectedPhoto: string = useSelector((state: any) => {
    return state.chatListReducer.setPhotoForCreateGroupOrChannel
      .photoForCreateGroupOrChannel;
  });
  const dispatch = useDispatch();
  const IsValidName = (inputName: string) => {
    if (inputName == "") {
      return inputName == "";
    } else if (inputName[0] == " " || inputName[inputName.length - 1] == " ") {
      return true;
    }
    return false;
  };
  const IsValidSurName = (inputSurName: string): boolean => {
    if (inputSurName == "") {
      return false;
    } else if (
      inputSurName[0] == " " ||
      inputSurName[inputSurName.length - 1] == " "
    ) {
      return true;
    }
    return false;
  };
  const isValid = !IsValidName(name) && tag != "";
  const pressOnBackButton = () => {
    navigation.goBack();
  };
  const onTagPress = () => {
    navigation.navigate("Set Tag Page", { tag, setTag });
  };
  const onBioPress = () => {
    navigation.navigate("Set Bio Page", { bio, setBio });
  };
  const onFinishButtonPres = () => {
    dispatch(setPhotoForCreateGroupOrChannel(""));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "ChatList" }],
      })
    );
    //navigation.goTo("ChatList");
  };
  const handlePress = () => {
    setStartTime(Date.now());
  };
  useEffect(() => {}, []);
  function handlePressOut() {
    setEndTime(Date.now());
    const duration = startTime - endTime;
    if (duration < 16) {
      setOnAddPhotoPress(false);
      return;
    }
    setStartTime(Date.now());
  }
  const pressOnAddPhoto = () => {
    setOnAddPhotoPress(true);
  };

  return (
    <BackGroundGradientView>
      <ScrollView scrollEnabled={false}>
        <TouchableOpacity
          onPress={pressOnBackButton}
          style={{ marginTop: heightOfHeader - screenHeight * 0.06 }}
        >
          <BackButton />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pressOnAddPhoto}
          style={{
            // backgroundColor: "black",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: radiusOfUserPhoto,
              aspectRatio: 1,
              backgroundColor: "#D9D9D9",
              overflow: "hidden",
              borderRadius: 100,
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                // backgroundColor: "red",
                alignSelf: "center",
              }}
            >
              {selectedPhoto == "" ? (
                <UserIconSvg
                  height={(radiusOfUserPhoto / 4) * 2.5}
                  width={(radiusOfUserPhoto / 3.5) * 2.5}
                  color={"#434343"}
                />
              ) : (
                <View>
                  <Image
                    source={{ uri: selectedPhoto }}
                    style={{
                      width: radiusOfUserPhoto,
                      aspectRatio: 1,
                      //position: "absolute",
                      backgroundColor: "red",
                    }}
                  />
                </View>
              )}
            </View>
          </View>
          <View style={{ alignSelf: "center", marginTop: 15 }}>
            <Text style={{ color: "#6E23CD", fontSize: 22 }}>
              {"Add photo"}
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            marginLeft: screenWidth * 0.1,
            fontSize: 18,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          {"Your nickname"}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => nameInputRef.current?.focus()}
        >
          <FormContainer
            widthOfFirstContainer={widthOfFirstContainer}
            borderTop={true}
            childrenLeft={
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  //alignSelf: "center",
                }}
              >
                {"Name*"}
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
                    ref={nameInputRef}
                    placeholder="Enter your name"
                    placeholderTextColor={"white"}
                    value={name}
                    onChangeText={setName}
                    style={{
                      width: screenWidth * 0.5,

                      color: "white",
                      fontSize: 16,
                    }}
                    maxLength={30}
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
                    {`${name.length}/30`}
                  </Text>
                </View>
              </View>
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => surNameInputRef.current?.focus()}
        >
          <FormContainer
            widthOfFirstContainer={widthOfFirstContainer}
            childrenLeft={
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  // alignSelf: "center",
                }}
              >
                {"Surname"}
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
                    ref={surNameInputRef}
                    placeholder="Enter your surname"
                    placeholderTextColor={"white"}
                    value={surName}
                    onChangeText={setSurname}
                    style={{
                      width: screenWidth * 0.5,

                      color: "white",
                      fontSize: 16,
                    }}
                    maxLength={30}
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
                    {`${surName.length}/30`}
                  </Text>
                </View>
              </View>
            }
          />
        </TouchableOpacity>

        <Text
          style={{
            color: IsValidName(name) ? "red" : "#A3FBA1",

            marginLeft: screenWidth * 0.1,
            marginTop: 10,
            fontSize: 16,
            opacity: IsValidName(name) ? 0.6 : 0.8,
            width: screenWidth * 0.8,
          }}
        >
          {IsValidName(name) ? "Name isn't valid." : "Name is valid."}
        </Text>
        <View
          style={{
            marginLeft: screenWidth * 0.1,
            marginTop: 6.5,
            height: screenHeight * 0.03,
          }}
        >
          {IsValidSurName(surName) ? (
            <Text
              style={{
                color: "red",
                opacity: 0.6,

                fontSize: 16,
                width: screenWidth * 0.8,
              }}
            >
              {"Surname isn't valid."}
            </Text>
          ) : null}
        </View>
        <Text
          style={{
            color: "white",
            marginLeft: screenWidth * 0.1,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          {"Your bio"}
        </Text>
        <DefaultFormContainer borderTop={true}>
          <TouchableOpacity
            onPress={onBioPress}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              // backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              {"Bio"}
            </Text>
            <View
              style={{
                alignSelf: "center",
                marginRight: 10,
                position: "relative",
              }}
            >
              <ArrowForSettingsButton color={"white"} />
            </View>
          </TouchableOpacity>
        </DefaultFormContainer>
        <Text
          style={{
            opacity: 1,
            color: "white",
            marginLeft: screenWidth * 0.1,
            fontSize: 18,
            marginTop: 25,
            marginBottom: 5,
          }}
        >
          {"Your @tag*"}
        </Text>
        <DefaultFormContainer borderTop={true}>
          <TouchableOpacity
            onPress={onTagPress}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              // backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              {tag.length == 0 ? "@tag" : `@${tag}`}
            </Text>
            <View
              style={{
                alignSelf: "center",
                marginRight: 10,
                position: "relative",
              }}
            >
              <ArrowForSettingsButton color={"white"} />
            </View>
          </TouchableOpacity>
        </DefaultFormContainer>
        <Text
          style={{
            color: tag == "" ? "red" : "#A3FBA1",

            marginLeft: screenWidth * 0.1,
            marginTop: 10,
            fontSize: 16,
            opacity: tag == "" ? 0.6 : 0.8,
            width: screenWidth * 0.8,
          }}
        >
          {tag == "" ? "@tag is empty." : "@tag is valid."}
        </Text>

        <TouchableOpacity
          disabled={!isValid}
          onPress={onFinishButtonPres}
          style={{
            alignSelf: "center",
            width: screenWidth * 0.4,
            backgroundColor: isValid ? "#61B7F5" : "#B3B3B3",
            height: screenHeight * 0.05,
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "800",
            }}
          >
            {"Finish"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {onAddPhotoPress ? (
        <BlurAll handlePress={handlePress} handlePressOut={handlePressOut}>
          <GalleryModalWindow
            setOnAddPhotoPress={setOnAddPhotoPress}
            navigation={navigation}
          />
        </BlurAll>
      ) : null}
    </BackGroundGradientView>
  );
};
export default AddUserInformationPage;

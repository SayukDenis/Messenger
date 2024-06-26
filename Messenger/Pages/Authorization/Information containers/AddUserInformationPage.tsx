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
import * as FileSystem from "expo-file-system";
import BackButton from "../../SemiComponents/BackButton";
import UserIconSvg from "../../ChatList/Components/SVG/UserIconSvg";
import FormContainer from "../Authorization containers/FormContainer";
import DefaultFormContainer from "../Authorization containers/DefaultFormContainer";
import ArrowForSettingsButton from "../../ChatList/Components/SVG/ArrowForSettingsButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsVisibleGalleryModalWindow,
  setPhotoForCreateGroupOrChannel,
} from "../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";
import { CommonActions } from "@react-navigation/native";
import GalleryModalWindowForUsage from "../../ChatList/Components/CreateChannelAndGroupOrWriteMessage/GalleryModalWindow/Gallery/GalleryModalWindowForUsage";
import {
  listentingServer,
  saveInformationAboutUser,
} from "../../ChatList/Constants/ServerConection";
import RNFetchBlob from "react-native-fetch-blob";
import PhotoOrIconContainer from "./Add user information page containers/PhotoOrIconContainer";
import AddPhotoContainer from "./Add user information page containers/AddPhotoContainer";
import PhotoAddButtonContainer from "./Add user information page containers/PhotoAddButtonContainer";

interface AddUserInformationPageProps {
  navigation: any;
  route: any;
}

const AddUserInformationPage: React.FC<AddUserInformationPageProps> = ({
  navigation,
  route,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const widthOfFirstContainer = screenWidth * 0.16;
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("Denis");
  const [surName, setSurname] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [tag, setTag] = useState<string>("denisssayuk");
  const nameInputRef = useRef<TextInput>(null);
  const surNameInputRef = useRef<TextInput>(null);
  const selectedPhoto: string = useSelector((state: any) => {
    return state.chatListReducer.setPhotoForCreateGroupOrChannel
      .photoForCreateGroupOrChannel;
  });
  useEffect(() => {
    setPhoneNumber(route.params.phoneNumber);
  }, []);
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
  const sendUserInformation = async (
    photoUri: string,
    phoneNumber: string,
    name: string,
    surname: string,
    bio: string,
    tag: string
  ) => {
    const serverUrl = listentingServer + saveInformationAboutUser;
    const formData = new FormData();
    console.log(photoUri);
    formData.append("phoneNumber", phoneNumber);
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("bio", bio);
    formData.append("tag", tag);

    const lastSlashIndex = photoUri.lastIndexOf("/");
    const fileName = tag + photoUri.substring(lastSlashIndex + 1);
    console.log("Ім'я файлу:", fileName);
    if (photoUri != "") {
      formData.append(
        "image",
        JSON.parse(
          JSON.stringify({
            uri: photoUri,
            type: "image/jpg",
            name: fileName,
          })
        )
      );
    } else {
      formData.append("image", photoUri);
    }
    //console.log();
    //formData.append("file", blob);

    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from server:", data);

      // Handle the response data as needed
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
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
  const onFinishButtonPress = async () => {
    await sendUserInformation(
      selectedPhoto,
      phoneNumber,
      name,
      surName,
      bio,
      tag
    );
    /*navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "ChatListNavigation" }],
      })
    );
    dispatch(setPhotoForCreateGroupOrChannel(""));*/
  };

  const pressOnAddPhoto = () => {
    dispatch(setIsVisibleGalleryModalWindow(true));
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
        <PhotoAddButtonContainer pressOnAddPhoto={pressOnAddPhoto} />
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
          onPress={onFinishButtonPress}
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
      <GalleryModalWindowForUsage
        navigation={navigation}
        cameFrom={"Add User Information Page"}
      />
    </BackGroundGradientView>
  );
};

export default AddUserInformationPage;

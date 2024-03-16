import React from "react";
import { View, Platform, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { screenHeight,screenWidth } from "../../../../ChatList/Constants/ConstantsForChatlist";
import { footerstyles } from "../../../../ChatList/Styles/FooterStyle";

interface ForterProps {
    nameOfPageText: string
}

const FooterForAddExeption : React.FC<ForterProps> = ({ nameOfPageText })=>{

    let footerArticle :string;
    if(nameOfPageText == "Privates Chats"){
        footerArticle = "Contact"
    }else if(nameOfPageText == "Group chats"){
        footerArticle ="Group"
    }else{
        footerArticle="Channel"
    }

    return(
        <View
      style={[
        footerstyles.container,
        {
          zIndex:  5,
          height:
            Platform.OS == "ios" && useSafeAreaInsets().bottom != 0
              ? screenHeight * 0.05 + useSafeAreaInsets().bottom
              : screenHeight * 0.06,
          overflow: "hidden",
        },
      ]}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        locations={[0.25, 0.5, 0.75]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          opacity: 0.7,
          bottom: 0,
          position: "absolute",
          left: 0,
          right: 0,
          height: screenHeight,
          width: screenWidth,
        }}
      />
      <View
        style={{
          marginBottom: Platform.OS == "ios" ? useSafeAreaInsets().bottom : 0,
          flex: 1,
          alignItems:'center',
          justifyContent:'center',
          paddingTop:'5%'
        }}
      >
        <Text style = {{fontSize:20}}>{footerArticle}</Text>
      </View>
    </View>
    )
}

export default FooterForAddExeption
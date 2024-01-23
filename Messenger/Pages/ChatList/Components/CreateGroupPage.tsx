import React from "react";
import HeaderForCreateGroupPage from "./Create Group containers/HeaderForCreateGroupPage";
import MainForCreateGroupPage from "./Create Group containers/MainForCreateGroupPage";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import { propsForCreate } from "../Constants/ConstantsForChatlist";

interface CreateGroupPageProps {
  navigation: any;
}

const CreateGroupPage: React.FC<CreateGroupPageProps> = ({ navigation }) => {
  return (
    <BackGroundGradientView>
      <HeaderForCreateGroupPage navigation={navigation} />
      <MainForCreateGroupPage navigation={navigation} />
    </BackGroundGradientView>
  );
};

export default CreateGroupPage;

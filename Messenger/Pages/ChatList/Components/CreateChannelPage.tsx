import React from "react";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderForCreateChannelPage from "./Create Channel containers/HeaderForCreateChannelPage";
import MainForCreateChannelAngGroupOrWriteMessage from "./CreateChannelAndGroupOrWriteMessage/MainForCreateChannelAndGroupOrWriteMessage";
import MainForCreateChannelPage from "./Create Channel containers/MainForCreateChannelPage";

interface CreateChannelPageProps {
  navigation: any;
}

const CreateChannelPage: React.FC<CreateChannelPageProps> = ({
  navigation,
}) => {
  return <BackGroundGradientView>
    <HeaderForCreateChannelPage navigation={navigation}/>
    <MainForCreateChannelPage navigation={navigation}/>
  </BackGroundGradientView>;
};

export default CreateChannelPage;

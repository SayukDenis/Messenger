import React from "react";
import BackGroundGradientView from "../../SemiComponents/BackGroundGradientView";
import HeaderForWriteMessage from "./Write Message containers/HeaderForWriteMessage";
import MainForWriteMessage from "./Write Message containers/MainForWriteMessage";

interface WriteMessagePageProps {
  navigation: any;
}

const WriteMessagePage: React.FC<WriteMessagePageProps> = ({ navigation }) => {
  return <BackGroundGradientView>
    <HeaderForWriteMessage navigation={navigation}/>
    <MainForWriteMessage navigation={navigation}/>
  </BackGroundGradientView>;
};

export default WriteMessagePage;

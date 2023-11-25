// Oleksii Kovalenko telegram - @traewe

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./Styles";
import { user } from "../../SemiComponents/DBUser";
import Name from "../../SemiComponents/MainScreen/Name";
import GoBackButton from "../../SemiComponents/GoBackButton";

interface NumberUsernameAndBioProps {
  onGoBackPress: () => void;
}

const NumberUsernameAndBio: React.FC<NumberUsernameAndBioProps> = (props) => {
  return <View style={styles.userInfoMainContainer}></View>;
};

export default NumberUsernameAndBio;

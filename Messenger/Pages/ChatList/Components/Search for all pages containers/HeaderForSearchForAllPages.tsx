import React from "react";
import { View } from "react-native";
import HeaderContainer from "../../../SemiComponents/HeaderContainer";
import { headerstyles } from "../../Styles/HeaderStyle";

interface HeaderForSearchForAllPagesProps {
 
}

const HeaderForSearchForAllPages: React.FC<
  HeaderForSearchForAllPagesProps
> = ({}) => {
  return (
    <HeaderContainer>
      <View style={ [{ flexDirection: "row",backgroundColor:'blue' ,flex:1},headerstyles.header]}>
        
      </View>
    </HeaderContainer>
  );
};

export default HeaderForSearchForAllPages;

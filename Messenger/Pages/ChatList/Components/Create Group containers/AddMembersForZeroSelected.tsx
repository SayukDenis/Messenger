import React, { MutableRefObject } from "react";
import ContainerForButtonForSettings from "../../../SemiComponents/ContainerForButtonForSettings";
import { Text, TouchableOpacity, View } from "react-native";
import AddMemberSVG from "../../../SemiComponents/AddMemberSVG";

interface AddMembersForZeroSelectedProps {
  marginLeft: number;
  onMemberTouch: MutableRefObject<() => void>;
}
const AddMembersForZeroSelected: React.FC<AddMembersForZeroSelectedProps> = ({
  marginLeft,
  onMemberTouch
}) => {
  return (
    <TouchableOpacity onPress={onMemberTouch.current}>
      <ContainerForButtonForSettings>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              //backgroundColor: "white",
              alignSelf: "center",
              justifyContent: "center",
              marginLeft: marginLeft - 3,
            }}
          >
            <AddMemberSVG kef={1.3} />
          </View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
              paddingLeft: 3,
              //backgroundColor: "red",
            }}
          >
            {"Member"}
          </Text>
        </View>
      </ContainerForButtonForSettings>
    </TouchableOpacity>
  );
};

export default AddMembersForZeroSelected;

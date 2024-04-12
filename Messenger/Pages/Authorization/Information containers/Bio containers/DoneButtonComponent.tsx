import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";
interface DoneButtonComponentProps {
  pressOnDoneButton: () => void;
}

const DoneButtonComponent: React.FC<DoneButtonComponentProps> = ({ pressOnDoneButton 
}) => {
  return (
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
)};

export default DoneButtonComponent;
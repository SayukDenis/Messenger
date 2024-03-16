import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../../../../Styles/ListOfChatsStyle";

interface TimeContainerProps {
  time: string;
}

const TimeContainer: React.FC<TimeContainerProps> = ({ time }) => {
  return (
    <View style={listOfChatsStyle.timeContainer}>
      <Text style={listOfChatsStyle.timeText}>{time}</Text>
    </View>
  );
};

export default connect(null)(TimeContainer);

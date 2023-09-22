import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import StyleButtonList from './StyleButtonLIst';

const ButtonList = () => {
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <View>
    {items.map((item, index) => (
      <View key={index} >
        <TouchableOpacity style={StyleButtonList.button}>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
}

export default ButtonList;
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import StyleButtonList from './StyleButtonLIst';
import StyleCentre from '../StyleCenter';



const ButtonList: React.FC<any> = ({ navigation }) => {
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <View>
    {items.map((item, index) => (
      <View key={index} >
        <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    ))}
     <Text style= {StyleButtonList.styleButListText}>Help</Text>
                                <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate('Question page')}>
                                        <Text>Question in Telintik</Text>
                                </TouchableOpacity>
                                    <TouchableOpacity style={StyleButtonList.button} onPress={() => navigation.navigate('Ask a question')}>
                                        <Text>Ask a Question</Text>
                                    </TouchableOpacity>
    </View>
}


export default ButtonList;
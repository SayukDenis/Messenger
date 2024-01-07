import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import StyleButtonList from './StyleButtonLIst';

const ButtonList: React.FC<any> = ({ navigation }) => {
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <View>
    {items.map((item, index) => (
      <View key={index} >
        <TouchableOpacity onPress={() => navigation.navigate(item)}>
          <View style={StyleButtonList.button}></View>
          <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center' ,width: '100%', height: '100%' }}><Text style={StyleButtonList.buttonTextStyle}>{item}</Text></View>
        </TouchableOpacity>
      </View>
    ))}
     <Text style= {StyleButtonList.styleButListText}>FAQ</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Question page')}>
                                        <View style={StyleButtonList.button}></View>
                                        <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center' ,width: '100%', height: '100%' }}><Text style = {StyleButtonList.buttonTextStyle}>Question in Telintik</Text></View>
                                </TouchableOpacity>
                                    <TouchableOpacity  onPress={() => navigation.navigate('Ask a question')}>
                                      <View style={StyleButtonList.button}></View>
                                      <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center' ,width: '100%', height: '100%' }}><Text style = {StyleButtonList.buttonTextStyle}>Ask a Question</Text></View>
                                    </TouchableOpacity>
    </View>
}


export default ButtonList;
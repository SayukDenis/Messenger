import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import StyleButtonList from './StyleButtonLIst';
import ButtonListConteiner from './ButtonListConteiner';

const ButtonList: React.FC<any> = ({ navigation }) => {
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <View>
    {items.map((item, index) => (
      <View key={index} >
        <TouchableOpacity style={{marginBottom:1}} onPress={() => navigation.navigate(item)}>
          <ButtonListConteiner ><Text style ={StyleButtonList.buttonTextStyle} >{item}</Text></ButtonListConteiner>
        </TouchableOpacity>
      </View>
    ))}
     <Text style= {StyleButtonList.styleButListText}>FAQ</Text>
                                <TouchableOpacity style={{marginBottom:1}}   onPress={() => navigation.navigate('Question page')}>                                      
                                        <ButtonListConteiner><Text style = {StyleButtonList.buttonTextStyle}>Question in Telintik</Text></ButtonListConteiner>
                                </TouchableOpacity>
                                    <TouchableOpacity style={{marginBottom:1}}   onPress={() => navigation.navigate('Ask a question')}>
                                      <ButtonListConteiner><Text style = {StyleButtonList.buttonTextStyle}>Ask a Question</Text></ButtonListConteiner>
                                    </TouchableOpacity>
    </View>
}


export default ButtonList;
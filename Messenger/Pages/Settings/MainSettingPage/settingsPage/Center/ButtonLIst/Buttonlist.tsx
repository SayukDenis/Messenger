import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import StyleButtonList from './StyleButtonLIst';
import ButtonForSettings from '../../../../../SemiComponents/ButtonForSettings';

const ButtonList: React.FC<any> = ({ navigation }) => {
    let items: string[] =["Saved message","Look","Notification","Chat folders","Confidentiality","Language",];
    return <View>
    {items.map((item, index) => (
      <View key={index} >
        <TouchableOpacity style={{marginBottom:1}} onPress={() => navigation.navigate(item)}>
          <ButtonForSettings text={item} ></ButtonForSettings>
        </TouchableOpacity>
      </View>
    ))}
     <Text style= {StyleButtonList.styleButListText}>FAQ</Text>
                                <TouchableOpacity style={{marginBottom:1}}   onPress={() => navigation.navigate('Question page')}>                                      
                                        <ButtonForSettings text='Question in Telintik'></ButtonForSettings>
                                </TouchableOpacity>
                                    <TouchableOpacity style={{marginBottom:1}}   onPress={() => navigation.navigate('Ask a question')}>
                                      <ButtonForSettings text='Ask a Question'></ButtonForSettings>
                                    </TouchableOpacity>
    </View>
}


export default ButtonList;
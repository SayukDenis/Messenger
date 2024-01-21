import React, { useRef } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderContainer from '../../../../../SemiComponents/HeaderContainer';
import DefaultContainerInHeader from '../../../../../SemiComponents/DefaultContainerInHeader';
import { screenWidth } from '../../../../Constants/ConstantsForChatlist';
import BackButton from '../../../../../SemiComponents/BackButton';

interface HeaderForGalleryProps {
    navigation:any;
}

const HeaderForGallery: React.FC<HeaderForGalleryProps> = ({navigation }) => {
    const pressOnBackButton = useRef(() => {

        navigation.goBack();
      });
  return(<HeaderContainer>
    <DefaultContainerInHeader>
    <TouchableOpacity
          onPress={pressOnBackButton.current}
          style={{ alignSelf: "center", width: screenWidth * 0.2 }}
        >
          <BackButton />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginRight: screenWidth * 0.2,
          }}
        >
          <Text style={{ alignSelf: "center", fontSize: 20 }}>
            {"Photo"}
          </Text>
        </View>
    </DefaultContainerInHeader>
  </HeaderContainer>)
}


export default HeaderForGallery;

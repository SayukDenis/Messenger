import React from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from '../Style/Style';
import { stylesPhoneCodeRegistration } from '../Style/StylePhoneCodeRegistration';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PhoneCodeRegistration({navigation}) {
  const handleBack = () => {
    navigation.goBack();
  };
  const navigateToCodePassword = () => {
    navigation.navigate('CodePassword');
  };
  return (
    <ImageBackground source={require('../Image/Background.png')} style={styles.backgroundImage}>
      <TouchableOpacity
        style={stylesPhoneCodeRegistration.backButton}
        onPress={handleBack}
      >
        <Icon name="chevron-left" style={stylesPhoneCodeRegistration.backButtonText} />
      </TouchableOpacity>
      <View style={stylesPhoneCodeRegistration.container}>
      <View style={styles.containerCenter}>
       <Image source={require('../Image/PhoneCodeRegistrationImage.png')}
            style={styles.imageStyle}/>
     <Text style={styles.header}>Code for phone</Text>

     <View style={styles.containerLine}>
      <View style={styles.line} />

      <View style={styles.row}>
        <Text style={styles.headerText}>Code</Text>
        <View style={styles.verticalLine} />
        <TextInput style={styles.input} placeholder="1111" />
      </View>

      <View style={styles.line} />
    </View>
    </View>
 <View style={styles.containerStart}>
         <TouchableOpacity
        style={styles.linkButton}
        onPress={() => alert('Sent code again')}
         >
        <Text style={styles.linkButtonText}>Sent code again</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerCenter}>
        <TouchableOpacity
          style={styles.Button}
          onPress={navigateToCodePassword}
        >
        <Text style={styles.ButtonLaber}>
          Finish
        </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
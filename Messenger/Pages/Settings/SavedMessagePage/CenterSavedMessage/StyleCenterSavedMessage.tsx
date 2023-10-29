import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const StyleCenterSavedMessage = StyleSheet.create({
        centerConteiner :{
            height:windowHeight*0.88
        }
});

export default StyleCenterSavedMessage;
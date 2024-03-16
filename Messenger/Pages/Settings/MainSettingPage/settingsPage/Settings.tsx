import { View, StatusBar } from 'react-native';
import React, {useEffect} from 'react';
import StylesSettings from './StyleSetting';
import Header from './Header/Heder';
import Center from './Center/Center';
import { useFocusEffect } from '@react-navigation/native';
import BackGroundGradientView from '../../../SemiComponents/BackGroundGradientView';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import { heightOfHeader } from '../../../ChatList/Constants/ConstantsForChatlist';
import { useDispatch, useSelector } from 'react-redux';
import UserInfoComponent from './UserInfoComponent/StyleUserInfoComponent';
import { SetFalseStateForUserInfo } from '../../../../ReducersAndActions/Actions/SettingsActions/SettingsActions';

const Settingspage: React.FC<any> = ({ navigation })=>{
  let isVisibleUserInfo = useSelector((state:any)=>state.SettingsPagesReducers.SetVisibleTextInput.VisibleForUserInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(SetFalseStateForUserInfo(false));
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  return <BackGroundGradientView>
            {isVisibleUserInfo == false&& (
              <View>
                <HeaderContainer><Header navigation= {navigation}></Header></HeaderContainer>
                <View style={{ marginTop: heightOfHeader }} ></View>
              </View>
            )}
            {isVisibleUserInfo == true&& (
              <View>
                <UserInfoComponent/>
              </View>
            )} 
            <Center navigation= {navigation}></Center>
  </BackGroundGradientView>
  
}

export default Settingspage;
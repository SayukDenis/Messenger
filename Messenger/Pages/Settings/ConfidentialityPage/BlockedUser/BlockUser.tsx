import React from 'react';
import { View } from 'react-native';
import BlocUserHeader from './BlockUserHeader/BlockUserHeader';
import StyleBlockUser from './StyleBlockedUser';
import BlockUserCenter from './BlockUserCenter/BlockuserCenter';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import BackGroundGradientView from '../../../SemiComponents/BackGroundGradientView';
import { heightOfHeader } from '../../../ChatList/Constants/ConstantsForChatlist';

const BlockUser : React.FC<any> = ({ navigation })=>{
    return<BackGroundGradientView>
        <View style= {StyleBlockUser.BlockUserConteiner}>
        <View style = {{marginTop:heightOfHeader}}></View>
        <HeaderContainer><BlocUserHeader navigation = {navigation}></BlocUserHeader></HeaderContainer>
        <BlockUserCenter></BlockUserCenter>
    </View>
    </BackGroundGradientView>
}

export default BlockUser;
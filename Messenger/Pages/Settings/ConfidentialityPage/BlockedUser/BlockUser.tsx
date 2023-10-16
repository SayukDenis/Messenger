import React from 'react';
import { View } from 'react-native';
import BlocUserHeader from './BlockUserHeader/BlockUserHeader';
import StyleBlockUser from './StyleBlockedUser';
import BlockUserCenter from './BlockUserCenter/BlockuserCenter';

const BlockUser = ()=>{
    return<View style= {StyleBlockUser.BlockUserConteiner}>
        <BlocUserHeader></BlocUserHeader>
        <BlockUserCenter></BlockUserCenter>
    </View>
}

export default BlockUser;
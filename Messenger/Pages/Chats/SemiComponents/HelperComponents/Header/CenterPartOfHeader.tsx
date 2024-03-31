import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from '../../Styles/Header';
import { CenterPartOfHeaderProps } from './Interfaces/ICenterPartOfHeader';

class CenterPartOfHeader extends Component<CenterPartOfHeaderProps> {
  
  shouldComponentUpdate(nextProps: Readonly<CenterPartOfHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.selecting !== nextProps.selecting) {
      return true;
    } else if(this.props.counterOfSelectedMessages !== nextProps.counterOfSelectedMessages) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { picture, displayName, activityTime, dialogue, navigation, selecting, counterOfSelectedMessages } = this.props;

    return (!selecting ?
      <TouchableOpacity 
        style={styles.chatUserInfo}
        activeOpacity={1}
        onPress={() => navigation.navigate('', { dialogue })}
      >
        <Image 
          source={{ uri: picture }} 
          style={styles.chatUserInfoImg}
        />
        <View style={styles.chatUserInfoDiv}>
          <Text style={styles.chatUserInfoUserName}>{displayName}</Text>
          <Text style={styles.chatUserInfoUserWasOnline}>{activityTime.toString()}</Text>
        </View>
      </TouchableOpacity> :
      <View style={{ padding: 10 }}>
        <Text>Select ({counterOfSelectedMessages})</Text>
      </View>
    );
  }
}

export default CenterPartOfHeader;
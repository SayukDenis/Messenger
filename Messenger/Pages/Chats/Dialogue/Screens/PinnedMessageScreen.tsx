import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { PureComponent } from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import HeaderBackButton from '../SVG/HeaderBackButton';
import BackGroundGradinetView from '../../../SemiComponents/BackGroundGradientView';
import { width } from '../DialogueConstants';
import MessageItem from '../components/MessageItem';
import { Layout } from '../GeneralInterfaces/ILayout';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';

interface NavigationProps {
  route?: {
    params: {
      navigation: any;
      listOfPinnedMessages: MessageProps[];
      listOfMessages: MessageProps[];
      setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void};
      author: User;
      messageID: number;
      unpinAllMessagesHandler: () => void;
    }
  };
}

interface PinnedMessageScreenProps extends NavigationProps {
  
}

interface PinnedMessageScreenState {
  selecting: boolean;
  coordsY: [number[]];
}

class PinnedMessageScreen extends PureComponent<PinnedMessageScreenProps> {
  state: PinnedMessageScreenState = {
    selecting: false,
    coordsY: [[]],
  }

  keyExtractor = (item:any) => {
    return item.messageId?.toString();
  }

  setCoordsYHandler = (newCoordsY:any) => {
    this.setState({ coordsY: [...newCoordsY] });
  }

  renderItem = ({item}:any) => (
    <MessageItem 
      item={item}
      listOfMessages={this.props.route?.params.listOfMessages!}
      setMessageMenuVisible={this.props.route?.params.setMessageMenuVisible!}
      coordsY={this.state.coordsY}
      author={this.props.route?.params.author!}
      messageID={this.props.route?.params.messageID!}
      setCoordsY={this.setCoordsYHandler}
      selecting={this.state.selecting}
    />
  );

  ListHeaderComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: screenHeight*0.08 + Constants.statusBarHeight }} 
    />
  );

  unpinAllHandler = () => {
    this.props.route?.params.unpinAllMessagesHandler();
    this.props.route?.params.navigation.goBack();
  }

  render(): React.ReactNode {
    return (
      <View style={{ backgroundColor: 'green', zIndex: 10 }}>
        <BackGroundGradinetView>
          <HeaderContainer>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                <TouchableOpacity
                  style={{ width: width * 0.15 }}
                  onPress={() => this.props.route?.params.navigation?.goBack()}
                >
                  <HeaderBackButton />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }} >Pinned messages</Text>
                <TouchableOpacity
                  style={{ width: width * 0.15 }}
                  onPress={this.unpinAllHandler}
                >
                  <Text style={{ fontSize: 16, color: '#734CA5' }} >Unpin all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </HeaderContainer>

          <FlatList 
            data={this.props.route?.params.listOfPinnedMessages} 
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={this.ListHeaderComponent}
          />
        </BackGroundGradinetView>
      </View>
    )
  }
}

export default PinnedMessageScreen;
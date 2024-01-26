import { View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import HeaderContainer from '../../../SemiComponents/HeaderContainer';
import HeaderBackButton from '../SVG/HeaderBackButton';
import BackGroundGradinetView from '../../../SemiComponents/BackGroundGradientView';
import { width } from '../DialogueConstants';

interface NavigationProps {
  route?: any;
}

interface PinnedMessageScreenProps extends NavigationProps {
  
}

class PinnedMessageScreen extends PureComponent<PinnedMessageScreenProps> {
  
  componentDidMount(): void {
    
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
                  onPress={() => this.props.route.params.navigation?.goBack()}
                >
                  <HeaderBackButton />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }} >Pinned messages</Text>
                <TouchableOpacity
                  style={{ width: width * 0.15 }}
                >
                  <Text style={{ fontSize: 16, color: '#734CA5' }} >Unpin all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </HeaderContainer>
        </BackGroundGradinetView>
      </View>
    )
  }
}

export default PinnedMessageScreen;
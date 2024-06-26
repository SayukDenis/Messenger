import { View, Text, Modal, TouchableOpacity,  } from 'react-native';
import React, { Component } from 'react';
import { DeleteMessageModalProps } from './Interfaces/IDeleteMessageModal';
import { styles } from './Styles/DeleteMessageModal';
import { connect } from 'react-redux';

class DeleteMessageModal extends Component<DeleteMessageModalProps> {

  shouldComponentUpdate(nextProps: Readonly<DeleteMessageModalProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    if(this.props.deleting !== nextProps.deleting) {
      return true;
    }

    return false;
  }

  render(): React.ReactNode {
    const { deleting, setDeletingHandler, onDeletePress, message, author } = this.props;

    return (
      <Modal 
        style={styles.modalWindow} 
        visible={deleting} 
        transparent={true} 
        onRequestClose={setDeletingHandler} 
        statusBarTranslucent={true} 
      >
        <TouchableOpacity 
          activeOpacity={1} 
          style={styles.touchableBackground}
          onPress={setDeletingHandler}
        >
          <View style={styles.mainModalMessageContainer}>
            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessageText}>Do you want to delete this message?</Text>
            </View>
            {message!=undefined&&(
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity 
                  activeOpacity={1} 
                  style={styles.modalLeftButtonContainer} 
                  onPress={onDeletePress}
                >
                  <Text style={styles.modalButtonText}>Agree</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  activeOpacity={1} 
                  style={styles.modalRightButtonContainer} 
                  onPress={setDeletingHandler}
                >
                  <Text style={styles.modalButtonText}>Disagree</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }
}

export default connect(null)(DeleteMessageModal)
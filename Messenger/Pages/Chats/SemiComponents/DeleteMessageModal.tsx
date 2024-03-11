import { View, Text, Modal, TouchableOpacity,  } from 'react-native';
import React, { Component, useEffect } from 'react';
import { DeleteMessageModalProps } from './Interfaces/IDeleteMessageModal';
import { styles } from './Styles/DeleteMessageModal';
import { connect } from 'react-redux';

class DeleteMessageModal extends Component<DeleteMessageModalProps> {
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
              <Text style={styles.modalMessageText}>
                Do you want to delete this message? {message?.author.userId==author.userId||'It will be deleted only for you.'}
              </Text>
            </View>
            {message!=undefined&&(
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity 
                  activeOpacity={1} 
                  style={styles.modalLeftButtonContainer} 
                  onPress={onDeletePress}
                >
                  <Text style={styles.modalButtonText}>
                    {message.author.userId==author.userId?'For me':'Agree'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  activeOpacity={1} 
                  style={styles.modalRightButtonContainer} 
                  onPress={message.author.userId==author.userId?onDeletePress:setDeletingHandler}
                >
                  <Text style={styles.modalButtonText}>{message.author.userId==author.userId?'For everyone':'Disagree'}</Text>
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
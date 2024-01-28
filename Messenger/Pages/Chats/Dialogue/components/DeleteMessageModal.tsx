import { View, Text, Modal, TouchableOpacity,  } from 'react-native';
import React, { useEffect } from 'react';
import { DeleteMessageModalProps } from './interfaces/IDeleteMessageModal';
import { styles } from './Styles/DeleteMessageModal';
import { connect } from 'react-redux';

const DeleteMessageModal = ({deleting, setDeletingHandler, onDeletePress, message, author}:DeleteMessageModalProps) => {
  useEffect(()=> {
    
  }, [setDeletingHandler]);
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
          {message!=undefined?(
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
          ):null}
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default connect(null)(DeleteMessageModal)
import { View, Text, Modal, TouchableOpacity, Dimensions,  } from 'react-native';
import React, { MutableRefObject, useEffect } from 'react';
import { DeleteMessageModalProps } from './interfaces/IDeleteMessageModal';
import { styles } from './Styles/DeleteMessageModal';

const DeleteMessageModal = ({deleting, setDeletingHandler, onDeletePress, message}:DeleteMessageModalProps) => {
  useEffect(()=> {
    console.log(setDeletingHandler);
  }, [setDeletingHandler]);
  return (
    <Modal style={styles.modalWindow} visible={deleting} transparent={true} onRequestClose={setDeletingHandler} statusBarTranslucent={true} >
      <TouchableOpacity activeOpacity={1} style={styles.touchableBackground}onPress={setDeletingHandler}>
        <View style={styles.mainModalMessageContainer}>
          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalMessageText}>
              Do you want to delete this message? {message?.isUser||'It will be deleted only for you.'}
            </Text>
          </View>
          {message!=undefined?(
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity activeOpacity={1} style={styles.modalLeftButtonContainer} onPress={onDeletePress}>
                  <Text style={styles.modalButtonText}>{message.isUser?'For me':'Agree'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.modalRightButtonContainer} onPress={message.isUser?onDeletePress:setDeletingHandler}>
                  <Text style={styles.modalButtonText}>{message.isUser?'For everyone':'Disagree'}</Text>
                </TouchableOpacity>
              </View>
            ):null}
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default DeleteMessageModal
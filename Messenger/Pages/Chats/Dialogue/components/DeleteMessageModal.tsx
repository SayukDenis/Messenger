import { View, Text, Modal, TouchableOpacity, Dimensions,  } from 'react-native';
import React, { MutableRefObject, useEffect } from 'react';
import { Message } from '../tmpdata';

const { width, height } = Dimensions.get('window');

interface DeleteMessageModalProps {
  deleting:boolean,
  setDeletingHandler:()=>void,
  onDeletePress:()=>void,
  message:Message,
}


const DeleteMessageModal = ({deleting, setDeletingHandler, onDeletePress, message}:DeleteMessageModalProps) => {
  useEffect(()=> {
    console.log(setDeletingHandler);
  }, [setDeletingHandler]);
  return (
    <Modal style={{flex:1}} visible={deleting} transparent={true} onRequestClose={setDeletingHandler} statusBarTranslucent={true} >
      <TouchableOpacity activeOpacity={1} style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.15)', alignItems:'center', justifyContent:'center'}}onPress={setDeletingHandler}>
        <View style={[{width:width*0.6, height:height*0.15, borderWidth:0.4, backgroundColor:'#dcdcdc', justifyContent:'center', borderRadius:12}]}>
          <View style={{height:height*0.11, alignItems:'center', justifyContent:'center'}}>
            <Text style={{}}>Do you want to delete this message?</Text>
          </View>
          {message!=undefined?(message.isUser?
            <View style={{display:'flex', flexDirection:'row'}}>
              <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, justifyContent:'center', alignItems:'center', borderTopWidth:0.4, borderRightWidth:0.4}} onPress={onDeletePress}>
                <Text style={{color:'red'}}>For me</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4, justifyContent:'center', alignItems:'center'}} onPress={onDeletePress}>
                <Text style={{color:'red'}}>For everyone</Text>
              </TouchableOpacity>
            </View>:
            <View style={{display:'flex', flexDirection:'row'}}>
              <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4, borderRightWidth:0.4, justifyContent:'center', alignItems:'center'}} onPress={onDeletePress}>
                <Text style={{color:'red'}}>Agree</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4, justifyContent:'center', alignItems:'center'}} onPress={setDeletingHandler}>
                <Text style={{color:'red'}}>Disagree</Text>
              </TouchableOpacity>
            </View>
          ):null}
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default DeleteMessageModal
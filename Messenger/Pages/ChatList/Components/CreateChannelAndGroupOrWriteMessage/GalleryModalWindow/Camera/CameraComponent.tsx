import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from "expo-camera";
import { useDispatch } from 'react-redux';
import { setPhotoForCreateGroupOrChannel } from '../../../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions';

interface CameraProps {
  navigation:any;
  route:any;
}

const CameraComponent: React.FC<CameraProps> = ({navigation,route}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef<Camera | null>(null);

  const dispatch=useDispatch();
  const flipCamera = () => {
    setType(
      type === CameraType.back
        ? CameraType.front
        : CameraType.back
    );
  };
  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      dispatch(setPhotoForCreateGroupOrChannel(photo.uri));
      route.params.setOnAddPhotoPress(false);
      navigation.goBack();
    }
  };

  return (
   
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={flipCamera}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={handleTakePhoto}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    
  );
};

export default CameraComponent;

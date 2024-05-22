import React, { useState } from 'react';
import { ScrollView, Image, TouchableOpacity, Text, View, Animated } from 'react-native';
import { styles } from './Styles/PhotoPreview';
import { ChatConstants } from './ChatConstants';
import Constants from 'expo-constants';
import * as SVG from './SVG';

const { getCustomFontSize, height, width } = ChatConstants.getInstance();

interface PhotoPreviewProps {
  fileContent: string;
  backHandler: (fileContent: string, sendingTime: Date | null) => void;
  sendingTime: Date | null;
  author: string;
}

const displayMenuHeight = new Animated.Value(height * 0.12);
const displayMenuOffsetUpper = new Animated.Value(0);
const displayMenuOffsetLower = new Animated.Value(0);

const PhotoPreview = ({ fileContent, sendingTime, author, backHandler } : PhotoPreviewProps) => {
  if(!fileContent) return null;
  

  const handleDisplayMenuHeight = () => {
    const currentHeight = (displayMenuHeight as any)._value;
    
    if(currentHeight > 0) {
      Animated.timing(displayMenuHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false 
      }).start();
      Animated.timing(displayMenuOffsetUpper, {
        toValue: -height * 0.08,
        duration: 200,
        useNativeDriver: false 
      }).start();
      Animated.timing(displayMenuOffsetLower, {
        toValue: height * 0.08,
        duration: 200,
        useNativeDriver: false 
      }).start();
    } else {
      Animated.timing(displayMenuHeight, {
        toValue: height * 0.12,
        duration: 200,
        useNativeDriver: false 
      }).start();
      Animated.timing(displayMenuOffsetUpper, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false 
      }).start();
      Animated.timing(displayMenuOffsetLower, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false 
      }).start();
    }
  }

  const getDateFormat = (date: Date): string => {
    // Get the current date
    const currentDate = new Date();
    // Get the start of today (00:00:00)
    const startOfToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    // Get the start of yesterday (00:00:00)
    const startOfYesterday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
    
    if (date >= startOfToday && date < currentDate) {
      return 'today';
    }
    
    if (date >= startOfYesterday && date < startOfToday) {
      return 'yesterday';
    }
    
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDate = `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${date.getFullYear()}`;
    return formattedDate;
  };  

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)', height: displayMenuHeight, width: width, justifyContent: 'space-between', paddingHorizontal: width * 0.08, paddingTop: Constants.statusBarHeight, flexDirection: 'row', alignItems: 'center', transform: [{ translateY: displayMenuOffsetUpper }] }}>
        <TouchableOpacity 
          activeOpacity={1}
          style={{}}
          onPress={() => backHandler('', null)}
        >
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 24 }}>Back</Text>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        maximumZoomScale={4} // Adjust as needed
        minimumZoomScale={1} // Adjust as needed
        contentContainerStyle={{ flex: 1, zIndex: 5 }}
        centerContent
        pinchGestureEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleDisplayMenuHeight}
        >
          <Image
            source={{ uri: 'data:image/png;base64,' + fileContent }}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ScrollView>
      <Animated.View style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)', height: displayMenuHeight, width: width, paddingHorizontal: width * 0.08, paddingVertical: height * 0.02, alignItems: 'center', transform: [{ translateY: displayMenuOffsetLower }] }}>
        <Text style={{ fontSize: getCustomFontSize(14), color: '#fff', fontWeight: '700' }}>{author}</Text>
        <Text style={{ fontSize: getCustomFontSize(14), color: '#fff'}}>{getDateFormat(sendingTime!)}</Text>
      </Animated.View>
    </View>
  );
};

export default PhotoPreview;
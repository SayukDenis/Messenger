import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { footerstyles } from '../../Styles/FooterStyle';
import { useSelector } from 'react-redux';

interface AnimatedFolderIndicatorProps {
    selectedFolder:number;
    screenWidth: number;
    widths: any;
    positionsOfFolder: any;
    isVisibleForModalFolder: boolean;
  }
  
const FolderIndicator: React.FC<AnimatedFolderIndicatorProps> = ({
  
  widths,
  isVisibleForModalFolder,
  positionsOfFolder
}) => {
  const timeForLineAnimation=200;
  const animationTransformOfIndicator=useState(new Animated.Value(0))[0];
  const selectedFolder=useSelector((state:any)=>{
    
    return state.selectedFolder.selectedFolder})
  const AnimationTransformOfIndicator = Animated.timing(animationTransformOfIndicator, {
    toValue: positionsOfFolder.current[selectedFolder],
    duration: timeForLineAnimation,
    useNativeDriver: true,
  });
  useEffect(()=>{
    AnimationTransformOfIndicator.start();
  },[selectedFolder])
  useEffect(()=>{
    console.log(selectedFolder)
  })
  return (
    <Animated.View style={{transform: [{ translateX: animationTransformOfIndicator }]}}>
      {!isVisibleForModalFolder ? (
        <Animated.View
          style={[
            footerstyles.selectedFolder,
            {
              width: widths.current[selectedFolder] * 0.8,
              marginLeft: widths.current[selectedFolder] * 0.1,
            },
          ]}
        />
      ) : null}
    </Animated.View>
  );
};

export default FolderIndicator;

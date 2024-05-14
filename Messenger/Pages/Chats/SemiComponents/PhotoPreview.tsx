import React, { useState } from 'react';
import { ScrollView, Image, TouchableOpacity, Text, View, Animated } from 'react-native';
import { styles } from './Styles/PhotoPreview';
import { getCustomFontSize, height, width } from './ChatConstants';
import Constants from 'expo-constants';
import * as SVG from './SVG';

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
      console.log('height > 0', currentHeight);
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
      console.log('height == 0', currentHeight);
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
        <TouchableOpacity 
          activeOpacity={1}
          onPress={() => {}}
        >
          <SVG.DeleteButton 
            size={height * 0.03} 
            color={'white'} 
          />
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








// import React, { useState, useRef } from 'react';
// import { View, PanResponder, Image, ViewStyle, ImageSourcePropType } from 'react-native';
// import PropTypes from 'prop-types';
// import { screenWidth } from './ChatConstants';
// import { styles } from './Styles/PhotoPreview';

// function calcDistance(x1: number, y1: number, x2: number, y2: number) {
//   const dx = Math.abs(x1 - x2);
//   const dy = Math.abs(y1 - y2);
//   return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
// }

// function calcCenter(x1: number, y1: number, x2: number, y2: number) {
//   function middle(p1: number, p2: number) {
//     return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
//   }

//   return {
//     x: middle(x1, x2),
//     y: middle(y1, y2)
//   };
// }

// function maxOffset(offset: number, windowDimension: number, imageDimension: number) {
//   const max = windowDimension - imageDimension;
//   if (max >= 0) {
//     return 0;
//   }
//   return offset < max ? max : offset;
// }

// function calcOffsetByZoom(width: number, height: number, imageWidth: number, imageHeight: number, zoom: number) {
//   const xDiff = imageWidth * zoom - width;
//   const yDiff = imageHeight * zoom - height;
//   return {
//     left: -xDiff / 2,
//     top: -yDiff / 2
//   };
// }

// interface ZoomableImageProps {
//   imageWidth: number;
//   imageHeight: number;
//   source: string;
// }

// const PhotoPreview: React.FC<ZoomableImageProps> = ({ imageWidth, imageHeight, source }) => {
//   if(!source) return null;

//   const [zoom, setZoom] = useState<number | null>(null);
//   const [minZoom, setMinZoom] = useState<number | null>(null);
//   const [layoutKnown, setLayoutKnown] = useState(false);
//   const [isZooming, setIsZooming] = useState(false);
//   const [isMoving, setIsMoving] = useState(false);
//   const [initialDistance, setInitialDistance] = useState<number | null>(null);
//   const [initialX, setInitialX] = useState<number | null>(null);
//   const [initialY, setInitialY] = useState<number | null>(null);
//   const [offsetTop, setOffsetTop] = useState(0);
//   const [offsetLeft, setOffsetLeft] = useState(0);
//   const [initialTop, setInitialTop] = useState(0);
//   const [initialLeft, setInitialLeft] = useState(0);
//   const [initialTopWithoutZoom, setInitialTopWithoutZoom] = useState(0);
//   const [initialLeftWithoutZoom, setInitialLeftWithoutZoom] = useState(0);
//   const [initialZoom, setInitialZoom] = useState(1);
//   const [top, setTop] = useState(0);
//   const [left, setLeft] = useState(0);
//   const [width, setWidth] = useState(imageWidth);
//   const [height, setHeight] = useState(imageHeight);

//   const _panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onStartShouldSetPanResponderCapture: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,
//       onPanResponderGrant: () => {},
//       onPanResponderMove: evt => {
//         const touches = evt.nativeEvent.touches;
//         if (touches.length === 2) {
//           processPinch(
//             touches[0].pageX,
//             touches[0].pageY,
//             touches[1].pageX,
//             touches[1].pageY
//           );
//         } else if (touches.length === 1 && !isZooming) {
//           processTouch(touches[0].pageX, touches[0].pageY);
//         }
//       },

//       onPanResponderTerminationRequest: () => true,
//       onPanResponderRelease: () => {
//         setIsZooming(false);
//         setIsMoving(false);
//       },
//       onPanResponderTerminate: () => {},
//       onShouldBlockNativeResponder: () => true
//     })
//   );

//   const processPinch = (x1: number, y1: number, x2: number, y2: number) => {
//     const distance = calcDistance(x1, y1, x2, y2);
//     const center = calcCenter(x1, y1, x2, y2);

//     if (!isZooming) {
//       const offsetByZoom = calcOffsetByZoom(
//         width,
//         height,
//         imageWidth,
//         imageHeight,
//         zoom!
//       );
//       setIsZooming(true);
//       setInitialDistance(distance);
//       setInitialX(center.x);
//       setInitialY(center.y);
//       setInitialTop(top);
//       setInitialLeft(left);
//       setInitialZoom(zoom!);
//       setInitialTopWithoutZoom(top - offsetByZoom.top);
//       setInitialLeftWithoutZoom(left - offsetByZoom.left);
//     } else {
//       const touchZoom = distance / initialDistance!;
//       const newZoom =
//         touchZoom * initialZoom > minZoom!
//           ? touchZoom * initialZoom
//           : minZoom!;

//       const offsetByZoom = calcOffsetByZoom(
//         width,
//         height,
//         imageWidth,
//         imageHeight,
//         newZoom
//       );
//       const newLeft =
//         initialLeftWithoutZoom * touchZoom + offsetByZoom.left;
//       const newTop =
//         initialTopWithoutZoom * touchZoom + offsetByZoom.top;

//       setZoom(newZoom);
//       setLeft(
//         newLeft > 0
//           ? 0
//           : maxOffset(
//               newLeft,
//               width,
//               imageWidth * newZoom
//             )
//       );
//       setTop(
//         newTop > 0
//           ? 0
//           : maxOffset(
//               newTop,
//               height,
//               imageHeight * newZoom
//             )
//       );
//     }
//   };

//   const processTouch = (x: number, y: number) => {
//     if (!isMoving) {
//       setIsMoving(true);
//       setInitialX(x);
//       setInitialY(y);
//       setInitialTop(top);
//       setInitialLeft(left);
//     } else {
//       const newLeft = initialLeft + x - initialX!;
//       const newTop = initialTop + y - initialY!;

//       setLeft(
//         newLeft > 0
//           ? 0
//           : maxOffset(
//               newLeft,
//               width,
//               imageWidth * zoom!
//             )
//       );
//       setTop(
//         newTop > 0
//           ? 0
//           : maxOffset(
//               newTop,
//               height,
//               imageHeight * zoom!
//             )
//       );
//     }
//   };

//   const _onLayout = (event: any) => {
//     const layout = event.nativeEvent.layout;

//     if (
//       layout.width === width &&
//       layout.height === height
//     ) {
//       return;
//     }

//     const newZoom = layout.width / imageWidth;

//     const newOffsetTop =
//       layout.height > imageHeight * newZoom
//         ? (layout.height - imageHeight * newZoom) / 2
//         : 0;

//     setLayoutKnown(true);
//     setWidth(layout.width);
//     setHeight(layout.height);
//     setZoom(newZoom);
//     setOffsetTop(newOffsetTop);
//     setMinZoom(newZoom);
//   };

//   // const {
//   //   onStartShouldSetPanResponder,
//   //   onMoveShouldSetPanResponder,
//   //   onPanResponderGrant,
//   //   onPanResponderTerminationRequest,
//   //   onPanResponderTerminate,
//   //   onShouldBlockNativeResponder
//   // } = _panResponder.current.panHandlers;

//   return (
//     <View
//       style={styles.mainContainer}
//       // {...{ onStartShouldSetPanResponder, onMoveShouldSetPanResponder, onPanResponderGrant, onPanResponderTerminationRequest, onPanResponderTerminate, onShouldBlockNativeResponder }}
//       onLayout={_onLayout}
//     >
//       <Image
//         style={{
//           position: "absolute",
//           top: offsetTop + top,
//           left: offsetLeft + left,
//           width: imageWidth * zoom!,
//           height: imageHeight * zoom!
//         }}
//         source={{ uri: 'data:image/png;base64,' + source }}
//       />
//     </View>
//   );
// };

// PhotoPreview.propTypes = {
//   imageWidth: PropTypes.number.isRequired,
//   imageHeight: PropTypes.number.isRequired,
// };

// export default PhotoPreview;
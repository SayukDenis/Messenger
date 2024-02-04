import { PixelRatio, Dimensions, Platform } from "react-native";
import Constants from 'expo-constants';

export const { width, height } = Dimensions.get('screen');

export const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const softMenuBarHeight = (height - screenHeight - Constants.statusBarHeight);
export const SOFT_MENU_BAR_HEIGHT = softMenuBarHeight > 0 ? softMenuBarHeight : 0;

// while(true) {
//   console.log(Platform.OS, Platform.Version);
// }

export const FONT_SCALE = PixelRatio.getFontScale() ;
export const DEFAULT_FONT_SIZE = Math.round(14 / FONT_SCALE);

export const DEFAULT_CHARS_PER_LINE = Math.round(width / DEFAULT_FONT_SIZE);

export const getOwnCharsPerLine = (fontSize: number) => {
  return Math.round(width / (fontSize / FONT_SCALE));
}

export const MESSAGE_PADDING_HORIZONTAL = 10;
export const MESSAGE_PADDING_VERTICAL = 5;

export const MESSAGE_SWIPE_TO_REPLY_WIDTH = 50;

export const DISTANCE_BETWEEN_PRESS_IN_AND_OUT = 0.3;

export const SIZE_OF_SELECT_BUTTON = 20;

export const MESSAGE_BUTTON_HEIGHT = height*0.029;
const MESSAGE_TRIANGLE_SIZE = height*0.011;
export const MESSAGE_MENU_HEIGHT = MESSAGE_BUTTON_HEIGHT*7+MESSAGE_TRIANGLE_SIZE;

const test = async () => {
  await new Promise(resolve => setTimeout(() => {
    console.log(Platform.OS, Platform.Version, height - screenHeight);
  }, 5000));
} 

// A54 - 78.47619047619048
// J7 - 0
// iPhone - 0

test();
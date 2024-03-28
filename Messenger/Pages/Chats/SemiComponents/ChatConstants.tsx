import { PixelRatio, Dimensions } from "react-native";
import Constants from 'expo-constants';

export const { width, height } = Dimensions.get('screen');

export const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const softMenuBarHeight = (height - screenHeight - Constants.statusBarHeight);
export const SOFT_MENU_BAR_HEIGHT = softMenuBarHeight > 0 ? softMenuBarHeight : 0;

export let FONT_SCALE_COEF = 1;
export const setCustomFontScaleCoef = (coef: number) => FONT_SCALE_COEF = coef;
export const FONT_SCALE = PixelRatio.getFontScale();
// font scale 1: 0.800000011920929
// font scale 2: 0.8999999761581421
// font scale 3: 1
// font scale 4: 1.100000023841858
// font scale 5: 1.2999999523162842
// font scale 6: 1.5
// font scale 7: 1.7000000476837158
// font scale 8: 2
export const DEFAULT_FONT_SIZE = Math.round(14 / FONT_SCALE);
export const getCustomFontSize = (size: number) => Math.round(size / FONT_SCALE);

export const DEFAULT_CHARS_PER_LINE = Math.round(width / 14);

export const getOwnCharsPerLine = (fontSize: number) => {
  return Math.round(width / (fontSize / FONT_SCALE));
}

export const MESSAGE_PADDING_HORIZONTAL = 10;
export const MESSAGE_PADDING_VERTICAL = 5;
export const NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE = 5;

export const MESSAGE_SWIPE_TO_REPLY_WIDTH = 50;

export const DISTANCE_BETWEEN_PRESS_IN_AND_OUT = 0.3;

export const SIZE_OF_SELECT_BUTTON = 20;

export const MESSAGE_BUTTON_HEIGHT = height*0.0325;
export const MESSAGE_TRIANGLE_SIZE = height*0.006;
export const GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR = height*0.005;
export const MESSAGE_MENU_HEIGHT = (MESSAGE_BUTTON_HEIGHT * 7 + MESSAGE_TRIANGLE_SIZE) + GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR;

export const FLATLIST_HEIGHT = height*0.762;

export const FOOTER_HEIGHT = height * 0.08;
export const FOOTER_INNER_CONTAINER_GAP = height * 0.02;
export const FOOTER_INNER_TEXTINPUT_GAP = height * 0.04;
console.log(
  FOOTER_HEIGHT, 
  FOOTER_INNER_CONTAINER_GAP, 
  FOOTER_INNER_TEXTINPUT_GAP,
  FOOTER_HEIGHT - FOOTER_INNER_CONTAINER_GAP,
  FOOTER_HEIGHT - FOOTER_INNER_TEXTINPUT_GAP,
);
export const MAX_FOOTER_HEIGHT = height * 0.16;

export let KEYBOARD_HEIGHT = 0;
export const setKeyboardHeight = (height: number) => KEYBOARD_HEIGHT = height;
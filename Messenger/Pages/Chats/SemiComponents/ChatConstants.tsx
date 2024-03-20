import { PixelRatio, Dimensions } from "react-native";
import Constants from 'expo-constants';

export const { width, height } = Dimensions.get('screen');

export const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const softMenuBarHeight = (height - screenHeight - Constants.statusBarHeight);
export const SOFT_MENU_BAR_HEIGHT = softMenuBarHeight > 0 ? softMenuBarHeight : 0;

export let FONT_SCALE_COEF = 1;
export const setCustomFontScaleCoef = (coef: number) => FONT_SCALE_COEF = coef;
export const FONT_SCALE = PixelRatio.getFontScale();
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

export const MESSAGE_BUTTON_HEIGHT = height*0.029;
export const MESSAGE_TRIANGLE_SIZE = height*0.01;
export const MESSAGE_BUTTON_SCALE = FONT_SCALE * 0.9;
export const MESSAGE_MENU_HEIGHT = (MESSAGE_BUTTON_HEIGHT * 7 * MESSAGE_BUTTON_SCALE + MESSAGE_TRIANGLE_SIZE);

export const FLATLIST_HEIGHT = height*0.762;

export const FOOTER_HEIGHT = height * 0.08;
export const FOOTER_INNER_CONTAINER_GAP = height * 0.02;
export const FOOTER_INNER_TEXTINPUT_GAP = height * 0.04;
export const MAX_FOOTER_HEIGHT = height * 0.16;

export let KEYBOARD_HEIGHT = 0;
export const setKeyboardHeight = (height: number) => KEYBOARD_HEIGHT = height;
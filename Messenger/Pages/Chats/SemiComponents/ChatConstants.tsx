import { PixelRatio, Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const DEFAULT_FONT_SIZE = 14 * PixelRatio.getFontScale();

export const DEFAULT_CHARS_PER_LINE = Math.round(width / DEFAULT_FONT_SIZE);

export const getOwnCharsPerLine = (fontSize: number) => {
  return Math.round(width / (fontSize * PixelRatio.getFontScale()));
}

export const MESSAGE_PADDING_HORIZONTAL = 10;
export const MESSAGE_PADDING_VERTICAL = 5;

export const MESSAGE_SWIPE_TO_REPLY_WIDTH = 50;

export const DISTANCE_BETWEEN_PRESS_IN_AND_OUT = 0.3;

export const SIZE_OF_SELECT_BUTTON = 20;
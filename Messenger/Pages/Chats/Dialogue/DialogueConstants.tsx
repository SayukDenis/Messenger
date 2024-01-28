import { PixelRatio, Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const FONT_SIZE = 14 * PixelRatio.getFontScale();

export const CHARS_PER_LINE = Math.round(width*1 / FONT_SIZE);
import { PixelRatio, Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const DEFAULT_FONT_SIZE = 14 * PixelRatio.getFontScale();

export const DEFAULT_CHARS_PER_LINE = Math.round(width / DEFAULT_FONT_SIZE);

export const getOwnCharsPerLine = (fontSize: number) => {
    return Math.round(width / fontSize);
}
import { PixelRatio, Dimensions } from "react-native";
import Constants from 'expo-constants';

export class ChatConstants {
  readonly width = Dimensions.get('screen').width;
  readonly height = Dimensions.get('screen').height;
  
  readonly screenWidth = Dimensions.get('window').width;
  readonly screenHeight = Dimensions.get('window').height;

  readonly MESSAGE_PADDING_HORIZONTAL = 10;
  readonly MESSAGE_PADDING_VERTICAL = 5;
  readonly NOT_USER_GAP_BETWEEN_MENU_AND_MESSAGE = 5;
  readonly MESSAGE_SWIPE_TO_REPLY_WIDTH = 50;
  readonly DISTANCE_BETWEEN_PRESS_IN_AND_OUT = 0.3;
  readonly SIZE_OF_SELECT_BUTTON = 20;
  readonly MESSAGE_BUTTON_HEIGHT = this.height*0.0325;
  readonly MESSAGE_TRIANGLE_SIZE = this.height*0.006;
  readonly GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR = this.height*0.005;
  readonly MESSAGE_MENU_HEIGHT = (this.MESSAGE_BUTTON_HEIGHT * 7 + this.MESSAGE_TRIANGLE_SIZE) + this.GAP_BETWEEN_MESSAGE_MENU_AND_SOFT_MENU_BAR;
  readonly FLATLIST_HEIGHT = this.height*0.762;
  readonly FOOTER_HEIGHT = this.height * 0.08;
  readonly FOOTER_INNER_CONTAINER_GAP = this.height * 0.02;
  readonly FOOTER_INNER_TEXTINPUT_GAP = this.height * 0.04;
  readonly MAX_FOOTER_HEIGHT = this.height * 0.16;

  readonly softMenuBarHeight = this.height - this.screenHeight - Constants.statusBarHeight;
  readonly SOFT_MENU_BAR_HEIGHT = this.softMenuBarHeight > 0 ? this.softMenuBarHeight : 0;

  FONT_SCALE_COEF = 1;
  public setCustomFontScaleCoef = (coef: number) : void => { this.FONT_SCALE_COEF = coef };
  readonly FONT_SCALE = PixelRatio.getFontScale();

  readonly DEFAULT_FONT_SIZE = Math.round(14 / this.FONT_SCALE);
  public getCustomFontSize = (size: number) : number => Math.round(size / this.FONT_SCALE);

  readonly DEFAULT_CHARS_PER_LINE = Math.round(this.width / 14);

  public getOwnCharsPerLine = (fontSize: number) : number => {
    return Math.round(this.width / (fontSize / this.FONT_SCALE));
  }

  KEYBOARD_HEIGHT = 0;
  public getKeyboardHeight = () : number => this.KEYBOARD_HEIGHT;
  public setKeyboardHeight = (height: number) : void => { this.KEYBOARD_HEIGHT = height; }
  

  private static _instance : ChatConstants;
       
  public static getInstance() : ChatConstants
  {
    if (this._instance == null)
    {
      this._instance = new ChatConstants();
    }
    return this._instance;
  }
}
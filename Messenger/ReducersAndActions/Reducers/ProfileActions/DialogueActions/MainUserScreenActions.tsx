// Oleksii Kovalenko telegram - @traewe

import { combineReducers } from "redux";
import { user } from "../../../../Pages/Profiles/SemiComponents/DBUser";

const initialState = {
  pressedMultimediaButton: "Photos",
  isElseFeaturesVisible: false,
  isPhotoAlbumSelectionVisible: false,
  isClearChatButtonPressed: false,
  isMuted: user.isMuted,
  isBlocked: user.isBlocked,
  longPressedAlbum: null,
  positionYOfLongPressedAlbum: 0,
  removalText: "",
};

const removalAppovalTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMOVAL_APPROVAL_TEXT":
      return {
        ...state,
        removalAppovalTextReducer: action.payload,
      };
    default:
      return state;
  }
};

const multimediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRESSED_MULTIMEDIA_BUTTON":
      return {
        ...state,
        pressedMultimediaButton: action.payload,
      };
    default:
      return state;
  }
};

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_ELSE_FEATURES_VISIBLE":
      return {
        ...state,
        isElseFeaturesVisible: action.payload,
      };
    case "SET_IS_PHOTO_ALBUM_SELECTION_VISIBLE":
      return {
        ...state,
        isPhotoAlbumSelectionVisible: action.payload,
      };
    case "SET_IS_CLEAR_CHAT_BUTTON_PRESSED":
      return {
        ...state,
        isClearChatButtonPressed: action.payload,
      };
    default:
      return state;
  }
};

const userStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_MUTED":
      return {
        ...state,
        isMuted: action.payload,
      };
    case "SET_IS_BLOCKED":
      return {
        ...state,
        isBlocked: action.payload,
      };
    default:
      return state;
  }
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LONG_PRESSED_ALBUM":
      return {
        ...state,
        longPressedAlbum: action.payload,
      };
    case "SET_POSITION_Y_OF_LONG_PRESSED_ALBUM":
      return {
        ...state,
        positionYOfLongPressedAlbum: action.payload,
      };
    case "SET_IS_ALBUM_SELECTION_VISIBLE":
      return {
        ...state,
        isAlbumSelectionVisible: action.payload,
      };
    case "SET_SELECTED_ALBUMS":
      return {
        ...state,
        selectedAlbums: action.payload,
      };
    default:
      return state;
  }
};

const MainUserScreenReducer = combineReducers({
  removalAppovalText: removalAppovalTextReducer,
  multimedia: multimediaReducer,
  visibility: visibilityReducer,
  userStatus: userStatusReducer,
  album: albumReducer,
});

export default MainUserScreenReducer;

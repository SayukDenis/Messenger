import { combineReducers } from "redux";

const initialBioState = { bioTextHeight: 0 };
const bioReducer = (state = initialBioState, action) => {
  switch (action.type) {
    case "SET_BIO_TEXT_HEIGHT":
      return {
        ...state,
        bioTextHeight: action.payload,
      };
    default:
      return state;
  }
};

const initialAvatarState = { currentAvatar: 0 };
const avatarReducer = (state = initialAvatarState, action) => {
  switch (action.type) {
    case "SET_CURRENT_AVATAR":
      return {
        ...state,
        currentAvatar: action.payload,
      };
    default:
      return state;
  }
};

const initialCopyState = {
  isAnyTextCopied: false,
  phoneUsernameOrBioCopied: false,
};
const copyReducer = (state = initialCopyState, action) => {
  switch (action.type) {
    case "SET_IS_ANY_TEXT_COPIED":
      return {
        ...state,
        isAnyTextCopied: action.payload,
      };
    case "SET_PHONE_USERNAME_OR_BIO_COPIED":
      return {
        ...state,
        phoneUsernameOrBioCopied: action.payload,
      };
    default:
      return state;
  }
};

const initialNumberState = { isNumberPressed: 0 };
const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "SET_IS_NUMBER_PRESSED":
      return {
        ...state,
        isNumberPressed: action.payload,
      };
    default:
      return state;
  }
};

const initialAnimationState = { isAnimationRunning: false };
const animationReducer = (state = initialAnimationState, action) => {
  switch (action.type) {
    case "SET_IS_ANIMATION_RUNNING":
      return {
        ...state,
        isAnimationRunning: action.payload,
      };
    default:
      return state;
  }
};

const initialBranchState = { branchName: "" };
const branchReducer = (state = initialBranchState, action) => {
  switch (action.type) {
    case "SET_BRANCH_NAME":
      return {
        ...state,
        branchName: action.payload,
      };
    default:
      return state;
  }
};

const initialMultimediaState = {
  pressedMultimediaButton: "Photos",
  isPhotoAlbumSelectionVisible: false,
  longPressedAlbum: null,
  positionYOfLongPressedAlbum: 0,
  isDeleteAlbumPressed: false,
  isAlbumSelectionVisible: false,
  selectedAlbums: [],
  isDeleteAllAlbumsPressed: false,
  isDeleteSelectedAlbumsPressed: false,
};

const multimediaReducer = combineReducers({
  pressedMultimediaButton: (
    state = initialMultimediaState.pressedMultimediaButton,
    action
  ) => {
    switch (action.type) {
      case "SET_PRESSED_MULTIMEDIA_BUTTON":
        return action.payload;
      default:
        return state;
    }
  },
  isPhotoAlbumSelectionVisible: (
    state = initialMultimediaState.isPhotoAlbumSelectionVisible,
    action
  ) => {
    switch (action.type) {
      case "SET_IS_PHOTO_ALBUM_SELECTION_VISIBLE":
        return action.payload;
      default:
        return state;
    }
  },
  longPressedAlbum: (
    state = initialMultimediaState.longPressedAlbum,
    action
  ) => {
    switch (action.type) {
      case "SET_LONG_PRESSED_ALBUM":
        return action.payload;
      default:
        return state;
    }
  },
  positionYOfLongPressedAlbum: (
    state = initialMultimediaState.positionYOfLongPressedAlbum,
    action
  ) => {
    switch (action.type) {
      case "SET_POSITION_Y_OF_LONG_PRESSED_ALBUM":
        return action.payload;
      default:
        return state;
    }
  },
  isDeleteAlbumPressed: (
    state = initialMultimediaState.isDeleteAlbumPressed,
    action
  ) => {
    switch (action.type) {
      case "SET_IS_DELETE_ALBUM_PRESSED":
        return action.payload;
      default:
        return state;
    }
  },
  isAlbumSelectionVisible: (
    state = initialMultimediaState.isAlbumSelectionVisible,
    action
  ) => {
    switch (action.type) {
      case "SET_IS_ALBUM_SELECTION_VISIBLE":
        return action.payload;
      default:
        return state;
    }
  },
  selectedAlbums: (state = initialMultimediaState.selectedAlbums, action) => {
    switch (action.type) {
      case "SET_SELECTED_ALBUMS":
        return action.payload;
      default:
        return state;
    }
  },
  isDeleteAllAlbumsPressed: (
    state = initialMultimediaState.isDeleteAllAlbumsPressed,
    action
  ) => {
    switch (action.type) {
      case "SET_IS_DELETE_ALL_ALBUMS_PRESSED":
        return action.payload;
      default:
        return state;
    }
  },
  isDeleteSelectedAlbumsPressed: (
    state = initialMultimediaState.isDeleteSelectedAlbumsPressed,
    action
  ) => {
    switch (action.type) {
      case "SET_IS_DELETE_SELECTED_ALBUMS_PRESSED":
        return action.payload;
      default:
        return state;
    }
  },
});

const AvatarsAndInfoScreenReducer = combineReducers({
  bio: bioReducer,
  avatar: avatarReducer,
  copy: copyReducer,
  number: numberReducer,
  animation: animationReducer,
  branch: branchReducer,
  multimedia: multimediaReducer,
});

export default AvatarsAndInfoScreenReducer;

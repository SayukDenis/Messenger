// Oleksii Kovalenko telegram - @traewe

import { combineReducers } from "redux";
import { PhotoOrVideo } from "../../../../Pages/Profiles/SemiComponents/DatabaseSimulation/DBUser";

const selectedPhotosAndVideosReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_PHOTOS_AND_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};

const pressedMultimediaButtonReducer = (state = "Photos", action) => {
  switch (action.type) {
    case "SET_PRESSED_MULTIMEDIA_BUTTON":
      return action.payload;
    default:
      return state;
  }
};

const isElseFeaturesVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_ELSE_FEATURES_VISIBLE":
      return action.payload;
    default:
      return state;
  }
};

const removalApprovalTextReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_REMOVAL_APPROVAL_TEXT":
      return action.payload;
    default:
      return state;
  }
};

const isAddNewPhotoPressedReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_ADD_NEW_PHOTO_PRESSED":
      return action.payload;
    default:
      return state;
  }
};

const pressedPhotoReducer = (state = new PhotoOrVideo(""), action) => {
  switch (action.type) {
    case "SET_PRESSED_PHOTO":
      return action.payload;
    default:
      return state;
  }
};

const isPhotoSelectionVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_PHOTO_SELECTION_VISIBLE":
      return action.payload;
    default:
      return state;
  }
};

const AlbumReducer = combineReducers({
  selectedPhotosAndVideos: selectedPhotosAndVideosReducer,
  pressedMultimediaButton: pressedMultimediaButtonReducer,
  isElseFeaturesVisible: isElseFeaturesVisibleReducer,
  isAddNewPhotoPressed: isAddNewPhotoPressedReducer,
  pressedPhoto: pressedPhotoReducer,
  isPhotoSelectionVisible: isPhotoSelectionVisibleReducer,
  removalApprovalText: removalApprovalTextReducer,
});

export default AlbumReducer;

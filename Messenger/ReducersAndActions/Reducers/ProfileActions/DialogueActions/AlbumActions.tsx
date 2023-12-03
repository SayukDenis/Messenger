// Oleksii Kovalenko telegram - @traewe

import { combineReducers } from "redux";
import { PhotoOrVideo } from "../../../../Pages/Profiles/SemiComponents/DBUser";

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

const isDeleteAlbumPressedReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_DELETE_ALBUM_PRESSED":
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

const isDeleteAllPhotosPressedReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_DELETE_ALL_PHOTOS_PRESSED":
      return action.payload;
    default:
      return state;
  }
};

const isDeleteSelectedPhotosPressedReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_IS_DELETE_SELECTED_PHOTOS_PRESSED":
      return action.payload;
    default:
      return state;
  }
};

const AlbumReducer = combineReducers({
  selectedPhotosAndVideos: selectedPhotosAndVideosReducer,
  pressedMultimediaButton: pressedMultimediaButtonReducer,
  isElseFeaturesVisible: isElseFeaturesVisibleReducer,
  isDeleteAlbumPressed: isDeleteAlbumPressedReducer,
  isAddNewPhotoPressed: isAddNewPhotoPressedReducer,
  pressedPhoto: pressedPhotoReducer,
  isPhotoSelectionVisible: isPhotoSelectionVisibleReducer,
  isDeleteAllPhotosPressed: isDeleteAllPhotosPressedReducer,
  isDeleteSelectedPhotosPressed: isDeleteSelectedPhotosPressedReducer,
});

export default AlbumReducer;

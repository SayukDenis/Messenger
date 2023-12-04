// Oleksii Kovalenko telegram - @traewe

import { PhotoOrVideo } from "../../../../Pages/Profiles/SemiComponents/DBUser";

export const setSelectedPhotosAndVideos = (value: Array<PhotoOrVideo>) => ({
  type: "SET_SELECTED_PHOTOS_AND_VIDEOS",
  payload: value,
});

export const setPressedMultimediaButton = (value: string) => ({
  type: "SET_PRESSED_MULTIMEDIA_BUTTON",
  payload: value,
});

export const setIsElseFeaturesVisible = (value: boolean) => ({
  type: "SET_IS_ELSE_FEATURES_VISIBLE",
  payload: value,
});

export const setIsDeleteAlbumPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_ALBUM_PRESSED",
  payload: value,
});

export const setIsAddNewPhotoPressed = (value: boolean) => ({
  type: "SET_IS_ADD_NEW_PHOTO_PRESSED",
  payload: value,
});

export const setPressedPhoto = (photo: PhotoOrVideo) => ({
  type: "SET_PRESSED_PHOTO",
  payload: photo,
});

export const setIsPhotoSelectionVisible = (value: boolean) => ({
  type: "SET_IS_PHOTO_SELECTION_VISIBLE",
  payload: value,
});

export const setIsDeleteAllPhotosPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_ALL_PHOTOS_PRESSED",
  payload: value,
});

export const setIsDeleteSelectedPhotosPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_SELECTED_PHOTOS_PRESSED",
  payload: value,
});

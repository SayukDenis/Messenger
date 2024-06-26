// Oleksii Kovalenko telegram - @traewe

import { PhotoOrVideo } from "../../../../Pages/Profiles/SemiComponents/DatabaseSimulation/DBUser";

export const setSelectedPhotosAndVideos = (value: Array<PhotoOrVideo>) => ({
  type: "SET_SELECTED_PHOTOS_AND_VIDEOS",
  payload: value,
});

export const setPressedMultimediaButton = (value: string) => ({
  type: "SET_PRESSED_MULTIMEDIA_BUTTON",
  payload: value,
});

export const setRemovalApprovalText = (value: string) => ({
  type: "SET_REMOVAL_APPROVAL_TEXT",
  payload: value,
});

export const setIsElseFeaturesVisible = (value: boolean) => ({
  type: "SET_IS_ELSE_FEATURES_VISIBLE",
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

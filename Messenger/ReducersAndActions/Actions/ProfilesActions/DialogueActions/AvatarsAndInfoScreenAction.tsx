// Oleksii Kovalenko telegram - @traewe

import { Album } from "../../../../Pages/Profiles/SemiComponents/DatabaseSimulation/DBUser";

export const setBioTextHeight = (name: number) => ({
  type: "SET_BIO_TEXT_HEIGHT",
  payload: name,
});

export const setCurrentAvatar = (name: number) => ({
  type: "SET_CURRENT_AVATAR",
  payload: name,
});

export const setIsAnyTextCopied = (name: number) => ({
  type: "SET_IS_ANY_TEXT_COPIED",
  payload: name,
});

export const setPhoneUsernameOrBioCopied = (name: number) => ({
  type: "SET_PHONE_USERNAME_OR_BIO_COPIED",
  payload: name,
});

export const setIsNumberPressed = (name: number) => ({
  type: "SET_IS_NUMBER_PRESSED",
  payload: name,
});

export const setIsAnimationRunning = (name: boolean) => ({
  type: "SET_IS_ANIMATION_RUNNING",
  payload: name,
});

export const setBranchName = (name: string) => ({
  type: "SET_BRANCH_NAME",
  payload: name,
});

export const setPressedMultimediaButton = (value: string) => ({
  type: "SET_PRESSED_MULTIMEDIA_BUTTON",
  payload: value,
});

export const setIsPhotoAlbumSelectionVisible = (value: boolean) => ({
  type: "SET_IS_PHOTO_ALBUM_SELECTION_VISIBLE",
  payload: value,
});

export const setLongPressedAlbum = (album: Album) => ({
  type: "SET_LONG_PRESSED_ALBUM",
  payload: album,
});

export const setPositionYOfLongPressedAlbum = (positionY: number) => ({
  type: "SET_POSITION_Y_OF_LONG_PRESSED_ALBUM",
  payload: positionY,
});

export const setRemovalApprovalText = (value: string) => ({
  type: "SET_REMOVAL_APPROVAL_TEXT",
  payload: value,
});

export const setIsAlbumSelectionVisible = (value: boolean) => ({
  type: "SET_IS_ALBUM_SELECTION_VISIBLE",
  payload: value,
});

export const setSelectedAlbums = (albums: Array<Album>) => ({
  type: "SET_SELECTED_ALBUMS",
  payload: albums,
});

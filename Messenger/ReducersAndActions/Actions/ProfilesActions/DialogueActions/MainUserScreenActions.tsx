// Oleksii Kovalenko telegram - @traewe

import { Album } from "../../../../Pages/Profiles/SemiComponents/DBUser";

export const setPressedMultimediaButton = (value: string) => ({
  type: "SET_PRESSED_MULTIMEDIA_BUTTON",
  payload: value,
});

export const setIsElseFeaturesVisible = (value: boolean) => ({
  type: "SET_IS_ELSE_FEATURES_VISIBLE",
  payload: value,
});

export const setIsPhotoAlbumSelectionVisible = (value: boolean) => ({
  type: "SET_IS_PHOTO_ALBUM_SELECTION_VISIBLE",
  payload: value,
});

export const setIsClearChatButtonPressed = (value: boolean) => ({
  type: "SET_IS_CLEAR_CHAT_BUTTON_PRESSED",
  payload: value,
});

export const setIsMuted = (value: boolean) => ({
  type: "SET_IS_MUTED",
  payload: value,
});

export const setIsBlocked = (value: boolean) => ({
  type: "SET_IS_BLOCKED",
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

export const setIsDeleteAlbumPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_ALBUM_PRESSED",
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

export const setIsDeleteAllAlbumsPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_ALL_ALBUMS_PRESSED",
  payload: value,
});

export const setIsDeleteSelectedAlbumsPressed = (value: boolean) => ({
  type: "SET_IS_DELETE_SELECTED_ALBUMS_PRESSED",
  payload: value,
});

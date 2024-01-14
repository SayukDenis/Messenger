// Oleksii Kovalenko telegram - @traewe

import { PhotoOrVideo } from "../../../../Pages/Profiles/SemiComponents/DatabaseSimulation/DBUser";

export const setNewAlbumName = (value: string) => ({
  type: "SET_NEW_ALBUM_NAME",
  payload: value,
});

export const setSelectedPhotosAndVideos = (value: Array<PhotoOrVideo>) => ({
  type: "SET_SELECTED_PHOTOS_AND_VIDEOS",
  payload: value,
});

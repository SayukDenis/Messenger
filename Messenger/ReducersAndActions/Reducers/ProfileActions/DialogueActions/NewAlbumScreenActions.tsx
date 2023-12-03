// Oleksii Kovalenko telegram - @traewe

const initialState = {
  newAlbumName: "",
  selectedPhotosAndVideos: [],
};

const NewAlbumScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_ALBUM_NAME":
      return {
        ...state,
        newAlbumName: action.payload,
      };
    case "SET_SELECTED_PHOTOS_AND_VIDEOS":
      return {
        ...state,
        selectedPhotosAndVideos: action.payload,
      };
    default:
      return state;
  }
};

export default NewAlbumScreenReducer;

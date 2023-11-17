
export const setAnimationState = (state) => ({
    type: "SET_ANIMATION_STATE",
    state,
  });
export const setSelectedFolderForChatList=(selectedFolder)=>({
  type:"SET_SELECTED_FOLDER_FOR_CHATLIST_STATE",
  selectedFolder
})
export const setCurrentPositionForChatList=(currentPosition)=>({
  type:"SET_CURRENT_POSITION_FOR_CHATLIST_STATE",
  currentPosition
})


export const setFolderSelectedArray = (folderSelectedArray) => ({
  type: "SET_FOLDER_SELECTED_ARRAY",
  folderSelectedArray,
});

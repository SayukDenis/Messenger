// actions.js
export const setAnimationState = (state) => ({
    type: "SET_ANIMATION_STATE",
    state,
  });
export const setSelectedFolderForChatList=(selectedFolder)=>({
  type:"SET_SELECTED_FOLDER_FOR_CHATLIST_STATE",
  selectedFolder
})
  
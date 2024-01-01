
export const setAnimationStateForFolderChatList = (animationForChatListFolder) => ({
    type: "SET_ANIMATION_STATE_FOR_FOLDER_CHATLIST",
    animationForChatListFolder,
  });
export const setSelectedFolderForChatList=(selectedFolder)=>({
  type:"SET_SELECTED_FOLDER_FOR_CHATLIST_STATE",
  selectedFolder
})
export const setCurrentPositionForChatList=(currentPosition)=>({
  type:"SET_CURRENT_POSITION_FOR_CHATLIST_STATE",
  currentPosition
})

export const setBooleanForTouchOnHamburgerInHeaderChatList = (isTouchable) => ({
  type: "SET_BOOLEAN_FOR_TOUCH_ON_HABMURGER_IN_HEADER_IN_CHATLIST",
  isTouchable,
});

export const setFolderSelectedArray = (folderSelectedArray) => ({
  type: "SET_FOLDER_SELECTED_ARRAY",
  folderSelectedArray,
});
export const setEnumForChatListBlurs=(enumForChatListBlurs)=>({
  type:"SET_ENUM_FOR_CHATLIST_BLURS",
  enumForChatListBlurs
})
export const setCurrentTab=(currentTab)=>({
  type:"SET_CURRENT_TAB",
  currentTab
})
export const setStateForEndOfBlurForChatList=(stateForEndOfBlurForChatList)=>({
  type:"SET_STATE_FOR_END_OF_BLUR_FOR_CHAT_LIST",
  stateForEndOfBlurForChatList
})


export const setLayoutOfModeOfEmployment=(layoutOfModeOfEmployment)=>({
  type:"SET_LAYOUT_OF_MODE_OF_EMPLOYMENT",
  layoutOfModeOfEmployment
})
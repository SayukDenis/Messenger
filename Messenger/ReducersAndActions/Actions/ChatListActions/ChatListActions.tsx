import { EnumForChatListBlurs } from "../../../Pages/ChatList/Components/Enums/EnumsForChatListBlurs";
import User from "../../../dao/Models/User";

export const setAnimationStateForFolderChatList = (animationForChatListFolder:any) => ({
    type: "SET_ANIMATION_STATE_FOR_FOLDER_CHATLIST",
    animationForChatListFolder,
  });
export const setSelectedFolderForChatList=(selectedFolder:number)=>({
  type:"SET_SELECTED_FOLDER_FOR_CHATLIST_STATE",
  selectedFolder
})
export const setCurrentPositionForChatList=(currentPosition:number)=>({
  type:"SET_CURRENT_POSITION_FOR_CHATLIST_STATE",
  currentPosition
})

export const setBooleanForTouchOnHamburgerInHeaderChatList = (isTouchable:boolean) => ({
  type: "SET_BOOLEAN_FOR_TOUCH_ON_HABMURGER_IN_HEADER_IN_CHATLIST",
  isTouchable,
});

export const setFolderSelectedArray = (folderSelectedArray:any) => ({
  type: "SET_FOLDER_SELECTED_ARRAY",
  folderSelectedArray,
});
export const setEnumForChatListBlurs=(enumForChatListBlurs:EnumForChatListBlurs)=>({
  type:"SET_ENUM_FOR_CHATLIST_BLURS",
  enumForChatListBlurs
})
export const setCurrentTab=(currentTab:number)=>({
  type:"SET_CURRENT_TAB",
  currentTab
})
export const setStateForEndOfBlurForChatList=(stateForEndOfBlurForChatList:any)=>({
  type:"SET_STATE_FOR_END_OF_BLUR_FOR_CHAT_LIST",
  stateForEndOfBlurForChatList
})


export const setLayoutOfModeOfEmployment=(layoutOfModeOfEmployment:any)=>({
  type:"SET_LAYOUT_OF_MODE_OF_EMPLOYMENT",
  layoutOfModeOfEmployment
})
export const SET_TITLE_FOR_CREATE_GROUP_OR_CHANNEL = "SET_TITLE_FOR_CREATE_GROUP_OR_CHANNEL";
export const SET_BIO_FOR_CREATE_GROUP_OR_CHANNEL = "SET_BIO_FOR_CREATE_GROUP_OR_CHANNEL";
export const SET_LINK_TO_PHOTO_FOR_CREATE_GROUP_OR_CHANNEL = "SET_LINK_TO_PHOTO_FOR_CREATE_GROUP_OR_CHANNEL";
export const SET_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL = "ADD_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL";

export const setTitleForCreateGroupOrChannel = (title: string) => ({
  type: SET_TITLE_FOR_CREATE_GROUP_OR_CHANNEL as typeof SET_TITLE_FOR_CREATE_GROUP_OR_CHANNEL,
  payload: title,
});

export const setBioForCreateGroupOrChannel = (bio: string) => ({
  type: SET_BIO_FOR_CREATE_GROUP_OR_CHANNEL as typeof SET_BIO_FOR_CREATE_GROUP_OR_CHANNEL,
  payload: bio,
});

export const setLinkToPhotoForCreateGroupOrChannel = (linkToPhoto: string) => ({
  type: SET_LINK_TO_PHOTO_FOR_CREATE_GROUP_OR_CHANNEL as typeof SET_LINK_TO_PHOTO_FOR_CREATE_GROUP_OR_CHANNEL,
  payload: linkToPhoto,
});

export const addUserForCreateGroupOrChannel = (user: User) => ({
  type: SET_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL as typeof SET_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL,
  payload: user,
});



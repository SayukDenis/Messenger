import { combineReducers } from "redux";
import { selfProfileUser } from "../../UserReducersAndActions/Reducers/UserReducers";
import { EnumForChatListBlurs } from "../../../Pages/ChatList/Components/Enums/EnumsForChatListBlurs";
import { SET_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL } from "../../Actions/ChatListActions/ChatListActions";

const currentTab: number = 0;
const animationForChatListFolderReducer = (
  state = { animationForChatListFolder: false },
  action: any
) => {
  switch (action.type) {
    case "SET_ANIMATION_STATE_FOR_FOLDER_CHATLIST":
      return {
        ...state,
        animationForChatListFolder: action.animationForChatListFolder,
      };
    default:
      return state;
  }
};

const selectedFolderReducer = (state = { selectedFolder: 0 }, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_FOLDER_FOR_CHATLIST_STATE":
      return {
        ...state,
        selectedFolder: action.selectedFolder,
      };
    default:
      return state;
  }
};

const stateForEndOfBlurForChatListReducer = (
  state = { stateForEndOfBlurForChatList: false },
  action: any
) => {
  switch (action.type) {
    case "SET_STATE_FOR_END_OF_BLUR_FOR_CHAT_LIST":
      return {
        ...state,
        stateForEndOfBlurForChatList: action.stateForEndOfBlurForChatList,
      };
    default:
      return state;
  }
};
const booleanForTouchOnHamburgerInHeaderChatListReducer = (
  state = { isTouchable: false },
  action: any
) => {
  switch (action.type) {
    case "SET_BOOLEAN_FOR_TOUCH_ON_HABMURGER_IN_HEADER_IN_CHATLIST":
      return {
        ...state,
        isTouchable: action.isTouchable,
      };
    default:
      return state;
  }
};
const currentPositionReducer = (
  state = { currentPosition: 0 },
  action: any
) => {
  switch (action.type) {
    case "SET_CURRENT_POSITION_FOR_CHATLIST_STATE":
      return {
        ...state,
        currentPosition: action.currentPosition,
      };
    default:
      return state;
  }
};

// Reducer for FolderSelectedArray
const folderSelectedArrayReducer = (
  state = {
    folderSelectedArray: selfProfileUser.tabs[currentTab].folders.map(
      (_, index) => index === 0
    ),
  },
  action: any
) => {
  switch (action.type) {
    case "SET_FOLDER_SELECTED_ARRAY":
      return {
        ...state,
        folderSelectedArray: action.folderSelectedArray,
      };
    default:
      return state;
  }
};
const enumForChatListBlursReducer = (
  state = { enumForChatListBlurs: EnumForChatListBlurs.None },
  action: any
) => {
  switch (action.type) {
    case "SET_ENUM_FOR_CHATLIST_BLURS":
      return {
        ...state,
        enumForChatListBlurs: action.enumForChatListBlurs,
      };
    default:
      return state;
  }
};
const currentTabReducer = (state = { currentTab: 0 }, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_TAB":
      return {
        ...state,
        currentTab: action.currentTab,
      };
    default:
      return state;
  }
};
const layoutOfModeOfEmploymentReducer = (
  state = { layoutOfModeOfEmployment: { x: 0, y: 0, height: 0, width: 0 } },
  action: any
) => {
  switch (action.type) {
    case "SET_LAYOUT_OF_MODE_OF_EMPLOYMENT":
      return {
        ...state,
        layoutOfModeOfEmployment: action.layoutOfModeOfEmployment,
      };
    default:
      return state;
  }
};
const createGroupOrChannelReducer = (
  state = { selectedUsers: [] },
  action: any
) => {
  switch (action.type) {
    case SET_USERS_ARRAY_FOR_CREATE_GROUP_OR_CHANNEL:
      return { ...state, selectedUsers: action.selectedUsers };
    default:
      return state;
  }
};
const setPhotoForCreateGroupOrChannelReducer = (
  state = { photoForCreateGroupOrChannel: "" },
  action: any
) => {
  switch (action.type) {
    case "SET_PHOTO_FOR_CREATE_GROUP_OR_CHANNEL":
      return {
        ...state,
        photoForCreateGroupOrChannel: action.photoForCreateGroupOrChannel,
      };
    default:
      return state;
  }
};
const isVisibleGalleryModalWindowReducer = (
  state = { isVisibleGalleryModalWindow: false },
  action: any
) => {
  switch (action.type) {
    case "SET_IS_VISIBLE_GALLERY_MODAL_WINDOW":
      return {
        ...state,
        isVisibleGalleryModalWindow: action.isVisibleGalleryModalWindow,
      };
    default:
      return state;
  }
};

const rootReducerChatList = combineReducers({
  animationForChatListFolder: animationForChatListFolderReducer,
  selectedFolder: selectedFolderReducer,
  currentPosition: currentPositionReducer,
  folderSelectedArray: folderSelectedArrayReducer,
  booleanForHamburgerTouchable:
    booleanForTouchOnHamburgerInHeaderChatListReducer,
  currentTab: currentTabReducer,
  enumForChatListBlurs: enumForChatListBlursReducer,
  layoutOfModeOfEmployment: layoutOfModeOfEmploymentReducer,
  stateForEndOfBlurForChatList: stateForEndOfBlurForChatListReducer,
  createGroupOrChannel: createGroupOrChannelReducer,
  setPhotoForCreateGroupOrChannel: setPhotoForCreateGroupOrChannelReducer,
  isVisibleGalleryModalWindow:isVisibleGalleryModalWindowReducer
});

export default rootReducerChatList;

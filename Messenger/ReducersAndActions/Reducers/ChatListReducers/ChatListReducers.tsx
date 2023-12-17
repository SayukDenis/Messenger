import { combineReducers } from 'redux';
import SelfProfile from '../../../dao/Models/SelfProfile';
import { useSelector } from 'react-redux';
import { selfProfileUser } from '../../UserReducersAndActions/Reducers/UserReducers';
import { setBooleanForTouchOnHamburgerInHeaderChatList } from '../../Actions/ChatListActions/ChatListActions';
const currentTab:number=0;
// Reducer for animation state
const animationReducer = (state = { animationState: false }, action) => {
  switch (action.type) {
    case "SET_ANIMATION_STATE":
      return {
        ...state,
        animationState: action.state,
      };
    default:
      return state;
  }
};

// Reducer for selected folder state
const selectedFolderReducer = (state = { selectedFolder: 0 }, action) => {
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
const booleanForTouchOnHamburgerInHeaderChatListReducer= (state = {isTouchable:false}, action) => {
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
const currentPositionReducer = (state = { currentPosition: 0 }, action) => {
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
  state = { folderSelectedArray: selfProfileUser.tabs[currentTab].folders.map((_, index) => index === 0) },
  action
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


const rootReducerChatList = combineReducers({
  animation: animationReducer,
  selectedFolder: selectedFolderReducer,
  currentPosition: currentPositionReducer,
  folderSelectedArray: folderSelectedArrayReducer,
  booleanForHamburgerTouchable:booleanForTouchOnHamburgerInHeaderChatListReducer,

  // Add other reducers here if needed
});

export default rootReducerChatList;

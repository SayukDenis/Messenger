import { combineReducers } from 'redux';
import { mySelfUser } from '../../../Pages/ChatList/1HelpFullFolder/Initialization';

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
  state = { folderSelectedArray: mySelfUser.folders.map((_, index) => index === 0) },
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
  // Add other reducers here if needed
});

export default rootReducerChatList;

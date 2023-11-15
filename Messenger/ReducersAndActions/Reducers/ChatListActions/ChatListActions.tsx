import { combineReducers } from 'redux';

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

// Combine reducers
const rootReducer = combineReducers({
  animation: animationReducer,
  selectedFolder: selectedFolderReducer,
  // Add other reducers here if needed
});

export default rootReducer;

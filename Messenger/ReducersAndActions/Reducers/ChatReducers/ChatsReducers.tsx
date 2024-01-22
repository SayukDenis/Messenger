import { combineReducers } from "redux";

const initialState = {
  counterOfSelectedMessages: 0,
};

const counterOfSelectedMessagesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counterOfSelectedMessages: state.counterOfSelectedMessages + 1 };
    case 'DECREMENT':
      return { ...state, counterOfSelectedMessages: state.counterOfSelectedMessages - 1 };
    case 'RESET':
      return { ...state, counterOfSelectedMessages: 0 }
    default:
      return state;
  }
};

const ChatReducer = combineReducers({
  counterForSelectedMessages: counterOfSelectedMessagesReducer
});

export default ChatReducer;
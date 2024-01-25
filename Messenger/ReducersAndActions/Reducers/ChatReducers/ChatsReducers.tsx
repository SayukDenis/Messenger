import { combineReducers } from "redux";

const counterOfSelectedMessagesInitialState = {
  counterOfSelectedMessages: 0,
};

const counterOfSelectedMessagesReducer = (state = counterOfSelectedMessagesInitialState, action:any) => {
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

const scrollToPinnedMessageInitialState = {
  scroll: false,
  id: 0
}
const scrollToPinnedMessageReducer = (state = scrollToPinnedMessageInitialState, action:any) => {
  switch(action.type) {
    case 'SCROLL':
      return { ...state, scroll: action.scroll, id: action.id };
    default:
      return state;
  }
}

const animationOfBackgroundForScrolledMessagesInitialState = {
  id: -1,
}
const activateAnimationOfBackgroundForScrolledMessageReducer = (state = animationOfBackgroundForScrolledMessagesInitialState, action:any) => {
  switch(action.type) {
    case 'SET_ANIMATION_OF_BACKGROUND_FOR_SCROOLED_MESSAGE':
      return { ...state, id: action.id }
    default:
      return state;
  }
}

const ChatReducer = combineReducers({
  counterForSelectedMessages: counterOfSelectedMessagesReducer,
  scrollToPinnedMessage: scrollToPinnedMessageReducer,
  activateAnimationOfBackgroundForScrolledMessage: activateAnimationOfBackgroundForScrolledMessageReducer
});

export default ChatReducer;
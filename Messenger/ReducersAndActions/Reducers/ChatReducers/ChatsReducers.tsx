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
  id: -1
}
const scrollToPinnedMessageReducer = (state = scrollToPinnedMessageInitialState, action:any) => {
  switch(action.type) {
    case 'SCROLL_TO_PINNED_MESSAGE':
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

const scrollStateTappedMessageInitialState = {
  scroll: false,
  id: -1
}
const scrollStateTappedMessageReducer = (state = scrollStateTappedMessageInitialState, action:any) => {
  switch(action.type) {
    case 'SCROLL_TO_TAPPED_MESSAGE':
      return { ...state, scroll: action.scroll, id: action.id };
    default:
      return state;
  }
}

const selectedMessageHandlerInitialState = {
  listOfId: []
}
const selectedMessageHandlerReducer = (state = selectedMessageHandlerInitialState, action:any) => {
  switch(action.type) {
    case 'ADD_SELECTED_MESSAGE':
      const newListOfId1 = [...state.listOfId, action.id];
      return { ...state, listOfId: [...newListOfId1] };
    case 'REMOVE_SELECTED_MESSAGE':
      const newListOfId2 = state.listOfId.filter(id => id !== action.id);
      return { ...state, listOfId: [...newListOfId2] };
    case 'RESET_SELECTED_MESSAGE':
      return { ...state, listOfId: [] };
    default:
      return state;
  }
}

const ChatReducer = combineReducers({
  counterForSelectedMessages: counterOfSelectedMessagesReducer,
  scrollToPinnedMessage: scrollToPinnedMessageReducer,
  activateAnimationOfBackgroundForScrolledMessage: activateAnimationOfBackgroundForScrolledMessageReducer,
  scrollToTappedMessage: scrollStateTappedMessageReducer,
  selectedMessageHandler: selectedMessageHandlerReducer
});

export default ChatReducer;
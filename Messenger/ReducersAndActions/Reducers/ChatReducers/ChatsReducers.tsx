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

export interface coordinationsOfMessage {
  id: number;
  coords: number;
  height: number;
}
const setCoordinationsOfMessage = {
  messagesWithCoords: [] as coordinationsOfMessage[]
}
const setCoordinationsOfMessageReducer = (state = setCoordinationsOfMessage, action:any) => {
  switch(action.type) {
    case 'ADD_COORDINATIONS_OF_MESSAGE':
      return { ...state, messagesWithCoords: [...state.messagesWithCoords, { 
        id: action.id, 
        coords: action.height + (state.messagesWithCoords.length > 0 ? state.messagesWithCoords[state.messagesWithCoords.length - 1].coords : 0),
        height: action.height
      }] };
    case 'UPDATE_COORDINATIONS_OF_MESSAGE':
      if(state.messagesWithCoords[action.id].height === action.height) return state;

      console.log('messagesWithCoords', state.messagesWithCoords);
      const updatedMessagesWithCoords = state.messagesWithCoords;
      const updateIdx = updatedMessagesWithCoords.findIndex(m => m.id === action.id);

      updatedMessagesWithCoords[updateIdx].coords -= updatedMessagesWithCoords[updateIdx].height;
      updatedMessagesWithCoords[updateIdx].height = action.height;
      
      for(let i = updateIdx + 1; i < updatedMessagesWithCoords.length; i++) {
        if(!updatedMessagesWithCoords[i - 1])
          console.log(updatedMessagesWithCoords[i - 1], i, updatedMessagesWithCoords.length, updatedMessagesWithCoords);
        updatedMessagesWithCoords[i].coords = updatedMessagesWithCoords[i].height + updatedMessagesWithCoords[i - 1].coords;
      }
      console.log('updatedMessagesWithCoords', updatedMessagesWithCoords);
      return { ...state, messagesWithCoords: [...updatedMessagesWithCoords] };
    case 'REMOVE_COORDINATIONS_OF_MESSAGE':
      return { ...state, messagesWithCoords: state.messagesWithCoords.filter(m => m.id !== action.id) };
    case 'REMOVE_COORDINATIONS_OF_SELECTED_MESSAGES':
      const newMessagesWithCoords = state.messagesWithCoords;
      let idx = 0;
      for(let i = 0; i < state.messagesWithCoords.length; i++) {
        if(newMessagesWithCoords[i].id === action.listOfId[idx]) {
          newMessagesWithCoords[i].height = 0;
          idx++;
        }
        if(i > 0)
          newMessagesWithCoords[i].coords = newMessagesWithCoords[i].height + newMessagesWithCoords[i - 1].coords;
        else
          newMessagesWithCoords[i].coords = 0;
      }
      return { ...state, messagesWithCoords: [...newMessagesWithCoords] };
    case 'REMOVE_COORDINATIONS_OF_ALL_MESSAGES':
      return { ...state, messagesWithCoords: [] };
    default:
      return state;
  }
}

const ChatReducer = combineReducers({
  counterForSelectedMessages: counterOfSelectedMessagesReducer,
  scrollToPinnedMessage: scrollToPinnedMessageReducer,
  activateAnimationOfBackgroundForScrolledMessage: activateAnimationOfBackgroundForScrolledMessageReducer,
  scrollToTappedMessage: scrollStateTappedMessageReducer,
  selectedMessageHandler: selectedMessageHandlerReducer,
  setCoordinationsOfMessage: setCoordinationsOfMessageReducer,
});

export default ChatReducer;
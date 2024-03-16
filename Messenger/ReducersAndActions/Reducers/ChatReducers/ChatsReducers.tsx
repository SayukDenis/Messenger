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

export interface CoordinationsOfMessage {
  id: number;
  coords: number;
  height: number;
}
const setCoordinationsOfMessage = {
  messagesWithCoords: [] as CoordinationsOfMessage[]
}
const setCoordinationsOfMessageReducer = (state = setCoordinationsOfMessage, action:any) => {
  switch(action.type) {
    case 'ADD_COORDINATIONS_OF_MESSAGE':
      const addToMessagesWithCoords = state.messagesWithCoords;

      if(addToMessagesWithCoords.length > 0 && action.id < addToMessagesWithCoords[addToMessagesWithCoords.length - 1].id) {
        addToMessagesWithCoords.unshift({
          id: action.id, 
          coords: 0,
          height: action.height
        });
      } else {
        addToMessagesWithCoords.push({
          id: action.id, 
          coords: 0,
          height: action.height
        });
      }

      for(let i = addToMessagesWithCoords.length - 2; i >= 0; i--) {
        addToMessagesWithCoords[i].coords = addToMessagesWithCoords[i + 1].height + addToMessagesWithCoords[i + 1].coords;
      }

      return { ...state, messagesWithCoords: [...addToMessagesWithCoords] };
    case 'UPDATE_COORDINATIONS_OF_MESSAGE':
      const updatedMessagesWithCoords = state.messagesWithCoords;

      updatedMessagesWithCoords[action.id].height = action.height;

      for(let i = action.id - 1; i >= 0; i--) {
        updatedMessagesWithCoords[i].coords = updatedMessagesWithCoords[i + 1].height + updatedMessagesWithCoords[i + 1].coords;
      }

      return { ...state, messagesWithCoords: [...updatedMessagesWithCoords] };
    case 'REMOVE_COORDINATIONS_OF_MESSAGE':
      const removeFromMessagesWithCoords = state.messagesWithCoords;
      const n1 = removeFromMessagesWithCoords.length;

      if(removeFromMessagesWithCoords[n1 - 1].id === action.id) {
        removeFromMessagesWithCoords[n1 - 1].height = 0;
      }

      for(let i = n1 - 2; i >= 0; i--) {
        if(removeFromMessagesWithCoords[i].id === action.id) {
          removeFromMessagesWithCoords[i].height = 0;
        }
        removeFromMessagesWithCoords[i].coords = removeFromMessagesWithCoords[i + 1].height + removeFromMessagesWithCoords[i + 1].coords;
      }

      return { ...state, messagesWithCoords: [...removeFromMessagesWithCoords] };
    case 'REMOVE_COORDINATIONS_OF_SELECTED_MESSAGES':
      const newMessagesWithCoords = state.messagesWithCoords;
      let idx = 0;
      const n2 = newMessagesWithCoords.length;

      if(newMessagesWithCoords[n2 - 1].id === action.listOfId[idx]) {
        newMessagesWithCoords[n2 - 1].height = 0;
        idx++;
      }

      for(let i = newMessagesWithCoords.length - 2; i >= 0; i--) {
        if(newMessagesWithCoords[i].id === action.listOfId[idx]) {
          newMessagesWithCoords[i].height = 0;
          idx++;
        }
        newMessagesWithCoords[i].coords = newMessagesWithCoords[i + 1].height + newMessagesWithCoords[i + 1].coords;
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
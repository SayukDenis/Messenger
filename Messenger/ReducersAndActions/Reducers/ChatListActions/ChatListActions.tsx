import { connect } from "react-redux";
import ChatContainer from "../../../Pages/ChatList/Components/List of folders containers/ChatContainer";

// reducers.js
const initialState = {
  animationState: false,
};

export const rootReducer = (state = initialState, action) => {
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


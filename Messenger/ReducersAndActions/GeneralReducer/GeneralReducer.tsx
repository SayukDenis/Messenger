import { combineReducers } from "redux";
import rootReducerChatList from "../Reducers/ChatListReducers/ChatListReducers";

const rootReducer=combineReducers(
    {
        chatListReducer:rootReducerChatList,
    }
)
export default rootReducer;
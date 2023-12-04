import { combineReducers } from "redux";
import rootReducerChatList from "../Reducers/ChatListReducers/ChatListReducers";
import ChatReducer from "../Reducers/ChatsActions/ChatsActions";
import DialogueReducer from "../Reducers/ProfileActions/DialogueActions/DialogueActions";
import SelfProfileReducer from "../Reducers/SelfProfileReducer/SelfProfileReducer";

const rootReducer=combineReducers(
    {
        chatListReducer:rootReducerChatList,
        ChatReducer:ChatReducer,
        DialogueReducer:DialogueReducer,
        SelfProfileReducer:SelfProfileReducer,
    }
)
export default rootReducer;
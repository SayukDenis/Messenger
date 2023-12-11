import { combineReducers } from "redux";
import rootReducerChatList from "../Reducers/ChatListReducers/ChatListReducers";
import ChatReducer from "../Reducers/ChatReducers/ChatsReducers";
import DialogueReducer from "../Reducers/ProfileActions/DialogueActions/DialogueActions";
import SelfProfileReducer from "../Reducers/SelfProfileReducer/SelfProfileReducer";
import ListOfSettingsReducer from "../Reducers/SettingsReducers/SettingsReducers";
import userReducer from "../UserReducersAndActions/Reducers/UserReducers";

const rootReducer=combineReducers(
    {
        chatListReducer:rootReducerChatList,
        //ChatReducer:ChatReducer,
        //DialogueReducer:DialogueReducer,
        SettingsPagesReducers:ListOfSettingsReducer,
       // SelfProfileReducer:SelfProfileReducer,
        selfProfileUser:userReducer
    }
)
export default rootReducer;
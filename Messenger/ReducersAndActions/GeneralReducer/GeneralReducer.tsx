import { combineReducers } from "redux";
import rootReducerChatList from "../Reducers/ChatListReducers/ChatListReducers";
import ChatReducer from "../Reducers/ChatsActions/ChatsActions";
import DialogueReducer from "../Reducers/ProfileActions/DialogueActions/DialogueActions";
import SelfProfileReducer from "../Reducers/SelfProfileReducer/SelfProfileReducer";
import ListOfSettingsReducer from "../Reducers/SettingsReducers/SettingsReducers";

const rootReducer=combineReducers(
    {
        chatListReducer:rootReducerChatList,
        //ChatReducer:ChatReducer,
        //DialogueReducer:DialogueReducer,
        SettingsPagesReducers:ListOfSettingsReducer,
       // SelfProfileReducer:SelfProfileReducer,
    }
)
export default rootReducer;
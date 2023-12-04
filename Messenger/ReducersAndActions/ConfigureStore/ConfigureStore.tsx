import { createStore } from "redux";
import rootReducer from "../GeneralReducer/GeneralReducer";
const store = createStore(rootReducer);
export default store
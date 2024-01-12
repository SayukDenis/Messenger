// Oleksii Kovalenko telegram - @traewe

import { combineReducers } from "redux";
import AlbumReducer from "./AlbumActions";
import AvatarsAndInfoScreenReducer from "./AvatarsAndInfoScreenActions";
import BranchesScreenReducer from "./BranchesScreenActions";
import MainUserScreenReducer from "./MainUserScreenActions";
import NewAlbumScreenReducer from "./NewAlbumScreenActions";
import PermissionScreenReducer from "./PermissionScreenActions";

const DialogueReducer = combineReducers({
  album: AlbumReducer,
  avatarsAndInfoScreen: AvatarsAndInfoScreenReducer,
  branchesScreen: BranchesScreenReducer,
  mainUserScreen: MainUserScreenReducer,
  newAlbumScreen: NewAlbumScreenReducer,
  permissionScreen: PermissionScreenReducer,
});

export default DialogueReducer;

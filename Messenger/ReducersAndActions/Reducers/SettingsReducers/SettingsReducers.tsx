import { combineReducers } from 'redux';

const inisialStateNewfolder ={
    listOfNewFolder:["All chats"],
}
const inisialStaterecomendedfolder ={
  recomdendedFolders:[],
}

const TextInput ={
  TextInput:""
}
const NewFolderName= (state = TextInput, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        TextInput:action.payload,
      };
    default:
      return state;
  }
};

const AddNewFoldertReducer = (state = inisialStateNewfolder, action) => {
    switch (action.type) {
      case  'ADD_NEW_FOLDER':
        console.log(JSON.stringify(action)+ " nameFolder")
        console.log(state)
        return {
          ...state,
          listOfNewFolder: [...state.listOfNewFolder, action.addNewFolder],
        };
      default:
        return state;
    }
};
const AddRecomendedFoldertReducer = (state = inisialStaterecomendedfolder, action) => {
  switch (action.type) {
    case 'ADD_RECOMENDED_FOLDER':
      return {
        ...state,
        recomdendedFolders: [...state.recomdendedFolders, action.payload],
      };
    default:
      return state;
  }
};

const ListOfSettingsReducer = combineReducers({
    AddNewFolder:AddNewFoldertReducer,
    SaveInputText:NewFolderName,
});

export default ListOfSettingsReducer;
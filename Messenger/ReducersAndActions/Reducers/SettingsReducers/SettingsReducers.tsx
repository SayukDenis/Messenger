import { combineReducers } from 'redux';

const inisialStateNewfolder ={
    listOfNewFolder:[],
}
const inisialStaterecomendedfolder ={
  recomdendedFolders:["Personal chats", "Channels", "Groups"],
  numberOfRecommendedFolders: 3,
}

const TextInput ={
  TextInput:""
}
const NewFolderName= (state = TextInput, action:any) => {
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

const AddNewFoldertReducer = (state = inisialStateNewfolder, action:any) => {
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
const AddRecomendedFoldertReducer = (state = inisialStaterecomendedfolder, action:any) => {
  switch (action.type) {
    case 'REMOVE_RECOMENDED_FOLDER':
      console.log("remove")
      console.log(JSON.stringify(action) + JSON.stringify(action.payload) + "   12")
      const folderToRemove = action.payload;
      const updatedFolders = state.recomdendedFolders.filter(folder => folder !== folderToRemove);
      console.log(updatedFolders)
      return {
        ...state,
        recomdendedFolders: updatedFolders,
        numberOfRecommendedFolders: state.numberOfRecommendedFolders - 1
      };
    default:
      return state;
  }
};

const ListOfSettingsReducer = combineReducers({
    AddNewFolder:AddNewFoldertReducer,
    SaveInputText:NewFolderName,
    AddRecomendedFoldert:AddRecomendedFoldertReducer,
});

export default ListOfSettingsReducer;
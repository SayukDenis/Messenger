export const addNewFolder = (addNewFolder:any) => ({
    type: 'ADD_NEW_FOLDER',
    addNewFolder,
});

export const removeRecomendedFolder = (removeRecomendedFodler:any) => ({
    type: 'REMOVE_RECOMENDED_FOLDER',
    payload: removeRecomendedFodler,
});

export const setInputText = (TextInput:any) => ({
    type: 'SET_TEXT',
    payload: TextInput,
});
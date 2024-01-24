export const addNewFolder = (addNewFolder:any) => ({
    type: 'ADD_NEW_FOLDER',
    addNewFolder,
});

export const addRecomendedFolder = (addRecomendedFodler:any) => ({
    type: 'ADD_RECOMENDED_FOLDER',
    addRecomendedFodler,
});

export const setInputText = (TextInput:any) => ({
    type: 'SET_TEXT',
    payload: TextInput,
});
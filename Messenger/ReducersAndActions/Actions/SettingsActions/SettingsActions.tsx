export const addNewFolder = (addNewFolder) => ({
    type: 'ADD_NEW_FOLDER',
    addNewFolder,
});

export const addRecomendedFolder = (addRecomendedFodler) => ({
    type: 'ADD_RECOMENDED_FOLDER',
    addRecomendedFodler,
});

export const setInputText = (TextInput) => ({
    type: 'SET_TEXT',
    payload: TextInput,
});
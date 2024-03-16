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

export const IsVisibleTextInput = () => ({
    type: 'SET_VISIBLE_TEXTINPUT',
});

export const SetFalseStateForIsVisible = (startState:any) => ({
    type: 'SET_START_STATE',
    payload:startState
});

export const AddNotifiExeptionsForPrivateChats =(userName:any)=>({
    type:"ADD_NEW_EXPTIONS_FOR_PRIVATECHATS_NOTIFI",
    payload: userName,
})
export const RemoveAllNotificationForPrivatesChats =()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_PRIVATESCATS_NOTIFI",
})

export const RemoveUserAfterAdd =(userToRemove:any)=>({
    type:"REMOVE_USER_AFTER_ADD",
    payload: userToRemove,
})

export const AddNotifiExeptionsForGroupsChats = (groupName:any)=>({
    type:"ADD_NEW_EXPTIONS_FOR_GROUPCHATS_NOTIFI",
    payload:groupName,
})

export const RemoveAllNotificationForGroupsChats = ()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_GROUPCHAT_NOTIFI"
})

export const RemoveGroupAfterAdd =(groupToRemove:any)=>({
    type:"REMOVE_GROUP_AFTER_ADD",
    payload: groupToRemove,
})

export const AddNotifiExeptionsForChannels =(channelName:any)=>({
    type:"ADD_NEW_EXPTIONS_FOR_CHANNELS_NOTIFI",
    payload:channelName,
})

export const RemoveAllNotificationForChannels = ()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_CHANNEL_NOTIFI"
})

export const RemoveChannelAfterAdd = (channelName:any)=>({
    type:"REMOVE_CHANNEL_AFTER_ADD",
    payload:channelName
})

export const IsVisibleUserInfo = () => ({
    type: 'SET_VISIBLE_USERINFO',
});

export const SetFalseStateForUserInfo = (VisibleForUserInfo:any) => ({
    type: 'SET_START_STATE_FOR_USERINFO',
    payload:VisibleForUserInfo
});
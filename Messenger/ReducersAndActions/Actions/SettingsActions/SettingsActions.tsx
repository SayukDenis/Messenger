export const addNewFolder = (addNewFolder:any) => ({
    type: 'ADD_NEW_FOLDER',
    addNewFolder,
});

export const removeRecomendedFolder = (removeRecomendedFodler:any) => ({
    type: 'REMOVE_RECOMENDED_FOLDER',
    payload: removeRecomendedFodler,
});

export const setInputText = (TextInput:string) => ({
    type: 'SET_TEXT',
    payload: TextInput,
});

export const IsVisibleTextInput = () => ({
    type: 'SET_VISIBLE_TEXTINPUT',
});

export const SetFalseStateForIsVisible = (startState:boolean) => ({
    type: 'SET_START_STATE',
    payload:startState
});

export const AddNotifiExeptionsForPrivateChats =(userProfile:string , linkPhoto: string)=>({
    type:"ADD_NEW_EXPTIONS_FOR_PRIVATECHATS_NOTIFI",
    payload: {name : userProfile, linkOfPhoto:linkPhoto},
})
export const RemoveAllNotificationForPrivatesChats =()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_PRIVATESCATS_NOTIFI",
})

export const RemoveUserAfterAdd =(userToRemove:string)=>({
    type:"REMOVE_USER_AFTER_ADD",
    payload: userToRemove,
})

export const AddNotifiExeptionsForGroupsChats = (groupName:string,linkPhoto: string)=>({
    type:"ADD_NEW_EXPTIONS_FOR_GROUPCHATS_NOTIFI",
    payload:{name:groupName, linkOfPhoto:linkPhoto},
})

export const RemoveAllNotificationForGroupsChats = ()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_GROUPCHAT_NOTIFI"
})

export const RemoveGroupAfterAdd =(groupToRemove:string)=>({
    type:"REMOVE_GROUP_AFTER_ADD",
    payload: groupToRemove,
})

export const AddNotifiExeptionsForChannels =(channelName:string,linkPhoto: string)=>({
    type:"ADD_NEW_EXPTIONS_FOR_CHANNELS_NOTIFI",
    payload:{name:channelName,linkOfPhoto:linkPhoto},
})

export const RemoveAllNotificationForChannels = ()=>({
    type:"REMOVE_ALL_EXEPTIONS_FOR_CHANNEL_NOTIFI"
})

export const RemoveChannelAfterAdd = (channelName:string)=>({
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

export const SetVisibleForRadioButtons = ()=> ({
    type:'SET_VISIVLE_FOR_RADIO_BUTTONS',
});

export const UnblockBlockedUser = ()=>({
    type:'UNBLOCK_BLOKED_USER'
})

export const AddBlockedUserIdToList = (userId : number) => ({
    type : 'ADD_BLOCKUSER_ID',
    payload : userId,
})

export const RemoveBlockedUserIdToList = (userId : number) => ({
    type : 'DELETE_BLOCKUSER_ID',
    payload : userId,
})

export const RemoveFolderFromList = (folderName: string) => ({
    type:'REMOVE_FOLDER_FROM_CHAT_FOLDER',
    payload: folderName,  
})

export const AddRecomendedFolderBackToList =(recommendedFolderName: string) =>({
    type : 'ADD_RECOMMENDED_FOLDER_BACK_TO_LIST',
    payload : recommendedFolderName,
})

export const DeleteNotificationExceptionForChat =(chatToRemove:string)=>({
    type:'DELETE_NOTIFIVATION_EXCEPTION_FOR_CHATS',
    payload:chatToRemove,
})
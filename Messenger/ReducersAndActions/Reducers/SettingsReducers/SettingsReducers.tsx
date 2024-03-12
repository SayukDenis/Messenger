import { State } from 'react-native-gesture-handler';
import { combineReducers } from 'redux'; 

const inisialStateNewfolder ={
    listOfNewFolder:[],
}
const inisialStaterecomendedfolder ={
  recomdendedFolders:["Channels", "Groups", "News", "Personal chats"],
  numberOfRecommendedFolders: 4,
}

const TextInput ={
  TextInput:""
}

const VisibleOfRadioButtons ={
  VisibleOfRadioButtons:false,
  BlockedUsersList :[{id:0, userName : "Денис"},{id:1, userName : "Кирило"},{id:2, userName : "Роман"},{id:3, userName : "Максим"},
  {id:4, userName : "Зеновій"},{id:5, userName : "Василь"}],
  UnblockUsersId : [],
  counter:0
}

const SetVisibleTextInput ={
  Visible:false,
  VisibleForUserInfo:false,
}

const inisialStateExeptionForNotificationPrivateChats ={
  listOfExptionsForPrivateChats:[],
  contacts :  [
    "Андрій", "Богдан", "Василь", "Григорій", "Дмитро",
    "Євген", "Зеновій", "Ігор", "Кирило", "Леонід",
    "Максим", "Назар", "Олександр", "Петро", "Роман",
    "Сергій", "Тарас", "Устим", "Федір", "Христина"],
  listOfExptionsForGroups:[],
  groups : [
    'The Beatles','Queen','Led Zeppelin','Pink Floyd','The Rolling Stones','U2','Nirvana','Metallica','AC/DC',
    'Radiohead','The Eagles','Fleetwood Mac','Guns N\' Roses','The Who','Coldplay','Pearl Jam','Red Hot Chili Peppers',
    'Linkin Park','The Doors','Oasis',
  ],
  listOfExptionsForChannels:[],
   channelNames : [
    'Discovery Channel','National Geographic','CNN','BBC News','ESPN',
    'HBO','MTV','Cartoon Network','History Channel','Disney Channel',
    'Food Network','Netflix','VH1','Animal Planet','TLC','CNBC','Comedy Central',
    'Travel Channel','Science Channel','HGTV',
  ] 
}



const RadioButtonsReducer = (state = VisibleOfRadioButtons, action:any) => {
  switch (action.type) {
    case 'SET_VISIVLE_FOR_RADIO_BUTTONS':
      console.log(state.VisibleOfRadioButtons)
      return {
        ...state,
        VisibleOfRadioButtons:!state.VisibleOfRadioButtons,
      };
    case 'UNBLOCK_BLOKED_USER':
      for(let i =0; i<state.UnblockUsersId.length;i++){
        for(let j =0; j<state.BlockedUsersList.length;j++){
          if(state.UnblockUsersId[i]==state.BlockedUsersList[j].id){
            state.BlockedUsersList.splice(j,1);
          }
        }
      }
      return {
        ...state,
        BlockedUsersList: state.BlockedUsersList,
        UnblockUsersId: [],
        counter: state.counter+1,
      };
    case 'ADD_BLOCKUSER_ID':
      console.log(JSON.stringify(state.UnblockUsersId))
      return {
         ...state,
         UnblockUsersId: [...state.UnblockUsersId,action.payload],
      };
    case 'DELETE_BLOCKUSER_ID':
      const idBlockedUser = action.payload;
      const updatedListOfId = state.UnblockUsersId.filter(id => id !== idBlockedUser);
      console.log(updatedListOfId)
      return {
          ...state,
          UnblockUsersId: updatedListOfId,
      };               
    default:
      return state;
  }
};


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
          listOfNewFolder: [...state.listOfNewFolder, {nameOfFolder:action.addNewFolder, listOFchats:[],listOFexeptionsChats:[]}],
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

const SetVisibleTextInputForComp= (state = SetVisibleTextInput, action:any) => {
  switch (action.type) {
    case 'SET_VISIBLE_TEXTINPUT':
      return {
        ...state,
        Visible:!state.Visible,
      };
      case 'SET_START_STATE':
      return {
        ...state,
        Visible:action.payload,
      };
      case 'SET_VISIBLE_USERINFO':
        console.log("change for user info")
      return {
        ...state,
        VisibleForUserInfo:!state.VisibleForUserInfo,
      };
      case 'SET_START_STATE_FOR_USERINFO':
      return {
        ...state,
        VisibleForUserInfo:action.payload,
      };
    default:
      return state;
  }
};
const AddExeptionsNotification = (state = inisialStateExeptionForNotificationPrivateChats, action:any) => {
  switch (action.type) {
    case  'ADD_NEW_EXPTIONS_FOR_PRIVATECHATS_NOTIFI':
      return {
        ...state,
        listOfExptionsForPrivateChats: [...state.listOfExptionsForPrivateChats, action.payload],
      };
    case  'REMOVE_ALL_EXEPTIONS_FOR_PRIVATESCATS_NOTIFI':
      return {
          ...state,
          listOfExptionsForPrivateChats: [],
          contacts :  [
            "Андрій", "Богдан", "Василь", "Григорій", "Дмитро",
            "Євген", "Зеновій", "Ігор", "Кирило", "Леонід",
            "Максим", "Назар", "Олександр", "Петро", "Роман",
            "Сергій", "Тарас", "Устим", "Федір", "Христина"],
      };
    case  'REMOVE_USER_AFTER_ADD':
      const userToRemove = action.payload;
      const updatedList = state.contacts.filter(userprofile => userprofile !== userToRemove);
      return {
          ...state,
          contacts: updatedList,
      };
    case  'ADD_NEW_EXPTIONS_FOR_GROUPCHATS_NOTIFI':
      return {
        ...state,
        listOfExptionsForGroups: [...state.listOfExptionsForGroups, action.payload],
      };
    case  'REMOVE_ALL_EXEPTIONS_FOR_GROUPCHAT_NOTIFI':
      return {
          ...state,
          listOfExptionsForGroups: [],
          groups : [
            'The Beatles','Queen','Led Zeppelin','Pink Floyd','The Rolling Stones','U2','Nirvana','Metallica','AC/DC',
            'Radiohead','The Eagles','Fleetwood Mac','Guns N\' Roses','The Who','Coldplay','Pearl Jam','Red Hot Chili Peppers',
            'Linkin Park','The Doors','Oasis',
          ] 
      };
    case  'REMOVE_GROUP_AFTER_ADD':
      const groupToRemove = action.payload;
      const updatedGroupList = state.groups.filter(groupProfile => groupProfile !== groupToRemove);
      return {
          ...state,
          groups: updatedGroupList,
      };
    case  'ADD_NEW_EXPTIONS_FOR_CHANNELS_NOTIFI':
        return {
          ...state,
          listOfExptionsForChannels: [...state.listOfExptionsForChannels, action.payload],
        };
    case  'REMOVE_ALL_EXEPTIONS_FOR_CHANNEL_NOTIFI':
      return {
          ...state,
          listOfExptionsForChannels: [],
          channelNames : [
            'Discovery Channel','National Geographic','CNN','BBC News','ESPN',
            'HBO','MTV','Cartoon Network','History Channel','Disney Channel',
            'Food Network','Netflix','VH1','Animal Planet','TLC','CNBC','Comedy Central',
            'Travel Channel','Science Channel','HGTV',
          ] 
      };
      case  'REMOVE_CHANNEL_AFTER_ADD':
        const channelToRemove = action.payload;
        const updatedChannelList = state.groups.filter(channelProfile => channelProfile !== channelToRemove);
        return {
            ...state,
            channelNames: updatedChannelList,
        };       
    default:
      return state;
  }
};

const ListOfSettingsReducer = combineReducers({
    AddNewFolder:AddNewFoldertReducer,
    SaveInputText:NewFolderName,
    AddRecomendedFoldert:AddRecomendedFoldertReducer,
    SetVisibleTextInput:SetVisibleTextInputForComp,
    AddNotifiExeptions:AddExeptionsNotification,
    RadioButtons:RadioButtonsReducer,
});

export default ListOfSettingsReducer;
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
  contacts : [
    { name: "Andrew", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Bogdan", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Vasyl", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Gregory", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Dmytro", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Eugene", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Zenoviy", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Igor", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Kyrylo", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Leonid", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Maxim", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Nazar", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Alexander", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Petro", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Roman", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Sergiy", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Taras", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Ustym", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Fedor", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: "Christina", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
],
  listOfExptionsForGroups:[],
   groups : [
    { name: 'The Beatles', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Queen', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Led Zeppelin', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Pink Floyd', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'The Rolling Stones', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'U2', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Nirvana', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Metallica', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'AC/DC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Radiohead', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'The Eagles', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Fleetwood Mac', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Guns N\' Roses', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'The Who', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Coldplay', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Pearl Jam', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Red Hot Chili Peppers', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Linkin Park', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'The Doors', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Oasis', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
],
  listOfExptionsForChannels:[],
  channelNames : [
    { name: 'Discovery Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'National Geographic', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'CNN', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'BBC News', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'ESPN', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'HBO', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'MTV', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Cartoon Network', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'History Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Disney Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Food Network', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Netflix', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'VH1', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Animal Planet', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'TLC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'CNBC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Comedy Central', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Travel Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'Science Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
    { name: 'HGTV', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
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
      console.log(JSON.stringify(action.payload.linkOfPhoto) +" "+ 123);
      return {
        ...state,
        listOfExptionsForPrivateChats: [...state.listOfExptionsForPrivateChats, {name: action.payload.name , linkOfPhoto : action.payload.linkOfPhoto}],
      };
    case  'REMOVE_ALL_EXEPTIONS_FOR_PRIVATESCATS_NOTIFI':
      return {
          ...state,
          listOfExptionsForPrivateChats: [],
          contacts : [
            { name: "Andrew", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Bogdan", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Vasyl", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Gregory", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Dmytro", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Eugene", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Zenoviy", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Igor", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Kyrylo", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Leonid", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Maxim", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Nazar", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Alexander", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Petro", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Roman", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Sergiy", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Taras", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Ustym", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Fedor", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: "Christina", link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
        ],
      };
    case  'REMOVE_USER_AFTER_ADD':
      const userToRemove = action.payload;
      const updatedList = state.contacts.filter(userprofile => userprofile.name !== userToRemove);
      return {
          ...state,
          contacts: updatedList,
      };
    case  'ADD_NEW_EXPTIONS_FOR_GROUPCHATS_NOTIFI':
      return {
        ...state,
        listOfExptionsForGroups: [...state.listOfExptionsForGroups, {name: action.payload.name , linkOfPhoto : action.payload.linkOfPhoto}],
      };
    case  'REMOVE_ALL_EXEPTIONS_FOR_GROUPCHAT_NOTIFI':
      return {
          ...state,
          listOfExptionsForGroups: [],
           groups :[
            { name: 'The Beatles', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Queen', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Led Zeppelin', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Pink Floyd', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'The Rolling Stones', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'U2', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Nirvana', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Metallica', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'AC/DC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Radiohead', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'The Eagles', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Fleetwood Mac', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Guns N\' Roses', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'The Who', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Coldplay', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Pearl Jam', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Red Hot Chili Peppers', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Linkin Park', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'The Doors', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Oasis', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
        ]
      };
    case  'REMOVE_GROUP_AFTER_ADD':
      const groupToRemove = action.payload;
      const updatedGroupList = state.groups.filter(groupProfile => groupProfile.name !== groupToRemove);
      return {
          ...state,
          groups: updatedGroupList,
      };
    case  'ADD_NEW_EXPTIONS_FOR_CHANNELS_NOTIFI':
        return {
          ...state,
          listOfExptionsForChannels: [...state.listOfExptionsForChannels, {name: action.payload.name,linkOfPhoto:action.payload.linkOfPhoto}],
        };
    case  'REMOVE_ALL_EXEPTIONS_FOR_CHANNEL_NOTIFI':
      return {
          ...state,
          listOfExptionsForChannels: [],
          channelNames : [
            { name: 'Discovery Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'National Geographic', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'CNN', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'BBC News', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'ESPN', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'HBO', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'MTV', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Cartoon Network', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'History Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Disney Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Food Network', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Netflix', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'VH1', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Animal Planet', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'TLC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'CNBC', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Comedy Central', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Travel Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'Science Channel', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' },
            { name: 'HGTV', link: 'https://th.bing.com/th/id/OIP.DSR3ZH586dophg9riX4thQHaE7?pid=ImgDet&rs=1' }
        ]
      };
      case  'REMOVE_CHANNEL_AFTER_ADD':
        const channelToRemove = action.payload;
        const updatedChannelList = state.groups.filter(channelProfile => channelProfile.name !== channelToRemove);
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
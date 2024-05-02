import { combineReducers } from "redux";
import { initialization } from "../../../Initialization/Initialization"
import SelfProfile from "../../../dao/Models/SelfProfile"

export const selfProfileUser = {
    selfProfile: undefined,
    dialogues: []
};

const userReducer = (state = selfProfileUser, action: any) => {
    switch(action.type) {
        case 'SET_SELF_PROFILE_USER':
            // console.log('userReducer', action.selfProfile);
            return { ...state, selfProfile: action.selfProfile }
        case 'SET_DIALOGUES':
            // console.log('userReducer', action.selfProfile);
            return { ...state, dialogues: action.dialogues }
        default:
            return state;
    }
}


export default userReducer;


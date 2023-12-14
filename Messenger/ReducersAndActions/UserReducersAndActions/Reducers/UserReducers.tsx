import { combineReducers } from "redux";
import { initialization } from "../../../Initialization/Initialization"
import SelfProfile from "../../../dao/Models/SelfProfile"

export const selfProfileUser:SelfProfile=initialization();

const userReducer = (state = selfProfileUser, action: any) => {
    switch(action.type){
        default:
            return state;
    }
}


export default userReducer;


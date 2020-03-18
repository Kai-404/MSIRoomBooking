import {appConstants} from "../constants/constants";

export const allOtherUsersReducer = (state = [], action) =>{
    switch(action.type){
        case appConstants.GET_ALL_OTHER_USERS:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}

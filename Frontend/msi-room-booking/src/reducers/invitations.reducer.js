import {appConstants} from "../constants/constants";

export const invitationsReducer = (state=[], action)=>{
    switch(action.type){
        case appConstants.GET_INVITATIONS:
            console.log(action.payload.data)
            return action.payload.data;
        case appConstants.UPDATE_INVITATIONS:
            if (action.payload){
                return action.payload.data;
            }
            break;
        default:
            return state;
    }

};

import {appConstants} from "../constants/constants";

export const roomsReducer = (state=[], action)=>{
    switch(action.type){
        case appConstants.GET_ROOMS:
            return action.payload.data;
        default:
            return state;
    }

};

import {appConstants} from "../constants/constants";

export const facilityListReducer = (state = [], action) =>{
    switch(action.type){
        case appConstants.GET_FACILITIES:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}

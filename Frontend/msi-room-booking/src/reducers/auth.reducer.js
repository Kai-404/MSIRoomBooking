import {appConstants} from "../constants/constants";

export const authReducer = (state = null, action) =>{
    switch(action.type){
        case appConstants.LOGIN:
            console.log(action.payload.data);
            return action.payload.data && action.payload.data.success ?  action.payload.data.user : state;
        case appConstants.LOGOUT:
            return null;
        default:
            return state;
    }
}

import {appConstants} from "../constants/constants";


export const reservationReducer = (state=null, action) => {
    switch (action.type) {
        case appConstants.ADD_RESERVATION:
            return state && action.payload ? [...state, action.payload] : state;
        case appConstants.CANCEL_RESERVATION:
            return state && action.payload ? [...state, action.payload] : state;
        default:
            return state;
    }
};

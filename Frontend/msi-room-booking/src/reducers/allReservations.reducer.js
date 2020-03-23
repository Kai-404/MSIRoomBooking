import {appConstants} from "../constants/constants";


export const allReservationReducer = (state=[], action) => {
    switch (action.type) {
        case appConstants.GET_ALL_RESERVATION:
            return action.payload.data ? action.payload.data  : state;
        default:
            return state;
    }
};

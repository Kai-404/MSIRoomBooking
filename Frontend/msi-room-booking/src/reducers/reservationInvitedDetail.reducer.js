import {appConstants} from "../constants/constants";

export const reservationInvitedReducer = (state=[], action) => {
    switch (action.type) {
        case appConstants.GET_RESERVATION_INVITED_DETAIL:
            return action.payload
        default:
            return state;
    }
};

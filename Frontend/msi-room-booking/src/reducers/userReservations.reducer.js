import {appConstants} from "../constants/constants";

export const userReservationsReducer = (state=[], action) => {
    switch (action.type) {
        case appConstants.GET_USER_RESERVATIONS:
            return action.payload.data
        default:
            return state;
    }
};

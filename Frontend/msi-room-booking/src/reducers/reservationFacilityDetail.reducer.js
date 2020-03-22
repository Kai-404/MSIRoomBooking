import {appConstants} from "../constants/constants";

export const reservationFacilityReducer = (state=[], action) => {
    switch (action.type) {
        case appConstants.GET_RESERVATION_FACILITY_DETAIL:
            return action.payload
        default:
            return state;
    }
};

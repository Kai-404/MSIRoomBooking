import {combineReducers} from "redux";
import {roomsReducer} from "./rooms.reducer";
import {authReducer} from "./auth.reducer";
import {userReservationsReducer} from "./userReservations.reducer";
import {allOtherUsersReducer} from "./allOtherUsers.reducer";
import {facilityListReducer} from "./facilityList.reducer";
import {invitationsReducer} from "./invitations.reducer";
import {reservationFacilityReducer} from "./reservationFacilityDetail.reducer";
import {reservationInvitedReducer} from "./reservationInvitedDetail.reducer";
import {allReservationReducer} from "./allReservations.reducer";

export const rootReducer = combineReducers({
    rooms: roomsReducer,
    user: authReducer,
    userReservations: userReservationsReducer,
    allOtherUsers: allOtherUsersReducer,
    facilities: facilityListReducer,
    invitations: invitationsReducer,
    reservationFacility: reservationFacilityReducer,
    reservationInvited: reservationInvitedReducer,
    allReservations: allReservationReducer
});

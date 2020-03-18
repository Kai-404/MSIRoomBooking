import {combineReducers} from "redux";
import {roomsReducer} from "./rooms.reducer";
import {authReducer} from "./auth.reducer";
import {userReservationsReducer} from "./userReservations.reducer";
import {allOtherUsersReducer} from "./allOtherUsers.reducer";

export const rootReducer = combineReducers({
    rooms: roomsReducer,
    user: authReducer,
    userReservation: userReservationsReducer,
    allOtherUsers: allOtherUsersReducer
});

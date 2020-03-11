import {combineReducers} from "redux";
import {roomsReducer} from "./rooms.reducer";
import {authReducer} from "./auth.reducer";

export const rootReducer = combineReducers({
    rooms: roomsReducer,
    user: authReducer
});

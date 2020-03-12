import {appConstants} from "../constants/constants";
import axios from "axios";

export const addReservation = (reservation, success, fail)=>{

    const addReservationPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/reservations`,
        reservation,
        {withCredentials: true}
    ).then(res => {
        if (res.data.success) {
            typeof success === 'function' && success();
            return reservation;
        }
        typeof fail === 'function' && fail();
        return null;
    }).catch(err => {
        fail && fail();
        return null;
    });
    return {
        type: appConstants.ADD_RESERVATION,
        payload: addReservationPromise
    };
}

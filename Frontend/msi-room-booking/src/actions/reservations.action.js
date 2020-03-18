import {appConstants} from "../constants/constants";
import axios from "axios";

export const addReservation = (reservation, success, fail)=>{

    const addReservationPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/reservations`,
        reservation,
        {withCredentials: true}
    ).then(res => {

        if (res.status === 200) {
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

export const getUserReservations =(userID, success, fail)=>{
    const scheduleDataPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/reservations/user/${userID}`,
        {withCredentials: true}
    ).then(res => {

        res.status === 200
            ?typeof success === 'function' && success()
            :typeof fail === 'function' && fail();

        return res;
    }).catch(err => {
        fail && fail();
        return null;
    });

    return {
        type: appConstants.GET_USER_RESERVATIONS,
        payload: scheduleDataPromise
    };
}

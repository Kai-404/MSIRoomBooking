import {appConstants} from "../constants/constants";
import axios from "axios";

export const addReservation = (reservation, invitedList,facilityList, facilityQuantity,success, fail)=>{

    const invited =[];
    const facilities =[];

    const addReservationPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/reservations`,
        reservation,
        {withCredentials: true}
    ).then(res => {

        if (res.status === 200) {
            typeof success === 'function' && success();
            return res.data;
        }
        typeof fail === 'function' && fail();
        return null;
    }).then(data =>{

        invitedList.forEach(people => {
            invited.push({
                user:people,
                reservation: data,
                status:"Invited"
            })
        })


        facilityList.forEach(facility =>{
            facilities.push({
                reservation: data,
                facility: facility,
                quantity: facilityQuantity[facilityList.indexOf(facility)],
                status: "Required"
            })
        })

        return axios.post(
            `${process.env.REACT_APP_API_URL}/facilityRequirementLists`,
            facilities,
            {withCredentials: true}
        )

    }).then(res =>{
        if (res.status === 200){
            return axios.post(
                `${process.env.REACT_APP_API_URL}/invitedLists`,
                invited,
                {withCredentials: true}
            )
        }
        typeof fail === 'function' && fail();
        return null;
    })
        .catch(err => {
        fail && fail();
        return null;
    });


    return {
        type: appConstants.ADD_RESERVATION,
        payload: addReservationPromise
    };
}

export const getUserReservations =(user, success, fail)=>{
    const scheduleDataPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/reservations/user`,
        user,
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

export const cancelReservation = (reservation, success, fail) =>{

    const cancelReservationPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/reservations/cancel`,
        reservation,
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

    return{
        type: appConstants.CANCEL_RESERVATION,
        payload: cancelReservationPromise
    }

}

export const getAllReservation = (success,fail) =>{

    const allReservationPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/reservations`,
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

    return{
        type: appConstants.GET_ALL_RESERVATION,
        payload: allReservationPromise
    }

}

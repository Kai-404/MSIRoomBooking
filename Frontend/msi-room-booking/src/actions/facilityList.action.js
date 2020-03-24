import axios from "axios";
import {appConstants} from "../constants/constants";

export const getFacilityList =(success, fail)=>{
    const facilitiesPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/facilities`,
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
        type: appConstants.GET_FACILITIES,
        payload: facilitiesPromise
    };
}


export const getReservationFacilityDetail =(reservation)=>{
    const reservationFacilityDetail = axios.post(
        `${process.env.REACT_APP_API_URL}/facilityRequirementLists/reservation`,
        reservation,
        {withCredentials: true}
    ).then(res=>{
        if (res.status === 200)
            return res.data
        return null
    });

    return{
        type: appConstants.GET_RESERVATION_FACILITY_DETAIL,
        payload: reservationFacilityDetail
    }
}

export const getAllFacilityRequire = ()=>{

    const allFacilityRequirePromise = axios.get(
        `${process.env.REACT_APP_API_URL}/facilityRequirementLists`,
        {withCredentials: true}
    ).then(res=>{
        if (res.status === 200)
            return res.data
        return null
    });

    return{
        type: appConstants.GET_ALL_FACILITY_REQUIRE,
        payload: allFacilityRequirePromise
    }
}

export const saveFacility =(facility)=>{
    const saveFacilityPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/facilities`,
        facility,
        {withCredentials: true}
    ).then(res=>{
        if (res.status === 200)
            return res
        return null
    });

    return{
        type: appConstants.UPDATE_FACILITY,
        payload: saveFacilityPromise
    }
}

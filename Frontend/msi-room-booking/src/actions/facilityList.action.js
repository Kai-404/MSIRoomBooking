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

import axios from "axios";
import {appConstants} from "../constants/constants";

export const getAllOtherUsers =(userID, success, fail)=>{
    const allOtherUsersPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/users/allOtherUsers/${userID}`,
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
        type: appConstants.GET_ALL_OTHER_USERS,
        payload: allOtherUsersPromise
    };
}

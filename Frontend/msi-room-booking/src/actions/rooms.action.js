import {appConstants} from "../constants/constants";
import axios from "axios";

export const getRooms = () => {
    const getRoomsPromise = axios.get(
        `${process.env.REACT_APP_API_URL}/rooms`,
        {withCredentials: true});
    return{
        type: appConstants.GET_ROOMS,
        payload: getRoomsPromise
    };
};

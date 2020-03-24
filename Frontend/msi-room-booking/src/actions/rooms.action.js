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

export const updateRoom =(room)=>{
    const updateRoomPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/rooms`,
        room,
        {withCredentials: true}
    ).then(res=>{
        if (res.status === 200)
            return res
        return null
    });

    return{
        type: appConstants.UPDATE_FACILITY,
        payload: updateRoomPromise
    }
}

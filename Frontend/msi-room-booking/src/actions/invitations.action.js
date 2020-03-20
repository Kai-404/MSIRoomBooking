import {appConstants} from "../constants/constants";
import axios from "axios";

export const getInvitations = (user) => {
    const invitationsPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/invitedLists/userInvitations`,
        user,
        {withCredentials: true}
        )

    return{
        type: appConstants.GET_INVITATIONS,
        payload: invitationsPromise
    };
};

export const updateInvitation = (invitation)=>{
    const updateInvitationPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/invitedLists/updateInvitation`,
        invitation,
        {withCredentials:true}
    ).then(res=>{
        if (res.status === 200){
            return axios.post(
                `${process.env.REACT_APP_API_URL}/invitedLists/userInvitations`,
                invitation.user,
                {withCredentials: true}
            )
        }
        else return null
    }).then(res =>{
        if(res&&res.status=== 200){
            return res
        }
        return null
    });

        return{
            type: appConstants.UPDATE_INVITATIONS,
            payload: updateInvitationPromise
        }

}

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getInvitations, updateInvitation} from "../actions/invitations.action";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {getUserReservations} from "../actions/reservations.action";


const InvitationList = (props)=>{

    const user = useSelector(state=>state.user);
    const invitations = useSelector(state=>state.invitations);
    const dispatch = useDispatch();

    const followingInvitations = invitations.filter( invitation => ( new Date(invitation.reservation.endTime) > new Date()));

    useEffect(()=>{
        if(user)
            dispatch(getInvitations(user))
    },[user])

    const handleAccept = (event, invitation)=>{
        invitation.status="Accepted"

        dispatch(updateInvitation(invitation))

    }

    const handleDecline = (event, invitation)=>{
        invitation.status="Declined"
        console.log(invitation)

        dispatch(updateInvitation(invitation))

    }
    return(
        invitations.filter(invitation => new Date(invitation.reservation.endTime)>= new Date()).length !== 0
            ?(
                <div>
                    <Typography variant="h6" >
                            Your Invitation(s):
                    </Typography>
                    <List>
                        {
                            invitations.filter(invitation => new Date(invitation.reservation.endTime)>= new Date()).map(invitation => (
                                <ListItem key={invitation.id}>
                                    {console.log(invitation)}
                                    <ListItemText
                                        primary= {`${invitation.reservation.title} by ${invitation.reservation.user.firstName}`}
                                        secondary= {`From ${new Date(invitation.reservation.startTime).toLocaleString()} 
                                                     to ${new Date(invitation.reservation.endTime).toLocaleString()}`}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="accept" onClick={(event)=>{handleAccept(event,invitation)}}>
                                            <CheckIcon style={{fill: "green"}}/>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="decline" onClick={(event)=>{handleDecline(event,invitation)}}>
                                            <ClearIcon style={{fill: "red"}}/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>


            )
            :(
                 <Typography variant="h6" >
                    You don't have any Invitation
                 </Typography>
            )

    );


}

export default InvitationList;

import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getReservationFacilityDetail} from "../actions/facilityList.action";
import {getReservationInvited} from "../actions/invitations.action";
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";


const ReservationDetail = (props) =>{

    const dispatch = useDispatch();
    const reservation = props.reservation
    const facilityDetail = React.useState(state => state.reservationFacility)
    const invitedDetail = React.useState(state => state.reservationInvited)


    useEffect(()=>{
        if(reservation) {
            dispatch(
                getReservationFacilityDetail(reservation),
                getReservationInvited(reservation)
            )
        }
    },[reservation])

    return(
        <Paper>
            <Grid item xs={12} style={{marginTop: 20}}>
                <Typography variant="h5" style={{textAlign:"center"}}>
                    {reservation.title}
                </Typography>
                <Grid container direction="column" justify="center" alignItems="flex-start" >
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Typography variant="subtitle1" style={{textAlign:"center", marginLeft: 10 ,marginRight: 10}}>
                            {"Organizer:"}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" style={{textAlign:"center"}}>
                            {reservation.user.firstName+" "+reservation.user.lastName}
                        </Typography>
                    </Grid>
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Typography variant="subtitle1" style={{textAlign:"center", marginLeft: 10 ,marginRight: 10}}>
                            {"Start Time:"}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" style={{textAlign:"center"}}>
                            {(new Date(reservation.startTime)).toLocaleString()}
                        </Typography>
                    </Grid>
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Typography variant="subtitle1" style={{textAlign:"center", marginLeft: 10 ,marginRight: 10}}>
                            {"End Time:"}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" style={{textAlign:"center"}}>
                            {(new Date(reservation.endTime)).toLocaleString()}
                        </Typography>
                    </Grid>
                    <Grid container direction="column" justify="flex-start" alignItems="center">
                        <Typography variant="subtitle1" style={{textAlign:"center", marginLeft: 10 ,marginRight: 10}}>
                            {"Room:"}
                        </Typography>
                        <Card style={{display:"flex",width:"30"}}>
                            <CardMedia>
                                <img alt={reservation.room.name} src={reservation.room.image}
                                     width="150vw" height="100vh"/>
                            </CardMedia>
                            <div>
                                <CardContent >
                                    <Typography variant="subtitle1">
                                        {reservation.room.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        Capacity : {reservation.room.maxCapacity}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Divider  style={{marginTop: 20, marginBottom:20}}/>

            <Grid container>
                <Grid item xs={12} >
                <Typography variant="h5" style={{textAlign:"center"}}>
                    Invited People:
                </Typography>
                </Grid>
                {invitedDetail.map(invited =>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={invited.user.id} >
                            <ListItemAvatar>
                                <Avatar>
                                    {invited.user.firstName[0].toUpperCase()}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id={invited.user.id} primary={`${invited.user.firstName} ${invited.user.lastName}`} />

                            {invited.status === "Invited"
                                ? <Typography variant="subtitle1" edge="end" >
                                    {invited.status}
                                    </Typography>
                                : (invited.status === "Accepted"
                                        ? <Typography variant="subtitle1" edge="end" style={{color: "green"}}>
                                            {invited.status}
                                        </Typography>
                                        : <Typography variant="subtitle1" edge="end" style={{color: "red"}}>
                                            {invited.status}
                                        </Typography>
                                )
                            }
                        </ListItem>

                    </Grid>
                )}
                </Grid>

            <Divider  style={{marginTop: 20, marginBottom:20}}/>

            <Grid container >
                <Grid item xs={12} >
                    <Typography variant="h5" style={{textAlign:"center"}}>
                        Added Facility:
                    </Typography>
                </Grid>
                {facilityDetail.map(facility =>
                    <Grid item xs={12} sm={6} >
                        <Card style={{display:"flex",width:"30"}}>
                            <CardMedia>
                                <img alt={facility.facility.name} src={facility.facility.image}
                                     width="150vw" height="100vh"/>
                            </CardMedia>
                            <div>
                                <CardContent >
                                    <Typography variant="subtitle1">
                                        {facility.facility.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                       Required : {facility.quantity}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                )}
                </Grid>

        </Paper>
    )



}

export default ReservationDetail

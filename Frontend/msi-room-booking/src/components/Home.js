import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    Scheduler,
    Appointments,
    WeekView,
    AppointmentTooltip,
    DateNavigator, Toolbar
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import {getUserReservations} from "../actions/reservations.action";
import {ViewState} from "@devexpress/dx-react-scheduler";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {getInvitations} from "../actions/invitations.action";


const Content = (({appointmentData, ...restProps}) => (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
        <Grid container alignItems="center">
            <Grid item xs={2} style={{textAlign: 'center'}}>
                <RoomIcon color="action"/>
            </Grid>
            <Grid item xs={10}>
                <span>{appointmentData.location}</span>
            </Grid>
        </Grid>
        <Grid container alignItems="center">
            <Grid item xs={2} style={{textAlign: 'center'}}>
                <PersonIcon  color="action"/>
            </Grid>
            <Grid item xs={10}>
                <span>Organizer: {appointmentData.organizer}</span>
            </Grid>
        </Grid>
    </AppointmentTooltip.Content>
));


const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {

        if (user){
            dispatch(
                getUserReservations(
                    user,
                    ()=>{
                        console.log("Get Reservations Success")
                    },
                    ()=>{
                        console.log("Get Reservations FAIL!!!")
                    }
                )
            )

            dispatch(getInvitations(user))
        }



        },[user]);




    const reservations = useSelector(state => state.userReservations);
    const invitations = useSelector(state => state.invitations);

    const followingReservations = reservations.filter( reservation => ( new Date(reservation.endTime) > new Date()
                                                && reservation.status !== "Canceled"))

    const followingInvitations = invitations.filter( invitation => ( new Date(invitation.reservation.endTime) > new Date()
                                                                    && invitation.status === "Invited"))


    const [currentDate, setCurrentDate] = useState(new Date())


    return (

        <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={4}>
                {user
                    ? (
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h4" >
                                    Welcome Back
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h5" color="textSecondary">
                                    {user.role.type}
                                </Typography>
                            </Grid>

                            <Grid tiem>
                                <Typography variant="h5" >
                                    {user.firstName + " "+user.lastName}
                                </Typography>
                            </Grid>

                            <Divider  variant="middle" style={{marginTop: 20, marginBottom:20}}/>


                            <Grid tiem>
                                <Typography variant="subtitle1" >
                                    You Have {followingReservations.length} following Reservation(s)
                                    and {followingInvitations.length} pending Invitation(s)
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                    :(<p>Please login</p>)
                }
            </Grid>

            <Grid item xs ={8}>
            <Paper style={{width: "60vw" , height:"90vh", overflow:'scroll'}}>
                <Scheduler
                    data={reservations.filter(reservation => reservation.status !== "Canceled").map( reservation =>{
                        return {
                            startDate: new Date(reservation.startTime),
                            endDate: new Date(reservation.endTime),
                            title: reservation.title,
                            location: reservation.room.name,
                            organizer: reservation.user.firstName
                        }
                    })}
                    height={800}
                >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={(changeDate)=>setCurrentDate(changeDate)}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={18}
                    />

                    <Toolbar />
                    <DateNavigator />
                    <Appointments />
                    <AppointmentTooltip
                        showCloseButton
                        contentComponent={Content}
                    />
                </Scheduler>
            </Paper>
            </Grid>
        </Grid>
    );

}
export default Home;

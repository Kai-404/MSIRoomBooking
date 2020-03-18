import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Scheduler, Appointments, WeekView, AppointmentTooltip} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import {getUserReservations} from "../actions/reservations.action";


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

                dispatch(
                    getUserReservations(
                        1,
                        ()=>{
                            console.log("Get Reservations Success")
                        },
                        ()=>{
                            console.log("Get Reservations FAIL!!!")
                        }
                    )


                )


        },[user]);




    const reservations = useSelector(state => state.userReservation);


    return (

        <div style={{display:"flex", justifyContent:"center"}}>
            {
                user
                    ? (<p>Welcome Back! {user.lastName}! You are a {user.role.type}</p>)
                    :(<p>Please login</p>)

            }
        <Paper style={{width: "60vw" , height:"70vh", overflow:'scroll', marginBottom:"30px", marginTop:"30px"}}>




            <Scheduler
                data={reservations}

            >
                <WeekView
                    startDayHour={9}
                    endDayHour={18}
                />
                <Appointments />
                <AppointmentTooltip
                    showCloseButton
                    contentComponent={Content}
                />
            </Scheduler>
        </Paper>
        </div>
    );

}
export default Home;

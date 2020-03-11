import React from 'react';
import {useSelector} from "react-redux";
import {Scheduler, DayView, Appointments, WeekView, AppointmentTooltip,
    AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import Paper from "@material-ui/core/Paper";
import Rooms from "./Rooms";
import Grid from "@material-ui/core/Grid";
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";


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


    const user = useSelector(state => state.user);

    const data = [
        {startDate: '2020-3-10 10:00', endDate: '2020-3-10 12:00', title: 'Training', location: 'Training Room A', organizer:'Gao'},
        {startDate: '2020-3-11 14:00', endDate: '2020-3-11 17:30', title: "Afternoon Training", location: 'Training Room A', organizer:'Peter'}
    ];



    return (
        <Paper>

            {
                user
                    ? (<p>Welcome Back! {user.lastName} </p>)
                    :(<p>Please login</p>)

            }

            <Scheduler
                data={data}
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
    );

}
export default Home;

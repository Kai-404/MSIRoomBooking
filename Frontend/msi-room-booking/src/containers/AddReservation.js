import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,DateTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import './AddReservation.scss'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Transition from "react-transition-group/Transition";
import Rooms from "../components/Rooms";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Slide from "@material-ui/core/Slide";
import {addReservation} from "../actions/reservations.action";


const AddReservation =()=>{

    const user = useSelector(state => state.user);

    const [reservationTitle, setReservationTitle] = React.useState("New Reservation")
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [selectedRoom, setSelectedRoom] = React.useState();

    const handleTitleChange =(event)=>{
        setReservationTitle(event.target.value);
        console.log(reservationTitle);
    }

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
        console.log(selectedStartDate)
    };

    const handleEndDateChange =(date) => {
        setSelectedEndDate(date);
        console.log(selectedEndDate.toLocaleTimeString())
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        // setSelectedRoomId(null);
        setSelectedRoom(null);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    const handleSubmit =()=>{
       const reservation = {
           title : reservationTitle,
           startTime: selectedStartDate,
           endTime: selectedEndDate,
           user: user,
           room: selectedRoom,
           status:"CREATED"
        }

        dispatch(addReservation(
            reservation,
            ()=>{
                console.log("success")
            },
            ()=>{
                console.log("fail")
            }
        ));


        console.log(reservation);

    }


    return(


        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className='AddReservation' elevation={10}>
        <form className="new-reservation-form">

            <TextField
                defaultValue={reservationTitle}
                margin="normal"
                required
                label="Reservation Title"
                onChange={handleTitleChange}
            />

            <DateTimePicker
                margin="normal"
                required
                variant="inline"
                ampm={false}
                format="yyyy-MM-dd HH:mm"
                label="Start Time"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                disablePast
            />

            <DateTimePicker
                margin="normal"
                required
                variant="inline"
                ampm={false}
                format="yyyy-MM-dd HH:mm"
                label="End Time"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                disablePast
            />

            <Button color="primary" onClick={handleClickOpen}>
                Select a room
            </Button>

            {
                selectedRoom
                    ? (
                        <Card style={{display:"flex",width:"30"}}>

                            <CardMedia>
                                <img alt={selectedRoom.name} src={selectedRoom.image}
                                width="150vw" height="100vh"/>

                            </CardMedia>

                            <div>
                                <CardContent >
                                    <Typography variant="subtitle1">
                                        {selectedRoom.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        Max Capacity : {selectedRoom.maxCapacity}
                                    </Typography>
                                </CardContent>

                            </div>
                        </Card>
                    )
                    : <p>No Room Selected</p>
            }


            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Create This Reservation
            </Button>


            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
                <AppBar >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            Select Room
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Rooms setSelectedRoom={setSelectedRoom} handleClose={handleClose}/>
            </Dialog>



        </form>
            </Paper>

        </MuiPickersUtilsProvider>
    );





}

export default AddReservation;

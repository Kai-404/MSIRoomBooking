import React, {useEffect} from 'react';
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
import Rooms from "../components/Rooms";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DialogContent from "@material-ui/core/DialogContent";


const AddReservation =(props)=>{

    const user = useSelector(state => state.user);


    const [reservationTitle, setReservationTitle] = React.useState("New Reservation")
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date(selectedStartDate.getTime() + 30*60000));
    const [selectedRoom, setSelectedRoom] = React.useState();

    useEffect(()=>{
        setSelectedRoom( props.reservationInfo.room? props.reservationInfo.room:selectedRoom);

        if(!!!(props.reservationInfo.title)){
            props.reservationInfo.title = reservationTitle;
            props.setReservationInfo(props.reservationInfo);
        }

        if(!!!(props.reservationInfo.startTime)){
            props.reservationInfo.startTime = selectedStartDate;
            props.setReservationInfo(props.reservationInfo);
        }

        if(!!!(props.reservationInfo.endTime)){
            props.reservationInfo.endTime = selectedEndDate;
            props.setReservationInfo(props.reservationInfo);
        }

    })

    const handleTitleChange =(event)=>{
        setReservationTitle(event.target.value);
        props.reservationInfo.title = event.target.value;
        props.setReservationInfo(props.reservationInfo)
    }

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
        props.reservationInfo.startTime = date;
        props.setReservationInfo(props.reservationInfo)
    };

    const handleEndDateChange =(date) => {
        setSelectedEndDate(date);
        props.reservationInfo.endTime = date;
        props.setReservationInfo(props.reservationInfo)
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedRoom(null);
        props.reservationInfo.room = null;
        props.setReservationInfo(props.reservationInfo)

    };


    const handleClose = (event, room) => {
        setOpen(false);
        props.reservationInfo.room = room? room:props.reservationInfo.room;
        props.setReservationInfo(props.reservationInfo)
    };

    const dispatch = useDispatch();

    // const handleSubmit =()=>{
    //    const reservation = {
    //        title : reservationTitle,
    //        startTime: selectedStartDate,
    //        endTime: selectedEndDate,
    //        user: user,
    //        room: selectedRoom,
    //        status:"CREATED"
    //     }
    //
    //     dispatch(addReservation(
    //         reservation,
    //         ()=>{
    //             console.log("Add New Reservation success")
    //         },
    //         ()=>{
    //             console.log("Add New Reservation FAIL!!!")
    //         }
    //     ));
    //
    //
    // }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className='AddReservation' elevation={10} style={{
                minWidth: "320px",
                width: "100%",
                maxWidth: "400px",
                height: "450px",
                marginTop: "25px",
                position: "relative"}} >
        <form className="new-reservation-form">

            <TextField
                defaultValue={props.reservationInfo.title? props.reservationInfo.title:reservationTitle}
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
                value={props.reservationInfo.startTime? props.reservationInfo.startTime:selectedStartDate}
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
                value={props.reservationInfo.endTime? props.reservationInfo.endTime:selectedEndDate}
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

            {/*<Button variant="contained" color="primary" onClick={handleSubmit}>*/}
            {/*    Create This Reservation*/}
            {/*</Button>*/}


            <Dialog fullScreen open={open} onClose={handleClose} >
                <AppBar >
                    <Toolbar position="fixed">
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            Select Room
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent style={{marginTop:"65px"}}>
                    <Rooms setSelectedRoom={setSelectedRoom} handleClose={handleClose} />
                </DialogContent>

            </Dialog>


        </form>
            </Paper>

        </MuiPickersUtilsProvider>
    );


}

export default AddReservation;

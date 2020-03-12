import React from 'react';
import {useSelector} from "react-redux";
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


const AddReservation =()=>{

    const user = useSelector(state => state.user);

    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());

    const [selectedRoomId, setSelectedRoomId] = React.useState();

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
        console.log(selectedStartDate)
    };

    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

    const handleEndDateChange =(date,event) => {
        setSelectedEndDate(date);
        console.log(selectedEndDate)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedRoomId(null);
    };

    const handleClose = (value) => {
        setOpen(false);
    };


    return(


        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className='AddReservation' elevation={10}>
        <form className="new-reservation-form">

            <TextField
                defaultValue="New Reservation"
                margin="normal"
                required
                label="Reservation Title"
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

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Select a room
            </Button>

            {
                selectedRoomId
                    ? <p>{selectedRoomId}</p>
                    : <p>not selected anything</p>
            }


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
                <Rooms setSelectedRoomId={setSelectedRoomId} handleClose={handleClose}/>
            </Dialog>



        </form>
            </Paper>

        </MuiPickersUtilsProvider>
    );





}

export default AddReservation;

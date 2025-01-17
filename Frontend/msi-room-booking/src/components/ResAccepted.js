import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import ReservationDetail from "./ReservationDetail";
import {cancelReservation, getUserReservations} from "../actions/reservations.action";

const columns = [
    { id: 'title', label: 'Reservation Title', minWidth: 150 },
    { id: 'organizer', label: 'Organizer', minWidth: 150 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
        id: 'startTime',
        label: 'Start Time',
        minWidth: 100,
        //align: 'right',
        //format: value => value.toLocaleString(),
    },
    {
        id: 'endTime',
        label: 'End Time',
        minWidth: 100,
        // align: 'right',
        // format: value => value.toLocaleString(),
    },
    {
        id: 'location',
        label: 'Location',
        minWidth: 150,
        // align: 'right',
        // format: value => value.toLocaleString(),
    },

];



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const ResAccepted =()=> {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const [reservation, setReservation] = React.useState({});

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getUserReservations(user,()=>{console.log("Success")},()=>{console.log("Fail")}))
    },[])

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancelReservation = () =>{
        reservation.status="Canceled";
        dispatch(
            cancelReservation(reservation,
                ()=>{
                    console.log("Cancel Reservations Success")
                },
                ()=>{
                    console.log("Cancel Reservations FAIL!!!")
                }));
        setOpen(false);

    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDetail =(event,reservation)=>{
        console.log(reservation);
        setOpen(true);
        setReservation(reservation);
    }


    const reservations = useSelector(state => state.userReservations)
    const user = useSelector(state => state.user)



    const createdReservation =  reservations.filter( reservation => (reservation.user.id !== user.id
        && new Date(reservation.endTime) > new Date()
        && reservation.status !== "Canceled"))

    const rows = createdReservation.map( reservation => {
        return {
            title: reservation.title,
            organizer: reservation.user.firstName+" "+reservation.user.lastName,
            date : new Date(reservation.startTime).toLocaleDateString(),
            startTime : new Date(reservation.startTime).toLocaleTimeString(),
            endTime : new Date(reservation.endTime).toLocaleTimeString(),
            location : reservation.room.name,
            reservation: reservation
        }
    });


    return rows.length !== 0 ?(
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell key="detail" >
                                        <Button variant="contained" color="primary" onClick={(event)=>{handleDetail(event,row.reservation)}}>Detail</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth = {'md'}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Reservation Detail</DialogTitle>
                <DialogContent dividers>
                    <ReservationDetail id="reservation-detail"reservation={reservation}/>
                </DialogContent>
                <DialogActions>
                    {user.role.type === "Manager"?
                    < Button onClick={handleCancelReservation} color="secondary">
                        Cancel This Reservation
                    </Button>:null
                    }
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        </Paper>
    ):(
        <Typography variant="h6" >
            You don't have any following accepted reservation
        </Typography>
    );

}

export default ResAccepted

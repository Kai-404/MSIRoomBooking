import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {useDispatch, useSelector} from "react-redux";
import {getFacilityList} from "../actions/facilityList.action";
import {getRooms, updateRoom} from "../actions/rooms.action";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ReservationDetail from "../components/ReservationDetail";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import EditFacility from "../components/EditFacility";


const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
    },
}));

const FacilityManagerPage = () =>{

    const classes = useStyles();

    const rooms = useSelector(state=>state.rooms)
    const facilities = useSelector(state => state.facilities)

    const dispatch = useDispatch();

    const [selectedFacility, setSelectedFacility] = useState({});
    const [selectedRoom,setSelectedRoom]=useState({});
    const [facilityDialogOpen, setFacilityDialogOpen] = useState(false)

    const handleEditFacility = (event, facility)=>{
        setSelectedFacility(facility);
        setFacilityDialogOpen(true);
    }

    const handleFacilityClose = ()=>{
        setFacilityDialogOpen(false);
    }

    const handleMaintainRoom = (event, room)=>{

        setSelectedRoom(room);

        setSelectedRoom(room.status="UNDER MAINTAIN");

        dispatch(updateRoom(room))

        setSelectedRoom({});

        console.log(room);

    }

    const handleAvailableRoom = (event, room)=>{

        setSelectedRoom(room);

        setSelectedRoom(room.status="IN USE");

        dispatch(updateRoom(room))

        setSelectedRoom({});

        console.log(room);

    }


    useEffect(()=>{
        dispatch(
            getFacilityList(()=>console.log("get facility success"), ()=>console.log("get facility FAIL"))
        );

        dispatch(
            getRooms()
        );
    },[])


    return(
        <div className={classes.root}>

            <Typography variant="h5" style={{marginTop:"20px", marginBottom:"20px"}}>Facility Management</Typography>

        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6">Manage Rooms</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {
                        rooms.map(room =>
                            <Grid item xs={12} sm={6} >
                                <Card style={{display:"flex",width:"30"}}>
                                    <CardMedia>
                                        <img alt={room.name} src={room.image}
                                             width="180vw" height="140vh"/>
                                    </CardMedia>
                                    <div>
                                        <CardContent >
                                            <Typography variant="subtitle1">
                                                {room.name}
                                            </Typography>
                                            {
                                                room.status === "IN USE"
                                                    ? <Typography variant="subtitle1" style={{color: "green"}}>
                                                        Available
                                                    </Typography>
                                                    : <Typography variant="subtitle1"  style={{color: "red"}}>
                                                        Under Maintain
                                                    </Typography>
                                            }

                                            {
                                                room.status === "IN USE"
                                                    ? <Button size="small" style={{marginTop:"15px"}} variant="contained" color="secondary"
                                                            onClick={(event)=>{handleMaintainRoom(event,room)}}>
                                                     Set Under Maintain
                                                    </Button>
                                                    : <Button size="small" style={{marginTop:"15px"}} variant="contained" color="primary"
                                                              onClick={(event)=>{handleAvailableRoom(event,room)}}>
                                                        Set Available
                                                    </Button>
                                            }

                                        </CardContent>

                                    </div>
                                </Card>
                            </Grid>
                        )}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography variant="h6">Manage Facilities</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {
                        facilities.map(facility =>
                            <Grid item xs={12} sm={6} >
                                <Card style={{display:"flex",width:"30"}}>
                                    <CardMedia>
                                        <img alt={facility.name} src={facility.image}
                                             width="150vw" height="100vh"/>
                                    </CardMedia>
                                    <div>
                                        <CardContent >
                                            <Typography variant="subtitle1">
                                                {facility.name}
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Stock : {facility.stock}
                                            </Typography>

                                        </CardContent>
                                        <IconButton onClick={(event)=>{handleEditFacility(event,facility)}}>
                                            <EditIcon/>
                                            <Typography style={{marginLeft :"5px"}}>Edit</Typography>
                                        </IconButton>
                                    </div>
                                </Card>
                            </Grid>
                        )}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>

            <Dialog
                open={facilityDialogOpen}
                onClose={handleFacilityClose}
                fullWidth={true}
                maxWidth = "xs"
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Edit Facility</DialogTitle>
                <DialogContent dividers>
                    <EditFacility facility={selectedFacility} handleFacilityClose={handleFacilityClose}/>
                </DialogContent>
            </Dialog>
    </div>
    );
}

export default FacilityManagerPage

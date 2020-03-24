import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddReservation from "./AddReservation";
import InviteList from "../components/InviteList";
import FacilityList from "../components/FacilityList";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {addReservation} from "../actions/reservations.action";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {getAllFacilityRequire} from "../actions/facilityList.action";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));






const AddNewReservation =(props) =>{

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMsg, setSnackbarMsg] = React.useState("Error");
    const steps = getSteps();

    const user = useSelector(state => state.user);
    const allFacilityRequire = useSelector(state => state.allFacilityRequire)

    useEffect(()=>{
        dispatch(
        getAllFacilityRequire()
        )
    },[])

    const [reservationInfo,setReservationInfo]=React.useState({user:user, status:"CREATED"});
    const [invitedPeople, setInvitedPeople] = React.useState([]);
    const [invitedPeopleId, setInvitedPeopleId] = React.useState([]);
    const [addedFacility, setAddedFacility] = React.useState([]);
    const [addedFacilityId, setAddedFacilityId] = React.useState([]);
    const [addedFacilityQuantity, setAddedFacilityQuantity] = React.useState([]);


    const dispatch = useDispatch();

    function getSteps() {
        return ['Reservation info & Time', 'Invite colleague(s)', 'Add extra facilities'];
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddReservation setReservationInfo={setReservationInfo} reservationInfo={reservationInfo}/>;
            case 1:
                return <InviteList invitedPeople={invitedPeople} setInvitedPeople={setInvitedPeople}
                                   invitedPeopleId={invitedPeopleId} setInvitedPeopleId={setInvitedPeopleId}/>;
            case 2:
                return <FacilityList addedFacilityId={addedFacilityId} setAddedFacilityId={setAddedFacilityId}
                                     addedFacilityQuantity={addedFacilityQuantity} setAddedFacilityQuantity={setAddedFacilityQuantity}
                                     addedFacility={addedFacility} setAddedFacility={setAddedFacility}
                                     startTime={reservationInfo.startTime} endTime={reservationInfo.endTime}
                                     allFacilityRequire={allFacilityRequire}/>;
            default:
                return 'something wrong here';
        }
    }

    const isStepOptional = step => {
        return ! (step === 0);
    };

    const handleNext = (event, activeStep) => {
        console.log(activeStep)
        switch (activeStep) {
            case 0:
                if (! reservationInfo.title){
                    setSnackbarMsg("Reservation Title Can't be Empty!");
                    setSnackbarOpen(true);
                }else if(! (reservationInfo.startTime < reservationInfo.endTime)){
                    setSnackbarMsg("Reservation Start Time must Smaller than End Time ");
                    setSnackbarOpen(true);
                }else if (! reservationInfo.room){
                    setSnackbarMsg("Please Select a Room");
                    setSnackbarOpen(true);
                }else {
                    setActiveStep(prevActiveStep => prevActiveStep + 1);
                }
                break;
            case 1:
                if(invitedPeople.length > reservationInfo.room.maxCapacity){
                    setSnackbarMsg("Invited Number Exceed Room Capacity");
                    setSnackbarOpen(true);
                }else {
                    setActiveStep(prevActiveStep => prevActiveStep + 1);

                }
                break;
            case 2:

                // console.log(reservationInfo)
                // console.log(invitedPeople)
                // console.log(addedFacility)
                // console.log(addedFacilityQuantity)
                if((invitedPeople===[]) && (addedFacility===[])){
                    reservationInfo.status="Approved"
                }


                dispatch(addReservation(
                    reservationInfo,
                    invitedPeople,
                    addedFacility,
                    addedFacilityQuantity,
                    ()=>{
                        console.log("Add New Reservation success")
                    },
                    ()=>{
                        console.log("Add New Reservation FAIL!!!")
                    }
                ));




            default:
                setActiveStep(prevActiveStep => prevActiveStep + 1);

        }



    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleBackToHome = ()=>{
      props.history.push("/home")
    };

    return (
        <div className={classes.root}>

            <Stepper activeStep={activeStep} >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <>
                {activeStep === steps.length ? (
                    <>
                        <Typography className={classes.instructions}>
                            New Reservation Created
                        </Typography>
                        <Button onClick={handleBackToHome} className={classes.button}>
                            Back to Home Page
                        </Button>
                    </>
                ) : (
                    <Grid container spacing={3} direction="column" justify="flex-start" alignItems="center">
                        <Grid item sm={10}>
                            {getStepContent(activeStep)}
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            style={{marginTop: 20, marginBottom:20}}
                        >
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={(event)=> handleNext(event, activeStep)}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                            </Button>
                        </Grid>

                    </Grid>
                )}
            </>


            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={()=>{setSnackbarOpen(false)}}
                message={snackbarMsg}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={()=>{setSnackbarOpen(false)}}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default AddNewReservation;

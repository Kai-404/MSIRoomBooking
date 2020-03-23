import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InvitationList from "../components/InvitationList";
import ResCreatedByMe from "../components/ResCreatedByMe";
import ResAccepted from "../components/ResAccepted";
import {useSelector} from "react-redux";
import AllReservations from "../components/AllReservations";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
        flexGrow: 1,
    },
}));

const ReservationsManager =() =>{
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const user = useSelector(state=>state.user);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    // variant="fullWidth"
                    centered
                    aria-label="full width tabs example"
                >
                    <Tab label="Created by Me" id={0}  style={{textTransform : "none"}}/>
                    <Tab label="Invitations" id={1} style={{textTransform : "none"}} />
                    <Tab label="Accepted Invitation" id={2} style={{textTransform : "none"}} />
                    {user.role.type === "Manager"
                        ? <Tab label="All Reservations in Company" id={3}  style={{textTransform : "none"}}/>:null
                    }

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ResCreatedByMe></ResCreatedByMe>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <InvitationList></InvitationList>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <ResAccepted></ResAccepted>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <AllReservations> </AllReservations>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

export default ReservationsManager

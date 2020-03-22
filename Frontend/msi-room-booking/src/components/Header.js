import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {appConstants} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import ListAltIcon from '@material-ui/icons/ListAlt';
import Tooltip from "@material-ui/core/Tooltip";


const Header = () =>{

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const logout = () =>{
        const logoutPromise = fetch(
            `${process.env.REACT_APP_API_URL}/logout`,
            {credentials:'include'}
        ).catch();
        dispatch({
            type: appConstants.LOGOUT,
            payload: logoutPromise
        });
    };

    return(
        <AppBar position = 'static' className="Header">
            <Toolbar>
                <Typography variant="h6" className='app-name'>
                    MSI-Room Booking
                </Typography>

                {/*{*/}
                {/*    user&&*/}
                {/*    (*/}
                        <NavLink to={appConstants.homeRoute}>
                            <Tooltip title="Home">
                        <IconButton>
                            <HomeIcon className="nav-action-icon"/>
                        </IconButton>
                            </Tooltip>
                    </NavLink>

                {/*    )*/}
                {/*}*/}

                {/*{*/}
                {/*    user&&*/}
                {/*    (*/}
                        <NavLink to={appConstants.addReservationRoute}>
                            <Tooltip title="Add Reservation">
                            <IconButton>
                                <AddIcon className="nav-action-icon"/>
                            </IconButton>
                            </Tooltip>
                        </NavLink>
                {/*    )*/}
                {/*}*/}

                <NavLink to={appConstants.manageReservationsRoute}>
                    <Tooltip title="Manage Reservations">
                    <IconButton>
                        <ListAltIcon className="nav-action-icon"/>
                    </IconButton>
                    </Tooltip>
                </NavLink>



                <NavLink to={appConstants.loginRoute} style={{textDecoration: 'none'}}>
                    {
                        user
                            ?(<Button onClick={logout} className="auth-action">Logout</Button> )
                            :(<Button className="auth-action">Login</Button>)
                    }

                </NavLink>

            </Toolbar>
        </AppBar>
    );
}

export default Header;

import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {appConstants} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";


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

                <NavLink to={appConstants.homeRoute}>
                <IconButton>
                    <HomeIcon className="nav-action-icon"/>
                </IconButton>
                </NavLink>

                <NavLink to={appConstants.roomsRoute}>
                <IconButton>
                    <MeetingRoomIcon className="nav-action-icon"/>
                </IconButton>
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

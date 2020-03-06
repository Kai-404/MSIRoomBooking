import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";




const Header = () =>{


    return(
        <AppBar position = 'static' className="Header">
            <Toolbar>
                <Typography variant="h6" className='app-name'>
                    MSI-Room Booking
                </Typography>

                <IconButton>
                    <HomeIcon className="nav-action-icon"/>
                </IconButton>
                <Button>
                    Login
                </Button>

            </Toolbar>
        </AppBar>
    );
}

export default Header;

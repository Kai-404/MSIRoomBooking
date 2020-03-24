import React from 'react';
import {Paper, withStyles} from "@material-ui/core";
import LoginIcon from "@material-ui/icons/FilterHdr";
import UsernameIcon from  "@material-ui/icons/Person";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import PasswordIcon from "@material-ui/icons/VpnKey";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/auth.action";
import Snackbar from "@material-ui/core/Snackbar";
import {appConstants} from "../constants/constants";
import './Login.scss'
import Typography from "@material-ui/core/Typography";




const styles = {
    root: {
        marginTop: '25px',
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:before:hover': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:hover:not(.MuiInput-disabled):before': {
            borderBottomColor: 'white'
        },
        '& .MuiFormLabel-root': {
            color: 'white'
        }
    },
    input: {
        color: 'white'
    },
    button: {
        '&.MuiButtonBase-root': {
            margin: '50px 0 25px'
        }
    }
};

const Login = (props) =>{

    const {classes} = props;

    const [user, setUser] = React.useState({
        username: '',
        password: '',
    });

    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();

    const loginInfo = useSelector(state => {
        return {
            signedIn: !!state.user,
            msg: state.user
                ? appConstants.LOGIN_SUCCESS_MSG + state.user.username
                : appConstants.LOGIN_FAILED_MSG
        };
    });

    const handleFormControl = (event)=>{
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(
            user,
            ()=>{
                setOpen(true);
                props.history.push("/home");
            },
            ()=>{
                setOpen(true);
            }
        ));
    };


    return (
        <Paper className='Login' elevation={10}>
            <div className="overlay"/>
            <form className="login-form" onSubmit={handleSubmit}>
                <Typography variant="h4" style={{textAlign:"center",color:"white"}} >
                    Login
                </Typography>

                <TextField
                    name = "username"
                    className={classes.root}
                    label = "Email"
                    value={user.username}
                    onChange={handleFormControl}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <UsernameIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    name="password"
                    className={classes.root}
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleFormControl}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <Fab
                    variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="Login"
                    className={classes.button}
                    type="submit"
                    disabled={!user.username || !user.password}
                >
                    Sign In
                    <ArrowForwardIcon />
                </Fab>

            </form>

            <Snackbar

                className={loginInfo.signedIn ? 'success' : 'failure'}
                open={open}
                onClose={()=>setOpen(false)}
                autoHideDuration={5000}
                message={<span>{loginInfo.msg}</span>}

            />

        </Paper>
    );
};

export default withStyles(styles)(Login);

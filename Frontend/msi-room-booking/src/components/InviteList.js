import React, {useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {getUserReservations} from "../actions/reservations.action";
import {getAllOtherUsers} from "../actions/allOtherUsers.action";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const InviteList = (props)=>{

    const users = [{
        id: 4,
        email: "test@msi.com",
        firstName: "Kai",
        lastName: "Ye",
        password: "$2a$11$9nMbGPODllT9Vv3skyYpse8jkFHzgeiI.57B5HVew9xuSdZs6T2Nm",
        role: {
            id: 1,
            type: "Manager"
        },
        enabled: true,
        username: "test@msi.com",
        accountNonExpired: true,
        accountNonLocked: true,
        credentialsNonExpired: true
    },
        {
            id: 5,
            email: "test1@msi.com",
            firstName: "Greg",
            lastName: "Gao",
            password: "$2a$11$xRDmscs.MUUSbtGfUl39YOFg/m7sGynOePFCICKmUKfRgirKJ2kBS",
            role: {
                id: 2,
                type: "Employee "
            },
            enabled: true,
            username: "test1@msi.com",
            accountNonExpired: true,
            accountNonLocked: true,
            credentialsNonExpired: true
        },
        {
            id: 6,
            email: "test2@msi.com",
            firstName: "Peter",
            lastName: "Jiao",
            password: "$2a$11$oDXYnxq3obMOstXXRq51Gu1SMELfBvIQ1P51kZrdJZO214GpCdJ/K",
            role: {
                id: 1,
                type: "Manager"
            },
            enabled: true,
            username: "test2@msi.com",
            accountNonExpired: true,
            accountNonLocked: true,
            credentialsNonExpired: true
        }]


    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [checkedUsers, setCheckedUsers] = React.useState([]);


    const dispatch = useDispatch();

    const allOtherUsers = useSelector(state => state.allOtherUsers);

    useEffect(()=>{
        dispatch(
            getAllOtherUsers(
                1,
                ()=>{
                    console.log("Get Other Users Success")
                },
                ()=>{
                    console.log("Get Other Users FAIL!!!")
                }
            )
        );
    },[])




    const handleToggle = (userId,user) => () => {
        const currentIndex = checked.indexOf(userId);
        const newChecked = [...checked];
        const newCheckedUsers = [...checkedUsers];

        if (currentIndex === -1) {
            newChecked.push(userId);
            newCheckedUsers.push(user)

        } else {
            newChecked.splice(currentIndex, 1);
            newCheckedUsers.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setCheckedUsers(newCheckedUsers);

        console.log(newCheckedUsers);
        props.setSelectedUsers(newCheckedUsers);
    };

    return (
        <List dense className={classes.root}>
            {allOtherUsers && allOtherUsers.map(user => {
                const labelId = `checkbox-list-secondary-label-${user.id}`;
                return (
                    <ListItem key={user.id} button>
                        <ListItemAvatar>
                            <Avatar>
                                {user.firstName[0].toUpperCase()}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${user.firstName} ${user.lastName}`} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(user.id, user)}
                                checked={checked.indexOf(user.id) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );

}

export default InviteList

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


    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [checkedUsers, setCheckedUsers] = React.useState([]);


    const dispatch = useDispatch();

    const allOtherUsers = useSelector(state => state.allOtherUsers);
    const user = useSelector(state => state.user);

    useEffect(()=>{
        dispatch(
            getAllOtherUsers(
                user? user.id:1,
                ()=>{
                    console.log("Get Other Users Success")
                },
                ()=>{
                    console.log("Get Other Users FAIL!!!")
                }
            )
        );

        setChecked(props.invitedPeopleId);
        setCheckedUsers(props.invitedPeople)
    },[])




    const handleToggle = (userId,user) => () => {
        const currentIndex = checked.indexOf(userId);
        console.log(checked.indexOf(userId));
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
        props.setInvitedPeopleId(newChecked);
        props.setInvitedPeople(newCheckedUsers);

        console.log(newCheckedUsers);
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

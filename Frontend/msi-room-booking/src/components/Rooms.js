import React from  'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Rooms.scss";
import {useDispatch, useSelector} from "react-redux";
import {getRooms} from "../actions/rooms.action";


const Rooms =(props)=>{

    const dispatch = useDispatch()

    const [occupiedRooms, setOccupiedRooms] = React.useState([])
    const rooms = useSelector(state => state.rooms)



    React.useEffect(()=>{
        dispatch(getRooms())
        setOccupiedRooms(
        props.allReservations.filter( reservation =>{
                return (
                    (
                        ((new Date(props.startTime) <= new Date(reservation.startTime))
                            &&(new Date(props.endTime) > new Date(reservation.startTime))) ||
                        ((new Date(props.startTime) >= new Date(reservation.startTime))
                            &&(new Date(props.startTime) < new Date(reservation.endTime)))
                    )
                )
            }).map(reservation => reservation.room)

        );



    },[])




    const handleAction = (event,room)=>{
        props.setSelectedRoom(room)
        props.handleClose(event, room);
    }


    return (
        <Grid container spacing={3}>
            {
                rooms.filter( room => ! occupiedRooms.map(oRooms=>oRooms.id).includes(room.id)) ?
                    (rooms.filter( room => ! occupiedRooms.map(oRooms=>oRooms.id).includes(room.id)).map( r => r.status==="IN USE" && (
                    <Grid item xs={12} sm={6} md={4}>

                        <Card id={r.id} key={r.id}>
                            <CardActionArea id={r.id} name={r.name} onClick={(event)=> handleAction(event, r)}>
                                <CardMedia
                                    component="img"
                                    alt={r.name}
                                    image={r.image}
                                    height = "300"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {r.name}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        Max Capacity: {r.maxCapacity}
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))):
                    <Typography variant="h6" >
                        No available room at selected time slot
                    </Typography>


            }
        </Grid>
    );
}

export default Rooms;

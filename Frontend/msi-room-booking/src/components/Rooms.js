import React from  'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import "./Rooms.scss";
import {connect} from "react-redux";
import {getRooms} from "../actions/rooms.action";

class Rooms extends React.Component{



    componentDidMount() {
        this.props.getRooms();
    }

    // rooms = [
    //     { name: 'Training Room A', maxCapacity: 12, status: 'IN USE', image: 'https://ballantyneexecutivesuites.com/wp-content/uploads/2015/10/Depositphotos_13534536_original.jpg' },
    //     { name: 'Training Room B', maxCapacity: 10, status: 'IN USE', image: 'https://28fs5qpte772a5kdy3ndzx31-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/16-0041815.gif' }
    // ];

    handleAction = ()=>{
        console.log("aaaaa")
    }

    render() {
        return (
            <Grid container spacing={3}>
                {
                    this.props.rooms && this.props.rooms.map( r => r.status==="IN USE" && (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                                <CardActionArea>
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
                                <CardActions>
                                    <Button size="small" color="primary" onClick={this.handleAction}>
                                        Book This Room
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))

                }

            </Grid>
        );
    }


}


function mapStateToProps({rooms}) {
    return {rooms};
}

export default connect(mapStateToProps,{getRooms})(Rooms);

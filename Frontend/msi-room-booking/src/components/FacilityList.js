import React, {useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {getFacilityList} from "../actions/facilityList.action";


const FacilityList = ()=>{

    const facilities = useSelector(state => state.facilities);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(
            getFacilityList(
                ()=>{
                    console.log("get facility success")
                },
                ()=>{
                    console.log("get facility FAIL")
                }
            )
        );
    },[]);



    return(

        <Grid container spacing={3}>
            {
                facilities && facilities.map( facility =>  (
                    <Grid item xs={12} sm={6} md={4}>

                        <Card style={{display:"flex",width:"30"}}>

                            <CardMedia>
                                <img alt={facility.name} src={facility.image}
                                     width="150vw" height="100vh"/>

                            </CardMedia>

                            <div>
                                <CardContent >
                                    <Typography variant="subtitle1">
                                        {facility.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        Stock : {facility.stock}
                                    </Typography>

                                    <TextField
                                        style={{width:150}}
                                        id="standard-number"
                                        label="Quantity"
                                        type="number"
                                        default = "0"
                                        inputProps={{
                                            max: facility.stock,
                                            min:0
                                        }}
                                    />
                                </CardContent>

                            </div>
                        </Card>

                        <div>

                        </div>
                    </Grid>
                ))


            }
        </Grid>

    );

}

export default FacilityList;

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


const FacilityList = (props)=>{

    const facilities = useSelector(state => state.facilities);

    const dispatch = useDispatch();

    const [selected, setSelected] = React.useState([]);
    const [quantity, setQuantity] = React.useState([]);
    const [facilitySelectedList, setfacilitySelectedList] = React.useState([]);


    const handleOnChange = (value, facility)=>{
        console.log(value,facility);

        const currentIndex = selected.indexOf(facility.id);
        const newSelected = [...selected];
        const newQuantity = [...quantity];
        const newFacilitySelectedList = [...facilitySelectedList]

        if (currentIndex === -1) {
            if (+value !== 0){
                newSelected.push(facility.id);
                newQuantity.push(+value);
                newFacilitySelectedList.push(facility);
            }
        } else {

            if(+value === 0){
                newSelected.splice(currentIndex, 1);
                newQuantity.splice(currentIndex, 1);
                newFacilitySelectedList.splice(currentIndex, 1);
            }else {
                newQuantity[currentIndex]=+value;
            }
        }

        setSelected(newSelected);
        setQuantity(newQuantity);
        setfacilitySelectedList(newFacilitySelectedList);
        props.setAddedFacilityId(newSelected);
        props.setAddedFacilityQuantity(newQuantity);
        props.setAddedFacility(newFacilitySelectedList);

        console.log(newSelected)
        console.log(newQuantity)

    }

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
        setSelected(props.addedFacilityId);
        setQuantity(props.addedFacilityQuantity);
        setfacilitySelectedList(props.addedFacility);

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

                            <React.Fragment>
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
                                        defaultValue = {
                                            props.addedFacilityId.indexOf(facility.id) === -1
                                                ? 0
                                                : props.addedFacilityQuantity[props.addedFacilityId.indexOf(facility.id)]
                                        }
                                        inputProps={{
                                            max: facility.stock,
                                            min:0
                                        }}
                                        onChange={(event)=>{handleOnChange(event.target.value,facility)}}
                                    />
                                </CardContent>

                            </React.Fragment>
                        </Card>

                    </Grid>
                ))


            }
        </Grid>

    );

}

export default FacilityList;

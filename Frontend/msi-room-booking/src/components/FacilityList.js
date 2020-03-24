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

    const [facilityIndex, setFacilityIndex] = React.useState([]);
    const [facilityQuantity,setFacilityQuantity]=React.useState([]);


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

        const startDay = new Date(new Date(props.startTime).toDateString());
        const tempDate = new Date(new Date(props.startTime).toDateString());
        const endDay = new Date(tempDate.setDate(tempDate.getDate() + 1));

        const todayFacility = props.allFacilityRequire.filter(facilityRequire => new Date(facilityRequire.reservation.startTime)>=startDay
            && new Date(facilityRequire.reservation.endTime)<=endDay && facilityRequire.reservation.status !== "Canceled")

        const todayFacilityRequire = todayFacility.map(tf =>{
            return { id : tf.facility.id, amount : tf.quantity}
        })

        const tempIndex = facilityIndex;
        const tempQuantity = facilityQuantity;

        todayFacilityRequire.forEach( tfr =>{
            if (tempIndex.includes(tfr.id)){
                tempQuantity[tempIndex.indexOf(tfr.id)] += tfr.amount;
            }else {
                tempIndex.push(tfr.id);
                tempQuantity.push(tfr.amount);
            }
        })

        setFacilityIndex(tempIndex);
        setFacilityQuantity(tempQuantity);


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
                                        Stock : {facility.stock - (facilityIndex.includes(facility.id)? facilityQuantity[facilityIndex.indexOf(facility.id)]:0)}
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
                                            max: facility.stock - (facilityIndex.includes(facility.id)? facilityQuantity[facilityIndex.indexOf(facility.id)]:0),
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

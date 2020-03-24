import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {useDispatch} from "react-redux";
import {saveFacility} from "../actions/facilityList.action";


const EditFacility = (props)=>{

    const [stock,setStock] = React.useState(props.facility.stock);

    const dispatch = useDispatch();

    const handleStockOnChange =(event)=>{
        setStock(event.target.value);
    }

    const handleFacilitySave = ()=>{
        props.facility.stock = stock;
        dispatch(saveFacility(props.facility))
        props.handleFacilityClose();
    }

    return(
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={3}
        >
            <Grid item>
                <Typography variant="h6">{props.facility.name}</Typography>
            </Grid>

            <Grid item>
                <TextField
                    style={{width:150}}
                    id="standard-number"
                    label="Stock"
                    type="number"
                    defaultValue = {
                        stock
                    }
                    inputProps={{
                        max: 100,
                        min:0
                    }}
                    onChange={handleStockOnChange}
                />
            </Grid>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{marginBottom:"20px"}}
            >

            <Button onClick={props.handleFacilityClose} color="secondary">
                Cancel
            </Button>
            <Button onClick={handleFacilitySave} color="primary">
                Save
            </Button>

            </Grid>



        </Grid>
    )


}

export default EditFacility

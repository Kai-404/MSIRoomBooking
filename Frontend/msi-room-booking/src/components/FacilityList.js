import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


const FacilityList = ()=>{

    const facilites = [
        {
            id: 1,
            name: "White Board",
            stock: 10,
            image: "https://www.zoro.com/static/cms/product/full/Z1wAJticpEx-.JPG"
        },
        {
            id: 2,
            name: "Projector",
            stock: 8,
            image: "https://www.swiftermall.com/1981-large/adjustable-projector-stand.jpg"
        },
        {
            id: 3,
            name: "Black Maker",
            stock: 50,
            image: "https://cdn.shopify.com/s/files/1/1185/1056/products/dry-erase-markers-black_1024x1024.jpg"
        },
        {
            id: 4,
            name: "Red Maker",
            stock: 35,
            image: "https://cdn.shopify.com/s/files/1/1185/1056/products/sharpie-red-king-size-chisel-tip_1024x1024.jpg"
        },
        {
            id: 5,
            name: "Green Maker",
            stock: 20,
            image: "https://i5.walmartimages.com/asr/5f179132-dc3e-4f6e-9ebc-2e05b16a9885_1.93635eb0735a8d6ba8730d180b88c4ce.jpeg"
        },
        {
            id: 7,
            name: "Blue Maker",
            stock: 20,
            image: "https://i5.walmartimages.com/asr/ff792477-9f44-4f2c-b0bb-01acbeda890e_1.d8f001fc334dc7e649316a0aca5ab2f4.jpeg"
        },
        {
            id: 8,
            name: "Eraser",
            stock: 50,
            image: "https://i5.walmartimages.com/asr/4041a8aa-2ac1-48d8-87ad-c75c1bd61326_1.4e7f14d90d7e294fd0829c75b5ae55c3.jpeg"
        },
        {
            id: 9,
            name: "Laptop",
            stock: 5,
            image: "https://icdn5.digitaltrends.com/image/surface-laptop-2_jpg-1357x905.jpg"
        }
    ];


    return(

        <Grid container spacing={3}>
            {
                facilites.map( facility =>  (
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
                                        label="Amount Required"
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

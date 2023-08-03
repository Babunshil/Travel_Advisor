import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Link, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from "@material-ui/icons/Phone"
import Ratting from '@material-ui/lab/Rating'

import useStyles from './style'


const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) {
    console.log("Scrolling to:", place.name);
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjFM9IQzDJLpXDH79C1U_Y5245HsegWiSHA&usqp=CAU'}
      />
      <CardContent>
        <Typography variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" >
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" style={{ textAlign: 'end' }} >
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display='flex' justifyContent="space-between" alignItems="center" >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitl2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <Box display='flex' justifyContent='space-between' ><LocationOnIcon />{place.address}</Box>
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon />{place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web.url, '_blank')}  > Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}  > Website
          </Button>
        </CardActions>

      </CardContent>


    </Card>
  );
}

export default PlaceDetails;
import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './style'



const Map = () => {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDil92j_xJFszy73ySZHnEoScYUvPvU7Gg' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        center={{ lat: 20.5937, lng: 78.9629 }}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}

      >
      </GoogleMapReact>
    </div>
  )
}

export default Map;
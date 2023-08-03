import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Divider, Card } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './style'
import { Place } from "@material-ui/icons";

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  // }, [places]);
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef);

    setElRefs(refs);
  }, [places]);


  return (
    <div className={classes.container}>
      <Typography variant="h4">Reasturents , Hotels & Attraction around you
      </Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Resturent</MenuItem>
              <MenuItem value="hotels">Hotel</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => { setRating(e.target.value) }}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {
              places?.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              ))
            }
          </Grid>
        </>
      )
      }
    </div>);
}

export default List;
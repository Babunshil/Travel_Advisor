import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";
// import PlaceDetails from "./PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData } from "../api";

const App = () => {

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);

  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {

    setIsLoading(true);
    getPlaceData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      })

  }, [type, coordinates, bounds]);
  console.log(places)
  console.log(filteredPlaces)

  return (<>
    <CssBaseline />
    <Header setCoordinates={setCoordinates} />
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4} >
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </Grid>
      <Grid item xs={12} md={8} >
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
        />
      </Grid>
    </Grid>

  </>);
}

export default App;
import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

import useStyle from './style'

const Header = () => {

  const classes = useStyle();
  // auto >>>
  // const [autocomplete, setAutocomplete] = useState(null);
  // // auto >>>
  // // auto >>>
  // const onLoad = (autoC) => setAutocomplete(autoC);
  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat();
  //   const lng = autocomplete.getPlace().geometry.location.lng();
  // }
  // // auto >>>

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </div>
          {/*</Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
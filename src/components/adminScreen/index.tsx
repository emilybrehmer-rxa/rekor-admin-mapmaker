import React, { useState, useEffect, useRef } from 'react';
import _ from 'underscore';

import Box from '@mui/material/Box';
import GridOLD from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { AppBar } from '@material-ui/core';

import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.js';
import './index.module.scss';
import wkx from 'wkx';
import { Toolbar } from '@mui/material';
// import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZG9tby1kZXYiLCJhIjoiY2w1c2Rib3F1MmdnZTNqdGVicjczc3BtOSJ9.-0Iju7M9-F-hwUSByI4_Vw';

// const theme = createTheme();
const useStyles = makeStyles({
// makeStyles((theme) => ({
//   root: (props) => ({
//     // backgroundcolor: props.backgroundcolor,
//     // color: theme.color,
//   }),
  logo: {
    maxWidth: 80,
  },
});



export const AdminScreen = (props: any) => {
  const ref = useRef(null);
  const loading = props.loading;
  const setLoading = props.setLoading;
  const curScreen = props.curScreen;
  const setCurScreen = props.setCurScreen;
  const mapConfig = props.mapConfig;
  const classes = useStyles();

  // console.log(props);


  return (
    <Box ref={ref}>
      <AppBar variant='outlined'>
        <Toolbar>
          <img src="./rekor-avatar.jpg" alt="logo" className={classes.logo}/>
        </Toolbar>

      </AppBar>
      <Typography variant="h4" gutterBottom>
      Street Surveillance Map
      </Typography>
      <Typography pb={2} variant="body2">
        Descriptive text, either hard-coded or configurable via the admin.
      </Typography>

      <Backdrop
        sx={{
          color: '#000',
          background: '#666',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
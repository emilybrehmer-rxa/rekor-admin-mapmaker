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

import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.js';
import styles from './index.module.scss';
import wkx from 'wkx';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZG9tby1kZXYiLCJhIjoiY2w1c2Rib3F1MmdnZTNqdGVicjczc3BtOSJ9.-0Iju7M9-F-hwUSByI4_Vw';

export const AdminScreen = (props: any) => {
  const ref = useRef(null);
  const loading = props.loading;
  const setLoading = props.setLoading;
  const curScreen = props.curScreen;
  const setCurScreen = props.setCurScreen;
  const mapConfig = props.mapConfig;

  console.log(props);

  return (
    <Box ref={ref}>
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
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
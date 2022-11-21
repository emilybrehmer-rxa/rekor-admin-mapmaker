import React, { useState, useEffect, useRef } from 'react';
import _ from 'underscore';
import Layout from 'components/adminScreen/layout';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.js';
import './index.module.scss';


mapboxgl.accessToken =
  'pk.eyJ1IjoiZG9tby1kZXYiLCJhIjoiY2w1c2Rib3F1MmdnZTNqdGVicjczc3BtOSJ9.-0Iju7M9-F-hwUSByI4_Vw';




export const AdminScreen = (props: any) => {
  const ref = useRef(null);
  const loading = props.loading;
  const setLoading = props.setLoading;
  const curScreen = props.curScreen;
  const setCurScreen = props.setCurScreen;
  const mapConfig = props.mapConfig;
  const [toggleTheme] = useState();
  const [useDefaultTheme] = useState(true);

  return (
    <Paper ref={ref} >
       <Layout 
            toggleTheme={toggleTheme}
            useDefaultTheme={useDefaultTheme}
        />
      <Box>
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
    </Paper>
  );
};
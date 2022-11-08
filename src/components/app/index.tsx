import { AdminScreen } from 'components/adminScreen';
import { LoadScreen } from 'components/loadScreen';

import React, { useState, useEffect, useRef } from 'react';

import domo from 'ryuu.js';

import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './index.module.scss';
import wkx from 'wkx';

const App = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  const [curScreen, setCurScreen] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('User');

  const getUserInfo = () => {
    let domoUserInfo: any = {};
    const domoUserApi = `/domo/users/v1/${domo.env.userId}?includeDetails=true`;
    domoUserInfo = domo.get(domoUserApi);
    return domoUserInfo;
  };

  // TODO: replace with query to get map definitions (saved via AppDB from admin view)
  const mapConfig = {
    layers: [
      {
        name: 'Incidents',
        type: 'point',
        datasetName: 'incidents',
        datasetId: '7e42d610-58fe-4797-9e67-d99e9165092e',
        locationCol: 'location',
        icon: '',
        fillColor: 'ff9922',
        strokeColor: '2299ff',
        filterCols: ['incident_type', 'creation_source'],
        tooltips: [
          {
            title: 'Incident',
            sections: [
              {
                title: 'Incident ID',
                sectionCol: 'incident_id',
              },
              {
                title: 'Incident Date & Time',
                sectionCol: 'confirmed_at',
              },
            ],
          },
        ],
      },
      {
        name: 'Congestions',
        type: 'point',
        datasetName: 'congestions',
        datasetId: 'df87c5af-7bb6-4c5a-af84-b3e175526d3e',
        locationCol: 'location',
        icon: 'camera-icon1.svg',
        fillColor: 'ff9922',
        strokeColor: '2299ff',
        filterCols: ['status', 'state'],
        tooltips: [
          {
            title: 'Congestion Area',
            sections: [
              {
                title: 'Speed',
                sectionCol: 'speed',
              },
              {
                title: 'Delay',
                sectionCol: 'delay',
              },
              {
                title: 'Distance',
                sectionCol: 'distance',
              },
            ],
          },
        ],
      },
    ],
  };

  
  /* DEV: Validation */

  return (
    <Box sx={{ bgcolor: '#f8f8f8' }} ref={ref}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={3} sx={{ bgcolor: '#fff' }}>
          {(() => {
            if (errors !== '') {
              return <Typography>{errors}</Typography>;
            }
              return (
                <div>
                  <AdminScreen
                    loading={loading}
                    setLoading={setLoading}
                    curScreen={curScreen}
                    setCurScreen={setCurScreen}
                    mapConfig={mapConfig}
                  />
                </div>
              );            
            /* return (
              <LoadScreen
                loading={loading}
                setLoading={setLoading}
                curScreen={curScreen}
                setCurScreen={setCurScreen}
              />
            ); */
          })()}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
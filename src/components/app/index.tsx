import { AdminScreen } from 'components/adminScreen';
import { LoadScreen } from 'components/loadScreen';

import React, { useState, useEffect, useRef } from 'react';

import domo from 'ryuu.js';
import Query from '@domoinc/query';

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

  /* BEGIN REMOVE: Will go away once layer loop working */
  const [layer1, setLayer1] = useState<any[]>([]);

  const layer1Dataset = 'incidents';
  // const layer1Dataset = mapConfig['layers'][0]['datasetID'];
  const layer1LocationCol = [mapConfig['layers'][0]['locationCol']];
  const layer1FilterCols = mapConfig['layers'][0]['filterCols'];
  const layer1TooltipCols = mapConfig['layers'][0]['tooltips'][0][
    'sections'
  ].map((item: any) => item['sectionCol']);
  const layer1Cols = layer1LocationCol.concat(
    layer1FilterCols,
    layer1TooltipCols,
  );

  /* Query: retrieve layer 1 data */
  const getLayer1Data = () => {
    let layer1Results: any = {};

    const query = new Query().select(layer1Cols.join());
    const queryUrl = query.query(layer1Dataset);
    layer1Results = domo.get(queryUrl);
    return layer1Results;
  };

  if (Object.keys(layer1).length !== 0) {
    console.log(layer1);
  }
  /* END REMOVE: */

  const [layers, setLayers] = useState<any[]>([]);

  /* define function for retrieving layer data */
  const getLayerData = (layerDatasetName, layerCols) => {
    let layerResults: any = {};
    const query = new Query().select(layerCols.join());
    const queryUrl = query.query(layerDatasetName);
    layerResults = domo.get(queryUrl);
    return layerResults;
  };

  useEffect(() => {
    /* if (errors === '') {
      setLoading(false);
    } */

    /*
    getUserInfo()
      .then((data: any) => {
        setUserEmail(data.detail.email);
      })
      .catch((error) => setErrors('Unable to retrieve Domo user information!'));
    */

    if ( 1 == 1 /*userRole === 'Admin'*/) {
      setCurScreen('admin');
    } else {
      setCurScreen('home');
    }

    // loop through layers in mapConfig and save to layers[]
    const layerData = [];
    mapConfig.layers.forEach((l, i) => {
      const locationCol = [l.locationCol];
      const filterCols = l.filterCols;
      const tooltipCols = l.tooltips[0]['sections'].map(
        (item: any) => item['sectionCol'],
      );
      const layerColsConcat = locationCol.concat(filterCols, tooltipCols);
      getLayerData(l.datasetName, layerColsConcat)
        .then((data: any) => {
          layerData[l.name] = {
            layerDatasetId: l.datasetId,
            layerDatasetName: l.datasetName,
            layerCols: layerColsConcat,
            layerData: data,
          };
        })
        .catch((error: any) => setErrors('Unable to retrieve layer1!'));
    });
    setLayers(layerData);
    setLoading(false);

    getLayer1Data()
      .then((data: any) => {
        /* save to locations state */
        setLayer1(data);
        setLoading(false);
      })
      .catch((error: any) => setErrors('Unable to retrieve layer1!'));
  }, [errors]);

  /* DEV: Validation */
  if (Object.keys(layers).length !== 0) {
    console.log(layers);
  }

  return (
    <Box sx={{ bgcolor: '#f8f8f8' }} ref={ref}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={3} sx={{ bgcolor: '#fff' }}>
          {(() => {
            if (errors !== '') {
              return <Typography>{errors}</Typography>;
            }
            if (loading === false && Object.keys(layers).length !== 0) {
              if (curScreen === 'admin') {
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
              }
            }
            return (
              <LoadScreen
                loading={loading}
                setLoading={setLoading}
                curScreen={curScreen}
                setCurScreen={setCurScreen}
              />
            );
          })()}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
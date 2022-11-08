import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadScreen = (props: any) => {
  const loading = props.loading;
  const setLoading = props.setLoading;
  const curScreen = props.curScreen;
  const setCurScreen = props.setCurScreen;

  // console.log(props);

  const loadApp = () => {
    setCurScreen('home');
  };

  return (
    <div>
      {
        <Box justifyContent="center" alignItems="center">
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ my: 4 }}
            onClick={() => loadApp()}
          >
            Click to load the app
          </Button>
        </Box>
      }

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
    </div>
  );
};

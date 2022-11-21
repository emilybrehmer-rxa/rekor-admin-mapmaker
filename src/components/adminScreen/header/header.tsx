import React, { ReactElement, FC } from "react";
import { AppBar, Box, Toolbar, Icon, Typography, Avatar } from '@mui/material';

import SplitButton from './splitButton';
import './index.module.scss';
import { ADMIN_TITLE } from "utils/constants";


const Header: FC<any> = ({  }): ReactElement => {
    return (
        <AppBar 
            elevation={1}
            color='transparent' 
            position='relative'
            style={{padding: 0, display: 'flex', flex: '1 1 auto'}}
        >          
          <Toolbar disableGutters style={{paddingLeft: 0}}>
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="logo"
              src="./rekor-avatar.jpg"
            />
            <Typography className='title-header'>
                {ADMIN_TITLE}
            </Typography>     
            <Box sx={{ marginLeft: 'auto', paddingRight: '16px'}}>
                <Avatar 
                    alt="Remy Sharp" 
                    src="./RemySharp.jpg" />                
            </Box>  
            <SplitButton/>          
            <Icon 
              color="primary"
              sx={{
                float: 'right',
                paddingLeft: '32px',
                paddingRight: '56px'
              }}
              >close</Icon>  
                  
            {/* <img src="./rekor-avatar.jpg" alt="logo" className={classes.logo}/> */}
          </Toolbar>
      </AppBar>
    )
}

export default Header;
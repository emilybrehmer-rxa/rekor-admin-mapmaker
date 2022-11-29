import { FC, ReactNode, useReducer } from "react";
import * as React from 'react';
import clsx from "clsx";
import { makeStyles, createStyles, Theme, styled } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';
import { Grid } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

/// components
import Header from "./header/header";
import Layers from "./layers/layers";

/// constants
import { DRAWER_WIDTH } from "utils/constants";


/// define css- in - js
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridroot: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },
        content: {
            flexGrow: 1,
            background: theme.palette.background.paper,
            margin: 0,
            height: '95vh',
        },
        innerContent: {
            border: "1px",
            borderStyle: 'solid',
            borderColor: '#d8d8d8',
            borderTopWidth: 0
        },
        regionHeader: {
            color: '#808080',
            paddingBottom: "6px"
        },
        toolbar: {
            ...theme.mixins.toolbar,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            })
        },
    })
);

const themeOptions = createTheme ({
    palette: {
        primary: {
            main: '#161a33',
        },
        secondary: {
            main: '#fc9927',
        },
        info: {
            main: '#3abeef',
            light: '#e9f3f6',
        },
        success: {
            main: '#4caf50',
            light: '#ddf0eb',
        },
        },
        typography: {
        fontFamily: "Option Sans Light"    
    }
});

const gridStyles = {
    backgroundColor: "blue",
    paddingBottom: 2,
    paddingRight: 2,
    marginTop: "16px",
    marginLeft: "16px",
    marginRight: "auto",
    maxWidth: 500
  };

/// define intergace to represent component props
interface Props {
    toggleTheme: () => void;
    useDefaultTheme: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children}) =>
{
    const classes = useStyles();
    const [open, toggle] = useReducer((open) => !open, true);
    return (
        <div className={classes.gridroot}>
            <>
            <CssBaseline />
            <Header/>
            <Box  sx={{flexGrow: 1, display: 'flex', margin: '16px'}}>
                <Grid container zeroMinWidth spacing={4} className={classes.content}>
                    <Grid
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={2}
                        className = {classes.innerContent}
                        >
                            <Box        
                            position='relative'                     
                            sx={{
                                margin: "16px",
                                height: 300,
                                width: '100%',
                                p: 2,
                                borderRadius: 2,
                                border: '1px grey',
                                m: 2
                            }}>
                                <Typography className={classes.regionHeader}>Layers</Typography>
                                <Layers></Layers>
                            </Box>
                    </Grid>
                        
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={2}
                        className = {classes.innerContent}>
                            <Typography className={classes.regionHeader}>Filters</Typography>
                    </Grid>
                        
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={6}
                        className = {classes.innerContent}>
                            <Typography className={classes.regionHeader}>Streets</Typography>
                    </Grid>
                
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={2}
                        className = {classes.innerContent}>
                            <Typography className={classes.regionHeader}>Types</Typography>
                    </Grid>
                </Grid>                
            </Box>
           
            
            {/* <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.toolbar}/>
                {children}
            </main> */}
            </>
        </div>
    )
};

export default Layout;
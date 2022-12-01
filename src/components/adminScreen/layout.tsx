import { FC, useReducer } from "react";
import * as React from 'react';
import { makeStyles, createStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';
import { Grid } from '@material-ui/core/';
import Box from '@material-ui/core/Box';

/// components
import Header from "./header/header";
import Layers from "./layers/layers";



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
            height: '95vh', // This is the only way I could get the grid to expand the full length of the screen, for now.
        },
        innerContent: {
            border: "1px",
            borderStyle: 'solid',
            borderColor: '#d8d8d8',
            borderTopWidth: 0
        },
        regionHeader: {
            color: '#808080',
            paddingBottom: "6px",
            fontSize: '0.9rem'
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
    }
});

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
            <ThemeProvider theme={themeOptions}>
                <CssBaseline />
                <Header/>
                <Box >
                    <Grid container spacing={4} className={classes.content}>
                        <Grid item xs={2} className = {classes.innerContent}>
                                <Box>
                                    <Typography className={classes.regionHeader}>Layers</Typography>
                                    <Layers></Layers>
                                </Box>
                        </Grid>
                            
                        <Grid item xs={2} className = {classes.innerContent}>
                                <Typography className={classes.regionHeader}>Filters</Typography>
                        </Grid>
                            
                        <Grid item xs={6} className = {classes.innerContent}>
                                <Typography className={classes.regionHeader}>Streets</Typography>
                        </Grid>
                    
                        <Grid item xs={2} className = {classes.innerContent}>
                                <Typography className={classes.regionHeader}>Types</Typography>
                        </Grid>
                    </Grid>                
                </Box>
            </ThemeProvider>
            </>
        </div>
    )
};

export default Layout;
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
        root: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            background: theme.palette.background.paper,
            marginLeft: theme.spacing(7) + 1,
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            ...theme.mixins.toolbar,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: DRAWER_WIDTH,
        },
    })
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.type === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    marginTop: 2,
    marginLeft: "auto",
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
        <div className={classes.root}>
            <>
            <CssBaseline />
            <Header/>
            <Box  sx={{flexGrow: 1, display: 'flex', margin: '16px'}}>
                <Grid container zeroMinWidth spacing={4} >
                    <Grid
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={2}
                        // sx={gridStyles}
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
                                <Typography>Layers</Typography>
                                <Layers></Layers>
                            </Box>
                    </Grid>
                        
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={1}>
                            <Item>Filters</Item>
                    </Grid>
                        
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={8}>
                            <Item>Streets</Item>
                    </Grid>
                
                    <Grid
                        container
                        direction='column'
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item xs={1}>
                            <Item>Types</Item>
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
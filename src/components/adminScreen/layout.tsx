import React, { FC, ReactNode, useReducer } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

/// components
import Header from "./header/header";

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
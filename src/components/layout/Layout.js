import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import useStyle from './styles';
import Header from "../header/Header";
import Preloader from "../preloader/Preloader";
import Grid from "@material-ui/core/Grid";
import {useMediaQuery, useTheme} from "@material-ui/core";


const Layout = (props) => {
    const classes = useStyle();
    const [isLoading,setIsLoading]= useState(true);
    const theme= useTheme();
    const isMobileSize= useMediaQuery(theme.breakpoints.down(768));
    const useHeader = () => {
        if(!props.location.pathname.startsWith('/chat'))
            return <Header/>
        else
            if (!isMobileSize)
                return <Header/>
    }
    const onLoad = () => {
        if(isLoading)
            return <Preloader/>
        else
            return ( <React.Fragment>
                {props.children}
            </React.Fragment>)
    };
    useEffect(()=>{
        setIsLoading(false);

    },[]);
    return (
        <Grid container direction={"column"} className={classes.root}>
            {useHeader()}
            {onLoad()}
        </Grid>
    );
};

export default withRouter(Layout);
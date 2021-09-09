import React, {useEffect, useState} from 'react';
import useStyle from './styles';
import Header from "../header/Header";
import Preloader from "../preloader/Preloader";
import Grid from "@material-ui/core/Grid";


const Layout = (props) => {
    const classes = useStyle();
    const [isLoading,setIsLoading]= useState(true);
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
            <Header/>
            {onLoad()}
        </Grid>
    );
};

export default Layout;
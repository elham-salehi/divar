import React, {useEffect} from 'react';
import useStyle from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";
import BrowsHeader from "../../components/browsHeader/BrowsHeader";
import {Divider, Grid, useMediaQuery} from "@material-ui/core";
import Posts from "../components/posts/Posts";

import {
    setIsLoading,
    useLayoutDispatch,
    useLayoutState,
    updatePostsByCity,
} from "../../context/LayoutContext";
import Preloader from "../../components/preloader/Preloader";
import useTheme from "@material-ui/core/styles/useTheme";


const PostsByCity = (props) => {
    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();
    const {isLoading}= useLayoutState();
    const theme = useTheme();
    const isPhoneSize = useMediaQuery(theme.breakpoints.down(568));

    useEffect(()=>{
        setIsLoading(layoutDispatch,true);
        updatePostsByCity(layoutDispatch,props.match.params.city,(done)=>{
            if(done)
                setIsLoading(layoutDispatch,false);
        });

    },[layoutDispatch,props.match.params.city]);

    return(
        isLoading ? <Preloader/> :
        <Grid item container direction={"row"}>
            {!isPhoneSize && <Sidebar/>}
            <Grid item container direction={"column"} className={classes.main}>
                <Grid item className={classes.browser}>
                    <BrowsHeader categoryTitle={"همه آگهی ها"}/>
                    <Divider orientation={"horizontal"} className={classes.divider}/>
                </Grid>
                <Posts/>
            </Grid>
        </Grid>
    )


};

export default PostsByCity;
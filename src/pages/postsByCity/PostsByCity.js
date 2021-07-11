import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";
import BrowsHeader from "../../components/browsHeader/BrowsHeader";
import {Divider, Grid} from "@material-ui/core";
import Posts from "../components/posts/Posts";
import {getAllPosts, getPostsByCityApi} from "../../api/api-posts";
import {
    setIsLoading,
    useLayoutDispatch,
    useLayoutState,
    updatePostsByCity, setSelectedCity
} from "../../context/LayoutContext";
import Preloader from "../../components/preloader/Preloader";


const PostsByCity = (props) => {
    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();
    const {selectedCity}= useLayoutState();
    const {isLoading}= useLayoutState();

    useEffect(()=>{

        setIsLoading(layoutDispatch,true);
        // getPostsByCityApi(props.match.params.city,(isOk,data) => {
        //     if(!isOk)
        //         alert(data);
        //     else {
        //         setPostsByCity(layoutDispatch,data);
        //     }
        // })
        updatePostsByCity(layoutDispatch,props.match.params.city,(done)=>{
            if(done)
                setIsLoading(layoutDispatch,false);
        });

    },[]);

    return(
        isLoading ? <Preloader/> :
        <Grid item container direction={"row"}>
            <Sidebar/>
            <Grid item container className={classes.main}>
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
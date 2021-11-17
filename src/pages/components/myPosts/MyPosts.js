import React, {useEffect, useState} from 'react';
import MyDivar from "../../myDivar/MyDivar";
import {Grid, Typography} from "@material-ui/core";
import useStyle from "./styles";
import NewPostButton from "../../../components/newPostButton/NewPostButton";
import {getMyPostsApi} from "../../../api/api-posts";
import MyPostItem from "../myPostItem/MyPostItem";
import {setIsLoading, useLayoutDispatch} from "../../../context/LayoutContext";

const MyPosts = () => {
    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        setIsLoading(layoutDispatch,true);
        getMyPostsApi((isOk,data) => {
            if(!isOk)
                console.log("false",data)
            else
                setPosts(data);
                setIsLoading(layoutDispatch,false)
        });
    },[layoutDispatch]);

if(!posts)
    return (
        <Grid container direction={"column"} className={classes.root} justifyContent={"center"} alignItems={"center"}>
            <MyDivar value={0}/>
            <Grid item className={classes.noPost}>
                <Typography className={classes.noPostMessage}>تا به حال در دیوار آگهی ثبت نکرده‌اید</Typography>
            </Grid>
            <Grid className={classes.newPostButton}>
                <NewPostButton/>
            </Grid>

        </Grid>
    );

else
    return(
        <Grid container direction={"column"} className={classes.root} justifyContent={"center"} alignItems={"center"}>
            <MyDivar value={0}/>
            <Grid container direction={"column"}>
                {posts.map(item => <MyPostItem data={item} />)}
            </Grid>
        </Grid>
    )

};

export default MyPosts;
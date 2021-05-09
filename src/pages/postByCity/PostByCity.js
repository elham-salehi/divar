import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import Posts from "../components/posts/Posts";
import BrowsHeader from "../../components/browsHeader/BrowsHeader";
import {Divider, Grid} from "@material-ui/core";
import {getAllPosts} from "../../api/api-posts";
import Sidebar from "../../components/sidebar/Sidebar";
import {useLayoutState} from "../../context/LayoutContext";



const PostByCity = (props) => {
    const classes = useStyle();
    const {selectedCity}=useLayoutState();


    const[posts,setPosts]= useState([]);

    useEffect(()=>{
        getAllPosts((isOk,data) => {
            if(!isOk)
                alert(data.message);
                 else setPosts(data);
        });
    },[]);


    return(
        <div>
            <Sidebar/>
            <div className={classes.main}>
                <div className={classes.mainBrowser}>
                    <BrowsHeader categoryTitle={"همه آگهی ها"}/>
                    <Divider orientation={"horizontal"} className={classes.divider}/>
                    {<Posts postsData={posts}/>}
                </div>
            </div>
        </div>
    )


};

export default PostByCity;
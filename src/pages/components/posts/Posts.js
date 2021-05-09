import React from 'react';
import PostItem from "../postItem/PostItem";
import {Grid} from "@material-ui/core";
import useStyle from "./styles";


const Posts = ({postsData}) => {
const  classes = useStyle;

    return (
        <Grid container direction={"row"}  className={classes.root} >
            {postsData.map(item => <PostItem data={item}/>)}
        </Grid>
    );
};

export default Posts;
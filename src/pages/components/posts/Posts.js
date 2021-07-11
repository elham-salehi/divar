import React from 'react';
import PostItem from "../postItem/PostItem";
import {Grid} from "@material-ui/core";
import useStyle from "./styles";
import {useLayoutState} from "../../../context/LayoutContext";


const Posts = () => {
    const  classes = useStyle();
    const {postsByCity} = useLayoutState();

    return (
        <Grid item container direction={"row"}  className={classes.posts} >
            {postsByCity.map(item => <PostItem data={item}/>)}
        </Grid>
    );
};

export default Posts;
import React from 'react';
import PostItem from "../postItem/PostItem";
import {Grid} from "@material-ui/core";
import {useLayoutState} from "../../../context/LayoutContext";


const Posts = () => {
    const {postsByCity} = useLayoutState();

    return (
        <Grid item container direction={"row"} >
            {postsByCity.map(item => <PostItem data={item}/>)}
        </Grid>
    );
};

export default Posts;
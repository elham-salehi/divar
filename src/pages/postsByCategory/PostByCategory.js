import React from 'react';
import BrowsHeader from "../../components/browsHeader/BrowsHeader";
import {Divider} from "@material-ui/core";
import useStyle from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";
import Grid from "@material-ui/core/Grid";

const PostByCategory = (props) => {
    const classes=useStyle();
    return (
        <Grid item container direction={"row"}>
            <Sidebar/>
            <Grid item container direction={"column"} className={classes.main}>
                <Grid className={classes.browser}>
                    <BrowsHeader categoryTitle={props.match.params.category}/>
                    <Divider orientation={"horizontal"} className={classes.divider}/>
                    <h3>category name</h3>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PostByCategory;
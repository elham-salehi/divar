import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import useStyle from "./styles";
import Grid from "@material-ui/core/Grid";

const NewPostButton = () => {
    const classes= useStyle();
    return (
        <Grid item container className={classes.newPost} direction={"row-reverse"}>
            <Link to={"/new"}>
                    <Button variant={"contained"} color={"primary"} className={classes.newPostBtn}>ثبت رایگان آگهی</Button>
            </Link>
        </Grid>
    );
};

export default NewPostButton;
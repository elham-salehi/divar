import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import useStyle from "./styles";

const NewPostButton = () => {
    const classes= useStyle();
    return (
        <div  className={classes.root}>
            <Link to={"/new"}>
                    <Button variant={"contained"} color={"primary"} className={classes.newPostBtn}>ثبت رایگان آگهی</Button>
            </Link>
        </div>
    );
};

export default NewPostButton;
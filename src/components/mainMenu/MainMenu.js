import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";

const MainMenu = () => {
    const classes = useStyle();
    return (
        <Grid item container direction={"row-reverse"} alignItems={"center"} className={classes.root}>

            <Link to={"/"}>
                <Grid item className={classes.navItem} >
                    <Typography className={classes.navItem}>تماس با ما</Typography>
                </Grid>
            </Link>
            <Link to={"/"}>
                <Grid item>
                    <Typography className={classes.navItem}>پشتیبانی و قوانین</Typography>
                </Grid>
            </Link>
            <Link to={"/"}>
                <Grid item>
                    <Typography className={classes.navItem}>بلاگ</Typography>
                </Grid>
            </Link>
            <Link to={"/"}>
                <Grid item>
                    <Typography className={classes.navItem}>درباره ما</Typography>
                </Grid>
            </Link>
            <Link to={"/"}>
                <Grid item>
                    <Typography className={classes.navItem}>چت</Typography>
                </Grid>
            </Link>
            <Link to={"/my-divar"}>
                <Grid item>
                    <Typography className={classes.navItem}>دیوار من</Typography>
                </Grid>
            </Link>
        </Grid>
    )


}

export default MainMenu;
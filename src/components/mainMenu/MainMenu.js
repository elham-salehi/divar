import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link, Redirect} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";
import {useLayoutState} from "../../context/LayoutContext";
import {Button, ButtonBase} from "@material-ui/core";

const MainMenu = () => {
    const classes = useStyle();
    const {selectedCity}=useLayoutState();
    const isLogin = () => !!localStorage.getItem("x-auth-token");
    const showLogout = () => {
        if(isLogin()) {
            return (
            <Grid item className={classes.navItem} >
                <Link to={`/${selectedCity}`}  component={Button} onClick={ () =>  localStorage.clear()}>خروج</Link>
            </Grid>
            )
        }
    }
    return (
        <Grid item container direction={"row-reverse"} alignItems={"center"} className={classes.mainMenu}>
            {showLogout()}
            <Grid item className={classes.navItem} >
                <Link to={"/"} component={Button}>تماس با ما</Link>
            </Grid>
            <Grid item className={classes.navItem}>
                <Link to={"/"} component={Button}>پشتیبانی و قوانین</Link>
            </Grid>
            <Grid item className={classes.navItem} >
                <Link to={"/"} component={Button}>بلاگ</Link>
            </Grid>
            <Grid item className={classes.navItem} >
                <Link to={"/"} component={Button}>درباره ما</Link>
            </Grid>
            <Grid item className={classes.navItem} >
                <Link to={"/"} component={Button}>چت</Link>
            </Grid>
            <Grid item className={classes.navItem} >
                <Link to={"/my-divar/my-posts"} component={Button}>دیوار من</Link>
            </Grid>

        </Grid>
    )


}

export default MainMenu;
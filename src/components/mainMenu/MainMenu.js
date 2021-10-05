import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import useStyle from "./styles";
import {useLayoutState} from "../../context/LayoutContext";
import {Button} from "@material-ui/core";

const MainMenu = () => {
    const classes = useStyle();
    const {selectedCity}=useLayoutState();
    const isLogin = () => !!localStorage.getItem("x-auth-token");
    const showLogout = () => {
        if(isLogin()) {
            return (
            <Grid item>
                <Button onClick={ () =>  localStorage.clear()}><Link to={`/${selectedCity}`} className={classes.navItem}>خروج</Link></Button>
            </Grid>
            )
        }
    }
    return (
        <Grid item container direction={"row-reverse"} alignItems={"center"} className={classes.mainMenu}>
            {showLogout()}
            <Grid item>
                <Button><Link to={"/"} className={classes.navItem}>تماس با ما</Link></Button>
            </Grid>
            <Grid item>
                <Button><Link to={"/"} className={classes.navItem}>پشتیبانی و قوانین</Link></Button>
            </Grid>
            <Grid item>
                <Button><Link to={"/"} className={classes.navItem}>بلاگ</Link></Button>
            </Grid>
            <Grid item>
                <Button><Link to={"/"} className={classes.navItem}>درباره ما</Link></Button>
            </Grid>
            <Grid item>
                <Button><Link to={"/chat"} className={classes.navItem}>چت</Link></Button>
            </Grid>
            <Grid item>
                <Button><Link to={"/my-divar/my-posts"} className={classes.navItem}>دیوار من</Link></Button>
            </Grid>

        </Grid>
    )


}

export default MainMenu;
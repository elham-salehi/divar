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
            <Grid item className={classes.navItem} >
                <Button onClick={ () =>  localStorage.clear()}><Link to={`/${selectedCity}`}>خروج</Link></Button>
            </Grid>
            )
        }
    }
    return (
        <Grid item container direction={"row-reverse"} alignItems={"center"} className={classes.mainMenu}>
            {showLogout()}
            <Grid item className={classes.navItem} >
                <Button><Link to={"/"}>تماس با ما</Link></Button>
            </Grid>
            <Grid item className={classes.navItem}>
                <Button><Link to={"/"}>پشتیبانی و قوانین</Link></Button>
            </Grid>
            <Grid item className={classes.navItem} >
                <Button><Link to={"/"}>بلاگ</Link></Button>
            </Grid>
            <Grid item className={classes.navItem} >
                <Button><Link to={"/"}>درباره ما</Link></Button>
            </Grid>
            <Grid item className={classes.navItem} >
                <Button><Link to={"/chat"}>چت</Link></Button>
            </Grid>
            <Grid item className={classes.navItem} >
                <Button><Link to={"/my-divar/my-posts"}>دیوار من</Link></Button>
            </Grid>

        </Grid>
    )


}

export default MainMenu;
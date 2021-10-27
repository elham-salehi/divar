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
                <Link to={"/"} ><Button className={classes.navItem}>تماس با ما</Button></Link>
            </Grid>
            <Grid item>
                <Link to={"/"} ><Button className={classes.navItem}>پشتیبانی و قوانین</Button></Link>
            </Grid>
            <Grid item>
                <Link to={"/"} ><Button className={classes.navItem}>بلاگ</Button></Link>
            </Grid>
            <Grid item>
                <Link to={"/"} ><Button className={classes.navItem}>درباره ما</Button></Link>
            </Grid>
            <Grid item>
                <Link to={"/chat"} ><Button className={classes.navItem}>چت</Button></Link>
            </Grid>
            <Grid item>
                <Link to={"/my-divar/my-posts"} ><Button className={classes.navItem}>دیوار من</Button></Link>
            </Grid>

        </Grid>
    )


}

export default MainMenu;
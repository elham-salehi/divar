import React from 'react';
import useStyle from "../footer/styles";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Divider} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
    const classes = useStyle();
    return (
        <Grid item container className={classes.footer} alignItems={"center"}>
          <Grid item container alignItems={"center"} xs={1}>
              <Link to={"/"} className={classNames(classes.logo,classes.footerLink)}>
                  <img width={32} height={32} src={"/images/logo.svg"} alt={"divar logo"}/>
              </Link>
          </Grid>
            <Grid item container alignItems={"center"} justifyContent={"center"} xs={7}>
                <Link  to={"/"} className={classes.footerLink}>دربارهٔ دیوار</Link>
                <Divider orientation={"vertical"} className={classes.divider}/>
                <Link  to={"/"} className={classes.footerLink}>پشتیبانی و قوانین</Link>
                <Divider orientation={"vertical"} className={classes.divider}/>
                <Link  to={"/"} className={classes.footerLink}>بلاگ دیوار</Link>
            </Grid>
            <Grid item container alignItems={"center"} justifyContent={"flex-end"} xs={4} >
                <Link to={"/"} className={classNames(classes.footerLink,classes.footerSocialLink)}>
                    <TwitterIcon style={{fontSize:"1.25rem"}}/>
                </Link>
                <Link to={"/"} className={classNames(classes.footerLink,classes.footerSocialLink)}>
                    <InstagramIcon style={{fontSize:"1.25rem"}}/>
                </Link>
                <Link to={"/"} className={classNames(classes.footerLink,classes.footerSocialLink)}>
                    <LinkedInIcon style={{fontSize:"1.25rem"}}/>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Footer;
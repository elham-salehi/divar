import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import useStyle from "./styles";
import {toggleDropDown, closeDropDown, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

const DropDownMenu = () => {
    const classes= useStyle();
    const {dropDownOpen}=useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const hide = (e) => {
        if(e && e.relatedTarget){
            e.relatedTarget.click();
        }
        closeDropDown(layoutDispatch)
    }
    return (
        <Grid className={classes.dropdownMenu}>
            <Button className={classes.dropdownButton}  onClick={() => toggleDropDown(layoutDispatch)} onBlur={hide} onTouchCancel={hide} >
             <MenuIcon/>
            </Button>
              <Grid className={classes.dropdownContainer} style={{display: dropDownOpen ? 'block' : 'none' }}>
                  <ul className={classes.dropdownList}>
                      <Link to={"/my-divar/my-posts"} >
                          <Button className={classes.dropdownLink} labelestyle={{position: 'absolute',top:0,left: -10}}>
                            <li>دیوار من</li>
                          </Button>
                      </Link>
                      <Link to={"/chat"}>
                          <Button className={classes.dropdownLink}>
                              <li>چت</li>
                          </Button>
                      </Link>
                      <Link to={"/about-us"}>
                          <Button className={classes.dropdownLink}>
                             <li>درباره ما</li>
                          </Button>
                      </Link>
                      <Link to={"/blog"}>
                          <Button className={classes.dropdownLink}>
                              <li>بلاگ</li>
                          </Button>
                      </Link>
                      <Link to={"/"}>
                          <Button className={classes.dropdownLink}>
                             <li>پشتیبانی و قوانین</li>
                          </Button>
                      </Link>
                      <Link to={"/contact-us"}>
                          <Button className={classes.dropdownLink}>
                              <li>تماس با ما</li>
                          </Button>
                      </Link>
                  </ul>
              </Grid>
        </Grid>
    );
};

export default DropDownMenu;
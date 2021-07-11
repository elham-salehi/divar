import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useStyle from "./styles";
import {toggleDropDown, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
const DropDownMenu = () => {
    const classes= useStyle();
    const {dropDownOpen}=useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup={dropDownOpen} onClick={() => {toggleDropDown(layoutDispatch)}}  >
              <div className={classes.menuIcon}><MenuIcon/> </div>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={"div"}
                keepMounted
                className={classes.dropdownMenu}
                open={dropDownOpen}
                onClose={() => {toggleDropDown(layoutDispatch)}}
            >
                <MenuItem>دیوار من</MenuItem>
                <MenuItem>چت</MenuItem>
                <MenuItem>درباره ما</MenuItem>
                <MenuItem>بلاگ</MenuItem>
                <MenuItem>پشتیبانی و قوانین</MenuItem>
                <MenuItem>تماس با ما</MenuItem>
            </Menu>
        </div>
    );
};

export default DropDownMenu;
import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Button, Grid, useMediaQuery, useTheme} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {getAllCategoriesApi} from "../../api/api-categories";
import {setCategories, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";

const BrowsHeader = ({categoryTitle}) => {
    const classes = useStyle();
    const [showDropdown,setShowDropdown] = useState(false);
    const [value,setValue] = useState(categoryTitle);
    const layoutDispatch = useLayoutDispatch();
    const {categories}= useLayoutState();
    const theme= useTheme();
    const isTabletSize= useMediaQuery(theme.breakpoints.down(1100));
    const hide = (e) => {
        if(e && e.relatedTarget){
            e.relatedTarget.click();
        }
        setShowDropdown(false);
    }
    useEffect(()=>{
        getAllCategoriesApi((isOk,data) => {
            if (isOk){
                setCategories(layoutDispatch, data);
            }
            else{
                alert(data);
            }
        })

    },[layoutDispatch]);
    return (
           <Grid container direction={"row"} alignItems={"center"} className={classes.searchCat}>
               {(!isTabletSize &&
               <Grid item className={classes.dropdownContainer}>
                  <Button variant={"contained"}  className={classes.dropdownBtn} onClick={() => setShowDropdown(!showDropdown)} onBlur={hide}>
                      {value}
                      <ExpandMoreIcon/>
                  </Button>
                       <Grid container direction={"column"} className={classes.dropdownList} style={{display: showDropdown ? 'block' : 'none' }}>
                          <Grid item> <Button  className={classes.dropdownItem} onClick={() => setValue(categoryTitle)}>{categoryTitle}</Button></Grid>
                           {categories.map(item => <Grid item key={item._id}> <Button className={classes.dropdownItem} onClick={() => setValue(item.name)}>{item.name}</Button></Grid>)}
                       </Grid>
               </Grid>)}
               <Grid item className={classes.searchInputContainer}  >
                   <InputBase placeholder={`جستجو در ${value}` } className={classes.searchInput}/>
               </Grid>
           </Grid>
    );
};

export default BrowsHeader;
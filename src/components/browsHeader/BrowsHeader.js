import React from 'react';
import useStyle from "./styles";
import {Grid, useMediaQuery, useTheme} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BrowsHeader = ({categoryTitle}) => {
    const classes = useStyle();
    const theme= useTheme();
    const isTabletSize= useMediaQuery(theme.breakpoints.down(1100));
    return (

        <div className={classes.root}>
           <Grid container direction={"row"} alignItems={"center"} className={classes.searchCat}>
               {(!isTabletSize &&
               <Grid item  alignItems={"center"}>
                   <FormControl variant="filled" className={classes.formControl}>
                       <Select  labelId="label" id="select" value="10"  IconComponent={ExpandMoreIcon} className={classes.selectCat}>
                           <MenuItem value="10" alignItems={"center"}>{categoryTitle}</MenuItem>
                           <MenuItem value="20" alignItems={"center"}>Twenty</MenuItem>
                       </Select>
                   </FormControl>
               </Grid>)}
               <Grid item alignItems={"center"} >
                   <InputBase placeholder={`جستجو در${categoryTitle}` } className={classes.searchInput}/>
               </Grid>
           </Grid>
        </div>
    );
};

export default BrowsHeader;
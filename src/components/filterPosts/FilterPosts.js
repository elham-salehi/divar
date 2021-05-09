import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import useStyle from "./styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

const FilterPosts = () => {
    const classes=useStyle();
    return (
        <Grid container direction={"column"}>

            <Typography component="div">
                <Grid component="label" container alignItems="center" style={{padding:'20px'}}>
                    <Grid item>فقط آگهی‌های فروشگاه</Grid>
                    <Grid item className={classes.switchFilter}>
                        <Switch color={"primary"} size={"small"} name="checkedShop" />
                    </Grid>
                </Grid>
            </Typography>
            <Accordion style={{boxShadow:"unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>محل</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl className={classes.margin} style={{width:'100%'}}>
                        <InputLabel htmlFor="demo-customized-select-native">همه محله ها</InputLabel>
                        <NativeSelect
                            id="demo-customized-select-native"

                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion  style={{boxShadow:"unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>قیمت</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
            <Typography component="div">
                <Grid component="label" container alignItems="center" style={{padding:'20px'}}>
                    <Grid item>فقط عکس‌دار</Grid>
                    <Grid item className={classes.switchFilter}>
                        <Switch color={"primary"} size={"small"} name="checkedImage" />
                    </Grid>
                </Grid>
            </Typography>
            <Typography component="div">
                <Grid component="label" container alignItems="center" style={{padding:'20px'}}>
                    <Grid item>فقط فوری‌ها</Grid>
                    <Grid item className={classes.switchFilter}>
                        <Switch color={"primary"} size={"small"} name="checkedEmergency" />
                    </Grid>
                </Grid>
            </Typography>



        </Grid>
    );
};

export default FilterPosts;
import React from 'react';
import {Grid, Tab, Tabs} from "@material-ui/core";
import useStyle from "../myDivar/styles";
import {Link} from "react-router-dom";

const MyDivar = ({value}) => {
    const classes= useStyle();

    return (
            <Grid container direction={"column"} className={classes.root} justifyContent={"space-between"}>
                <Grid position="static">
                    <Tabs value={value}  aria-label="simple tabs example" indicatorColor="primary" textColor="primary" >
                        <Tab label="آگهی&zwnj;های من" component={Link}  to={'/my-divar/my-posts'}  className={classes.tabItem}/>
                        <Tab label="آگهی&zwnj;های نشان شده" component={Link}  to={'/my-divar/bookmarks'}  className={classes.tabItem}/>
                        <Tab label="بازدیدهای اخیر" component={Link}  to={'/my-divar/recent-seen'}  className={classes.tabItem}/>
                        <Tab label="یادداشت&zwnj;های من" component={Link}  to={'/my-divar/my-notes'}   className={classes.tabItem}/>
                    </Tabs>
                </Grid>
            </Grid>
    );
};

export default MyDivar;
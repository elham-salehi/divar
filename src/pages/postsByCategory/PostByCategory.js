import React from 'react';
import BrowsHeader from "../../components/browsHeader/BrowsHeader";
import {Divider} from "@material-ui/core";
import useStyle from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";

const PostByCategory = (props) => {
    const classes=useStyle();
    return (
        <div>
            <Sidebar/>
            <div className={classes.main}>
                <div className={classes.categoryBrowser}>
                    <BrowsHeader categoryTitle={props.match.params.category}/>
                    <Divider orientation={"horizontal"} className={classes.divider}/>
                    <h3>category name</h3>
                </div>
            </div>
        </div>
    );
};

export default PostByCategory;
import React from 'react';
import MyDivar from "../../myDivar/MyDivar";
import useStyle from "../bookmarks/styles";

const Bookmarks = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <MyDivar value={1} />
            item 2
        </div>
    );
};

export default Bookmarks;
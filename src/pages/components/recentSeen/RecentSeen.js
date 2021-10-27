import React from 'react';
import MyDivar from "../../myDivar/MyDivar";
import useStyle from "../recentSeen/styles";

const RecentSeen = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <MyDivar value={2}/>
           item 3
        </div>
    );
};

export default RecentSeen;
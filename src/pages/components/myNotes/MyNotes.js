import React from 'react';
import MyDivar from "../../myDivar/MyDivar";
import useStyle from "../myNotes/styles";

const MyNotes = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <MyDivar value={3}/>
            item 4
        </div>
    );
};

export default MyNotes;
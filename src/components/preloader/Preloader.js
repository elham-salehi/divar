import React from 'react';
import useStyle from "./styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Preloader = () => {
    const classes = useStyle();
    return (
        <Grid container direction={"column"} className={classes.root} justifyContent={"center"}>
            <Grid item container direction={"column"} alignItems={"center"} >
                <Grid item container className={classes.circles} alignItems={"center"} justifyContent={"center"} ><CircularProgress   variant="determinate"
                                               className={classes.bottom}
                                               size={40}
                                               thickness={4}

                                               value={100}/>
                    <CircularProgress
                        variant="indeterminate"
                        disableShrink
                        className={classes.top}
                        classes={{
                            circle: classes.circle,
                        }}
                        size={40}
                        thickness={4}
                    /></Grid>
                <Grid item><Typography>در حال دریافت...</Typography></Grid>
            </Grid>
        </Grid>
    );
};
export default Preloader;

import React from 'react';
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";

const MyPostItem = ({data}) => {
    const classes = useStyle();

    const timeAgo = (prevDate) => {
        const diff = Number(new Date()) - prevDate;
        const minute = 60 * 1000;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = day * 365;
        console.log({diff})
        switch (true) {
            case diff < minute:
                const seconds = Math.round(diff / 1000);
                return `${seconds} ${seconds > 10 ? 'ثانیه' : 'لحظاتی'} پیش`
            case diff < hour:
                return Math.round(diff / minute) + ' دقیقه پیش';
            case diff < day:
                return Math.round(diff / hour) + ' ساعت پیش';
            case diff < month:
                return Math.round(diff / day) + ' روز پیش';
            case diff < year:
                return Math.round(diff / month) + ' ماه پیش';
            case diff > year:
                return Math.round(diff / year) + ' سال پیش';
            default:
                return "";
        }
    };

    return (
            <Link to={{pathname:`/my-divar/my-posts/${data._id}`,data:data}} >
                <Grid  container direction={"row"} className={classes.myPostItem}>
                    <Grid item direction={"column"} alignItems={"center"} className={classes.myPostImg}  >
                        <img className={classes.myPostThumbnail} src={`http://localhost:3010/uploads/${data.images[0]}`}/>
                    </Grid>
                    <Grid item container  direction={"row"} alignItems={"stretch"} className={classes.myPostInfo} >
                        <Grid item container direction={"column"} className={classes.myPostInfoCol} justify={"space-between"} alignItems={"stretch"}>
                            <Grid item className={classes.myPostTitle}>{data.title}</Grid>
                            <Grid item className={classes.myPostDetails}>
                                {data.price} تومان<br/>{timeAgo(new Date(data.postTime).getTime())} در {data.district}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Link>

    );
};

export default MyPostItem;
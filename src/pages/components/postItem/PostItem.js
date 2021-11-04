import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";
import {Link} from "react-router-dom";
import NoPhotographyIcon from '@material-ui/icons/Photo';

const PostItem = ({data}) => {
    const classes = useStyle();

    const timeAgo = (prevDate) => {
        const diff = Number(new Date()) - prevDate;
        const minute = 60 * 1000;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = day * 365;
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

    const hasImage = () => {
        if(data.images.length > 0)
            return <img className={classes.postThumbnail} src={`https://divarapi.s3.ir-thr-at1.arvanstorage.com/${data.images[0]}`} alt={data.title}/>
        else
            return <Grid container direction={"column"} className={classes.imageBlock} alignItems={"center"} justifyContent={"center"}>
                <NoPhotographyIcon/>
            </Grid>
    }


    return (
        <Grid container item direction={"row"} className={classes.root} justifyContent={"flex-start"} lg={4} md={6} xs={12} >
            <Link to={`/posts/${data._id}`} >
                   <Grid  container direction={"row"} className={classes.postItem}>
                           <Grid item container  direction={"column"} alignItems={"center"} className={classes.postRight} >
                              <div className={classes.postDetails}>
                                  <Typography component={"h3"} className={classes.postTitle}>{data.title}</Typography>
                                  <Grid container direction={"column"} className={classes.postCaption} >
                                      <Grid item container>
                                          <Typography className={classes.captionTypography}>{data.price}</Typography>
                                      </Grid>
                                      <Grid item container direction={"row"} className={classes.captionTypography}>
                                          <Typography className={classes.captionTypography}>{timeAgo(new Date(data.postTime).getTime())} در {data.district}</Typography>
                                      </Grid>
                                  </Grid>
                              </div>
                           </Grid>
                           <Grid container item alignItems={"center"} className={classes.postImg}  >
                               {hasImage()}
                           </Grid>
                   </Grid>
          </Link>

           </Grid>

    );
};

export default PostItem;

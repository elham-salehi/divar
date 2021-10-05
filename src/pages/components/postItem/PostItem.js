import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";
import {Link} from "react-router-dom";
import NoPhotographyIcon from '@material-ui/icons/Photo';

const PostItem = ({data}) => {
    const classes = useStyle();

    const hasImage = () => {
        if(data.images.length > 0)
            return <img className={classes.postThumbnail} src={`https://divar-api.herokuapp.com/uploads/${data.images[0]}`} alt={data.title}/>
        else
            return <Grid container direction={"column"} className={classes.imageBlock} alignItems={"center"} justifyContent={"center"}>
                <NoPhotographyIcon/>
            </Grid>
    }


    return (
        <Grid container direction={"row"} className={classes.root} justifyContent={"flex-start"} lg={4} md={6} xs={12} >
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
                                          <Typography className={classes.timeTypography}>دو ساعت پیش در</Typography>
                                          <Typography className={classes.captionTypography}>{data.district}</Typography>
                                      </Grid>
                                  </Grid>
                              </div>
                           </Grid>
                           <Grid item alignItems={"center"} className={classes.postImg}  >
                               {hasImage()}
                           </Grid>
                   </Grid>
          </Link>

           </Grid>

    );
};

export default PostItem;

import React from 'react';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";
import {Link} from "react-router-dom";


const PostItem = ({data}) => {
    const classes = useStyle();


    return (
        <Grid container item  direction={"row"} className={classes.root} justifyContent={"center"} lg={4} md={6} xs={12} >
          {/*<Link to={{pathname:`/posts/${data._id}`,data:data}} >*/}
            <Link to={`/posts/${data._id}`} >
                   <Grid  container direction={"row"} className={classes.postItem}>
                           <Grid item  direction={"column"} alignItems={"center"} className={classes.postRight} >
                              <div className={classes.postDetails}>
                                  <Typography component={"h3"} className={classes.postTitle}>{data.title}</Typography>
                                  <Grid container direction={"column"} className={classes.postCaption} >
                                      <Grid item>
                                          <Typography className={classes.captionTypography}>{data.price}</Typography>
                                      </Grid>
                                      <Grid item container  direction={"row"}>
                                          <Typography className={classes.captionTypography}>دو ساعت پیش در</Typography>
                                          <Typography className={classes.captionTypography}>{data.city.name},{data.district}</Typography>
                                      </Grid>
                                  </Grid>
                              </div>
                           </Grid>
                           <Grid item alignItems={"center"} className={classes.postImg}  >
                                <img className={classes.postThumbnail} src={`https://divar-api.herokuapp.com/uploads/${data.images[0]}`} alt={data.title}/>
                           </Grid>
                   </Grid>
          </Link>

           </Grid>

    );
};

export default PostItem;

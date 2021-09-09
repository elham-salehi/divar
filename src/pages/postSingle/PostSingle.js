import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Button, Divider, Grid, IconButton} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Link} from "react-router-dom";
import classnames from "classnames";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';
import {getPostByIDApi} from "../../api/api-posts";

const PostSingle = (props) => {
    const classes = useStyle();
    const [post,setPost]= useState([]);
    const [category,setCategory]= useState([]);
    const [user,setUser]= useState([]);
    const [city,setCity]= useState([]);

    useEffect(()=>{
        getPostByIDApi(props.match.params.id,(isOk,data) => {
            if(!isOk) {
                console.log(isOk, data)
            }
            else {
                console.log('data', {data})
                setCategory(data.category);
                setCity(data.city);
                setUser(data.user);
                setPost(data);
            }
        });

    },[props.match.params.id]);
    return (
        <Grid container direction={"row"} className={classes.root}>
            <Grid item direction={"row"} alignItems={"center"} className={classes.breadCrumbs}>
                <span>{category.name}</span>
                <span style={{padding:15,position:"relative"}}><ArrowBackIosIcon style={{fontSize:"0.75rem",position:"absolute",top:17,left:12}}/></span>
                <span>{post.title}</span>
            </Grid>
          <Grid item container direction={"row"}>
              <Grid item container direction={"column"} className={classes.postDetails}>
                  <Grid item direction={"row"}>
                      <h1>{post.title}</h1>
                      <Typography className={classes.postSubtitle}>{city.name},{post.district} | {category.name}</Typography>
                  </Grid>
                  <Grid container item direction={"row"}>
                      <Grid item className={classes.btnContainer}>
                          <Link to={"/"} >
                              <Button variant={"contained"} color={"primary"} className={classes.button} >اطلاعات تماس</Button>
                          </Link>
                      </Grid>
                      <Grid item className={classes.btnContainer}>
                          <Link to={`/chat/${post._id}`} >
                              <Button variant={"outlined"} color={"white"} className={classnames(classes.button,classes.chatBtn)}>چت</Button>
                          </Link>
                      </Grid>
                      <Grid item className={classes.iconBtnContainer}>
                          <Link to={"/"} >
                              <IconButton aria-label="bookmark">
                                  <BookmarkBorderIcon />
                              </IconButton>
                          </Link>
                          <Link to={"/"} >
                              <IconButton aria-label="share">
                                  <ShareIcon />
                              </IconButton>
                          </Link>
                      </Grid>
                  </Grid>
                  <Grid container item direction={"row"} className={classes.postPrice}>
                        <Typography className={classes.priceLabel}>قیمت</Typography>
                        <Typography className={classes.price}>{post.price}تومان</Typography>
                  </Grid>
                  <Divider orientation={"horizontal"} className={classes.divider}/>
                  <Grid container item direction={"column"} className={classes.postDescription}>
                      <Typography className={classes.descriptionLabel}>توضیحات</Typography>
                      <Typography className={classes.description}>{post.description}</Typography>
                  </Grid>
              </Grid>
              <Grid item container direction={"column"} className={classes.postNote}>
                  <Grid item className={classes.postImage}>
                      <img src={`http://localhost:3010/uploads/${post.images}`} alt={post.title} style={{width:'100%'}} />
                  </Grid>
                  <Grid item direction={"row"} className={classes.note}>
                      <TextareaAutosize className={classes.noteArea}    placeholder={"یادداشت شما..."}/>
                      <Typography component={"p"} className={classes.noteHint}>یادداشت تنها برای شما قابل مشاهده است و پس از حذف آگهی، پاک خواهد شد.</Typography>
                  </Grid>
                  <Grid item direction={"row"}>
                      <Typography component={"p"} className={classes.noteHint}>دیوار هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد.</Typography>
                  </Grid>
              </Grid>
          </Grid>

        </Grid>
    );
};

export default PostSingle;
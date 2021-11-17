import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Divider, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import IconComponents from "./IconComponents";
import FilterPosts from "../filterPosts/FilterPosts";
import {getAllCategoriesApi} from "../../api/api-categories";
import {setCategories, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";

const Categories = ({data}) => {
    const classes = useStyle();
    return (

            <ButtonBase style={{width:"100%"}}>
                    <Link to={{pathname:`/categories/${data.name}`,data:data}} className={classes.catStyle}>
                           <Grid container direction={"row"} alignItems={"center"} >
                               <IconComponents tag={data.id}/>
                               <span style={{marginRight: 10}}>{data.name}</span>
                           </Grid>
                    </Link>
            </ButtonBase>

    );
};

const Sidebar = () => {
    const classes = useStyle();
    const layoutDispatch = useLayoutDispatch();
    const {categories}= useLayoutState();


    useEffect(()=>{
        getAllCategoriesApi((isOk,data) => {
            if (isOk){
                setCategories(layoutDispatch, data);
        }
            else{
                alert(data);
            }
        })

    },[layoutDispatch]);


    return (
        <Grid container item  direction={"column"}  className={classes.sidebar}>
            <Grid>
                <Typography className={classes.categoriesTitle}>دسته بندی ها</Typography>
                {
                    categories.map(item => <Categories key={item._id} data={item}/>)
                }
                <Divider/>
                <FilterPosts/>
            </Grid>

        </Grid>
    );
};

export default Sidebar;
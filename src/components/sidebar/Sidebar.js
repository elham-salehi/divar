import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Divider, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import axios from "axios";
import IconComponents from "./IconComponents";
import FilterPosts from "../filterPosts/FilterPosts";
import {getAllCategoriesApi} from "../../api/api-categories";
import {getAllCitiesApi} from "../../api/api-cities";
import {setCategories, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import Preloader from "../preloader/Preloader";

const Categories = ({data}) => {
    const classes = useStyle();
    return (
        <Link to={{pathname:`/categories/${data.name}`,data:data}} component={ButtonBase} style={{width:"100%"}}>
            <Grid item container direction={"row"} alignItems={"center"} className={classes.catStyle}>
                <IconComponents tag={data.id}/>
                <Typography className={classes.catName} >{data.name}</Typography>
            </Grid>
        </Link>

    );
};
let p=0;

const Sidebar = () => {
    const classes = useStyle({p});
    const layoutDispatch = useLayoutDispatch();
    const {categories}= useLayoutState();
    const [scrolled,setScrolled]=useState(false);
    const [isLoading,setIsLoading]= useState(true);


    const handleScroll=() => {
        const offset=window.scrollY;
        const elem=document.getElementById("aside");
        if(elem)
        {
            p=elem.offsetHeight-window.innerHeight;
            if(offset > p){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }



    }

    useEffect(()=>{
        getAllCategoriesApi((isOk,data) => {
            if (isOk){
                setCategories(layoutDispatch, data);
                setIsLoading(false);
        }
            else{
                alert(data);
            }
        })

    },[]);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let sidebarClasses=[];
    if(scrolled){
        sidebarClasses.push(classes.fixSidebar);
    }


    return (
        isLoading ? <Preloader/> :
        <Grid item  direction={"column"}  className={classes.sidebar}>
            <Grid id={"aside"} className={sidebarClasses.join(" ")}>
                <Typography className={classes.categoriesTitle}>دسته بندی ها</Typography>
                {
                    categories.map(item => <Categories data={item}/>)
                }
                <Divider/>
                <FilterPosts/>
            </Grid>

        </Grid>
    );
};
export const point = {
    scrollPoint:p,
};
export default Sidebar;
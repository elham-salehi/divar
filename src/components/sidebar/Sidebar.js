import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Divider, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import axios from "axios";
import IconComponents from "./IconComponents";
import FilterPosts from "../filterPosts/FilterPosts";

const Categories = ({data}) => {
    const classes = useStyle();
    return (

        <ButtonBase style={{width:'100%'}}>
            <Link to={{pathname:`/categories/${data.name}`,data:data}} style={{width:"100%"}}>
                <Grid item container direction={"row"} alignItems={"center"} className={classes.catStyle}>
                    <IconComponents tag={data.id}/>
                    <Typography className={classes.catName} >{data.name}</Typography>
                </Grid>
            </Link>
        </ButtonBase>


    );
};
let p=0;

const Sidebar = () => {
    const classes = useStyle({p});
    const[categories,setCategories]= useState([]);
    const [scrolled,setScrolled]=React.useState(false);


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
        axios.get("http://localhost:4000/categories")
            .then(response => {
                const data=response.data;
                setCategories(data);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let sidebarClasses=[];
    if(scrolled){
        sidebarClasses.push(classes.sidebar);
    }


    return (
        <Grid  container direction={"column"}  className={classes.root}>
            <div id={"aside"} className={sidebarClasses.join(" ")}>
                <Typography className={classes.categoriesTitle}>دسته بندی ها</Typography>
                {
                    categories.map(item => <Categories data={item}/>)
                }
                <Divider/>
                <FilterPosts/>
            </div>

        </Grid>
    );
};
export const point = {
    scrollPoint:p,
};
export default Sidebar;
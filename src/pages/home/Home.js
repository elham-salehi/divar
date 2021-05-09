import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Divider, Grid} from "@material-ui/core";
import {selectCity, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import {getAllCities} from "../../api/api-cities";


const Home = () => {
    const classes = useStyle();
    const {selectedCity}=useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const[cities,setCities]= useState([]);
    const[search,setSearch]= useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const mostVisitedCities=["رشت","قم","کرمانشاه","تبریز","اهواز","اصفهان","شیراز","کرج","مشهد","تهران"];

    useEffect(()=>{
        getAllCities((isOk,data) => {
            if(!isOk)
                alert(data.message);
            else{
                setCities(data);
            }
        })

    },[]);
    useEffect(() => {
        setFilteredCities(
            cities.filter((city) =>
                String(city.name).toLowerCase().includes(search.toLowerCase())
            )
        )

    }, [cities,search]);
    return (
        <Grid container direction={"row"}>
            <Grid item container direction={"column"} className={classes.descriptionContainer} alignItems={"center"}>
              <div className={classes.description}>
                  <p style={{"line-height":"25px"}}>دیوار! پایگاه خرید و فروش بی‌واسطه</p>
                  <p style={{"line-height":"25px"}}>اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد.</p>
                  <p style={{"line-height":"25px"}}>گر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به دیوار.</p>
                  <p style={{"line-height":"25px"}}>علاوه بر وبسایت، می‌تونی از دیوار روی دستگاه‌های اندرویدی، آیفون و آیپد هم استفاده کنی.</p>
              </div>
                <Divider className={classes.divider} orientation={"horizontal"}/>
            </Grid>
            <Grid item container direction={"column"} className={classes.cityContainer} alignItems={"center"} justify={"center"}>
                     <Grid item container direction={"row"} className={classes.paper}>
                        <Grid container item direction={"row"} className={classes.modalHeader}>
                            <Grid item className={classes.modalTitle}>انتخاب شهر</Grid>
                        </Grid>
                        <Grid item container direction={"column"} className={classes.modalBody}>
                            <Grid item >
                                <InputBase placeholder={"جستجوی سریع نام شهر...."}   onChange={(e) => setSearch(e.target.value)}  type="text"
                                           endAdornment={ <SearchIcon style={{margin:"7px"}}/>} className={classes.searchInput} />
                            </Grid>
                            <Grid item className={classes.cityGroupHeader}>
                                شهرهای پربازدید
                            </Grid>
                            <Grid item container className={classes.cities}>
                                {mostVisitedCities.map(item => (<Grid item className={classes.cityItem}>
                                    <div onClick={() => {selectCity(layoutDispatch,item)
                                    }}  className={classes.cityButton} >{item}</div></Grid>))}
                            </Grid>
                            <Grid item className={classes.cityGroupHeader}>
                                همه‌ی شهرها
                            </Grid>
                            <Grid item container className={classes.cities}>
                                {filteredCities.map(item => (
                                    <Grid item className={classes.cityItem}>
                                        <Link to={"/cities/"+item.name}>
                                            <div onClick={() => {selectCity(layoutDispatch,item.name)
                                                setFilteredCities(cities);
                                            }} className={classes.cityButton} >{item.name}</div></Link></Grid>))}
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
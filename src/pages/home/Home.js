import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import {Divider, Grid} from "@material-ui/core";
import {
    setSelectedCity,
    setIsLoading,
    useLayoutDispatch,
    useLayoutState,
    getAllCities
} from "../../context/LayoutContext";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Preloader from "../../components/preloader/Preloader";


const Home = () => {
    const classes = useStyle();
    const {isLoading}= useLayoutState();
    const {cities}= useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const[search,setSearch]= useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const mostVisitedCities=["رشت","قم","کرمانشاه","تبریز","اهواز","اصفهان","شیراز","کرج","مشهد","تهران"];

    useEffect(()=>{
        setIsLoading(layoutDispatch,true);
        getAllCities(layoutDispatch,(done)=>{
            if(done)
                setIsLoading(layoutDispatch,false);
        });


    },[layoutDispatch]);
    useEffect(() => {
        setFilteredCities(
            cities.filter((city) =>
                String(city.name).toLowerCase().includes(search.toLowerCase())
            )
        );

    }, [cities,search]);
    return (
        isLoading ? <Preloader/> :
        <Grid container direction={"row-reverse"} >
            <Grid item container direction={"column"} className={classes.cityContainer} alignItems={"center"} justifyContent={"center"}>
                     <Grid item container direction={"row"} className={classes.paper}>
                        <Grid container item direction={"row"} className={classes.modalHeader}>
                            <Grid item className={classes.modalTitle}>انتخاب شهر</Grid>
                        </Grid>
                        <Grid item container direction={"column"} className={classes.modalBody}>
                            <Grid item className={classes.inputContainer} >
                                <InputBase placeholder={"جستجوی سریع نام شهر...."}   onChange={(e) =>{setSearch(e.target.value)}}  type="text"
                                           endAdornment={ <SearchIcon style={{margin:"7px"}}/>} className={classes.searchInput} classes={{focused:classes.inputBaseFocused}}  />
                            </Grid>
                            <Grid item container style={{display: search ? 'none' : 'flex' }}>
                                <Grid item className={classes.cityGroupHeader}>
                                    شهرهای پربازدید
                                </Grid>
                                <Grid item container className={classes.cities}>
                                    {mostVisitedCities.map((item,index) => (<Grid item key={index} className={classes.cityItem}>
                                        <Link to={"/" + item}>
                                            <div onClick={() => {
                                                setSelectedCity(layoutDispatch, item)
                                            }} className={classes.cityButton}>{item}
                                            </div>
                                        </Link>
                                    </Grid>))}
                                </Grid>
                            </Grid>
                            <Grid item className={classes.cityGroupHeader}>
                                همه‌ی شهرها
                            </Grid>
                            <Grid item container className={classes.cities}>
                                {filteredCities.map(item => (
                                    <Grid item key={item._id} className={classes.cityItem}>
                                        <Link to={"/"+item.name}>
                                            <div onClick={() => {setSelectedCity(layoutDispatch,item.name)
                                                setFilteredCities(cities);
                                            }} className={classes.cityButton} >{item.name}</div></Link></Grid>))}
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid item container direction={"column"} className={classes.descriptionContainer} >
                <Grid item className={classes.description}>
                    <p style={{lineHeight:"25px"}}>دیوار! پایگاه خرید و فروش بی‌واسطه</p>
                    <p style={{lineHeight:"25px"}}>اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد.</p>
                    <p style={{lineHeight:"25px"}}>اگر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به دیوار.</p>
                    <p style={{lineHeight:"25px"}}>علاوه بر وبسایت، می‌تونی از دیوار روی دستگاه‌های اندرویدی، آیفون و آیپد هم استفاده کنی.</p>
                    <Divider className={classes.divider} orientation={"horizontal"}/>
                    <p style={{textAlign:"center"}}>دیوار را در شبکه‌های اجتماعی دنبال کنید:</p>
                    <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <Link to={"/"} className={classes.socialMediaLink}>
                            <TwitterIcon style={{color:"#fff",fontSize:"1.25rem"}}/>
                        </Link>
                        <Link to={"/"} className={classes.socialMediaLink}>
                            <InstagramIcon style={{color:"#fff",fontSize:"1.25rem"}}/>
                        </Link>
                        <Link to={"/"} className={classes.socialMediaLink}>
                            <LinkedInIcon style={{color:"#fff",fontSize:"1.25rem"}}/>
                        </Link>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
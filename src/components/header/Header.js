import React, {useEffect, useState} from 'react';
import useStyle from "./styles";
import Grid from "@material-ui/core/Grid";
import {ButtonBase, Divider, useMediaQuery} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import {Link} from "react-router-dom";
import useTheme from "@material-ui/core/styles/useTheme";
import MainMenu from "../mainMenu/MainMenu";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import NewPostButton from "../newPostButton/NewPostButton";
import {toggleSelectCityModal,selectCity,useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import CloseIcon from '@material-ui/icons/Close';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {getAllCities} from "../../api/api-cities";
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Header = () => {
    const classes = useStyle();
    const theme= useTheme();
    const isTabletSize= useMediaQuery(theme.breakpoints.down(1100));
    const {selectCityModalOpen}=useLayoutState();
    const {selectedCity}=useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const[cities,setCities]= useState([]);
    const[search,setSearch]= useState("");
    const [filteredCities, setFilteredCities] = useState([]);


   const mostVisitedCities=["رشت","قم","کرمانشاه","تبریز","اهواز","اصفهان","شیراز","کرج","مشهد","تهران"];



    const [scrolled,setScrolled]=React.useState(false);
    const isScroll=() => {
        const offset=window.scrollY;
        if(offset > 0 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    const isCitySelected = () => {
        if(selectedCity)
            return "/cities/"+selectedCity;
        else
            return "/";
    }

    useEffect(() => {
        window.addEventListener('scroll',isScroll)
    })
    let headerClasses=[classes.root];
    if(scrolled){
        headerClasses.push(classes.scrolled);
    };
    const showSelectedCity = () => {
        if(selectedCity)
            return (<p>{selectedCity}</p>);
        else
            return (<p>انتخاب شهر</p>);
    }
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
        <div className={headerClasses.join(" ")}>
            <div className={classes.contentHeader}>
                   <Grid container direction={"row"} alignItems={"center"} >
                       <Grid item container direction={"row"} alignItems={"center"} className={classes.rightHeader}>

                               <Link to={isCitySelected()}>
                                   <Grid item className={classes.logo}>
                                      <img src={"/images/logo.svg"}/>
                                   </Grid>
                               </Link>

                           <Grid item style={{marginRight:"15px"}}>
                               <ButtonBase
                                size={"large"}
                                value={selectedCity}
                               className={classes.selectCityButton}
                                   onClick={()=>{toggleSelectCityModal(layoutDispatch)}}
                               >
                                   {showSelectedCity()}
                                   <LocationOnIcon/>
                               </ButtonBase>
                                   <Modal
                                       className={classes.modal}
                                       open={selectCityModalOpen}
                                       onClose={() => {toggleSelectCityModal(layoutDispatch)}}
                                   >

                                           <Grid container direction={"row"} className={classes.paper}>
                                               <Grid container item direction={"row"} className={classes.modalHeader}>
                                                   <Grid item className={classes.modalTitle}>انتخاب شهر</Grid>
                                                   <Grid item>
                                                       <ButtonBase onClick={() => {toggleSelectCityModal(layoutDispatch)}}>
                                                           <CloseIcon fontWeight={600}/>
                                                       </ButtonBase>
                                                   </Grid>
                                               </Grid>
                                               <Grid container item direction={"column"} className={classes.modalBody}>
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
                                                               toggleSelectCityModal(layoutDispatch)
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
                                                               toggleSelectCityModal(layoutDispatch);
                                                                   setFilteredCities(cities);
                                                           }} className={classes.cityButton} >{item.name}</div></Link></Grid>))}
                                                   </Grid>
                                               </Grid>
                                           </Grid>

                                   </Modal>
                           </Grid>
                       </Grid>
                       {!isTabletSize && <MainMenu/>}
                        <NewPostButton/>
                       {isTabletSize && <DropDownMenu/>}
                   </Grid>
            </div>
        <Divider orientation={"horizontal"} className={classes.divider}/>
    </div>
    );
};

export default Header;
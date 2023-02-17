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
import {toggleSelectCityModal, setSelectedCity, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";
import CloseIcon from '@material-ui/icons/Close';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {getAllCitiesApi} from "../../api/api-cities";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from "@material-ui/core/Button";


const Header = () => {
    const classes = useStyle();
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down(1100));
    const isPhoneSize = useMediaQuery(theme.breakpoints.down(568));
    const {selectCityModalOpen} = useLayoutState();
    const {selectedCity} = useLayoutState();
    const layoutDispatch = useLayoutDispatch();
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const mostVisitedCities=["تهران","مشهد","کرج","شیراز","اصفهان","اهواز","تبریز","کرمانشاه","قم","رشت"];


    useEffect(() => {
        getAllCitiesApi((isOk,data) => {
            if(!isOk)
                alert(data);
            else{
                setCities(data);
            }
        });
    },[setCities])
    const showSelectedCity = () => {
        if (!isPhoneSize)
        {
            if (selectedCity)
                return (<>
                    <Divider orientation={"vertical"} className={classes.divider}/>
                    <Button
                    value={selectedCity}
                    className={classes.selectCityButton}
                    onClick={() => {
                        toggleSelectCityModal(layoutDispatch)
                    }}
                    startIcon={<LocationOnIcon/>}
                >
                    {selectedCity}
                </Button>
                </>);
            else
                return (<>
                    <Divider orientation={"vertical"} className={classes.divider}/>
                    <Button
                    className={classes.selectCityButton}
                    onClick={() => {
                        toggleSelectCityModal(layoutDispatch)
                    }}
                    startIcon={<LocationOnIcon/>}
                >
                    انتخاب شهر
                </Button>
                    </>);
        }
    }
    useEffect(() => {
        setFilteredCities(
            cities.filter((city) =>
                String(city.name).toLowerCase().includes(search.toLowerCase())
            )
        )

    }, [cities, search]);
    return (
        <Grid item container direction={"row"} alignItems={"center"} className={classes.header}>
                    <Grid item container direction={"row"} alignItems={"center"} className={classes.rightHeader}>
                        <Link to={ "/" + selectedCity}>
                            <Grid item >
                                <img width={48} height={48} className={classes.logo} src={"/images/logo.svg"} alt={"divar logo"}/>
                            </Grid>
                        </Link>
                        {showSelectedCity()}
                        <Modal
                            className={classes.modal}
                            open={selectCityModalOpen}
                            onClose={() => {
                                toggleSelectCityModal(layoutDispatch)
                            }}
                        >

                            <Grid container direction={"column"} className={classes.paper}>
                                <Grid item container direction={"row"} className={classes.modalHeader}>
                                    <Grid item className={classes.modalTitle}>انتخاب شهر</Grid>
                                    <Grid item>
                                        <ButtonBase onClick={() => {
                                            toggleSelectCityModal(layoutDispatch)
                                        }}>
                                            <CloseIcon fontWeight={600}/>
                                        </ButtonBase>
                                    </Grid>
                                </Grid>
                                <Grid item container direction={"column"} className={classes.modalBody}>
                                    <Grid item>
                                        <InputBase placeholder={"جستجوی سریع نام شهر...."}
                                                   onChange={(e) => setSearch(e.target.value)} type="text"
                                                   endAdornment={<SearchIcon style={{margin: "7px"}}/>}
                                                   className={classes.searchInput} classes={{focused:classes.inputBaseFocused}}/>
                                    </Grid>
                                    <Grid item container direction={"column"} style={{display: search ? 'none' : 'flex' }}>
                                        <Grid item className={classes.cityGroupHeader}>
                                            شهرهای پربازدید
                                        </Grid>
                                        <Grid item container className={classes.cities}>
                                            {mostVisitedCities.map((item,index) => (<Grid item key={index} className={classes.cityItem}>
                                                <Link to={"/" + item}>
                                                    <div onClick={() => {
                                                        setSelectedCity(layoutDispatch, item)
                                                        toggleSelectCityModal(layoutDispatch)
                                                    }} className={classes.cityButton}>{item}
                                                    </div>
                                                </Link>
                                            </Grid>))}
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction={"column"}>
                                        <Grid item className={classes.cityGroupHeader}>
                                            همه‌ی شهرها
                                        </Grid>
                                        <Grid item container className={classes.cities}>
                                            {filteredCities.map(item => (
                                                <Grid item key={item._id} className={classes.cityItem}>
                                                    <Link to={"/" + item.name}>
                                                        <div onClick={() => {
                                                            setSelectedCity(layoutDispatch, item.name)
                                                            toggleSelectCityModal(layoutDispatch);
                                                            setFilteredCities(cities);
                                                        }} className={classes.cityButton}>{item.name}</div>
                                                    </Link></Grid>))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Modal>
                    </Grid>
                    {!isTabletSize && <MainMenu/>}
                    <NewPostButton/>
                    {isTabletSize && <DropDownMenu/>}
        </Grid>
    );
};

export default Header;
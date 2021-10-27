import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Grid} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {useAutocomplete} from "@material-ui/lab";
import {
    getAllCities,
    useLayoutDispatch,
    useLayoutState,
    setSelectedCity,
    setAutoCompleteSelectedCity
} from "../../../context/LayoutContext";
import useStyle from "./styles";

const CityAutoComplete = ({props}) => {
    const classes = useStyle();
    let location = useLocation();
    const layoutDispatch= useLayoutDispatch();
    const {cities}= useLayoutState();
    const {selectedCity} = useLayoutState();
    const {autoCompleteSelectedCity} = useLayoutState();


    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'cities-autocomplete',
        options: cities,
        defaultValue: {name: selectedCity},
        onChange:  (_,option) => {
            if(option.name)
                setAutoCompleteSelectedCity(layoutDispatch,option.name);
           if(location.pathname === '/')
               setSelectedCity(layoutDispatch,option.name);
        },
        getOptionSelected:(option, value) =>  option.name === value.name  ,
        getOptionLabel: (option) => option.name,
    });
    useEffect(() => {
        if(cities.length===0) {
            getAllCities(layoutDispatch, (done) => {

            });
        }
    },[layoutDispatch,cities.length]);
    return (
        <Grid item className={classes.cityAutoComplete}>
            <div {...getRootProps()} >
                <InputBase inputComponent={"input"} inputRef={props}  inputValue={autoCompleteSelectedCity}
                           className={classes.selectCityInput} classes={{focused:classes.inputBaseFocused}} {...getInputProps()}
                           placeholder={"انتخاب شهر..."}
                           startAdornment={<ArrowDropDownIcon/>}
                />
            </div>
            {groupedOptions.length > 0 ? (
                <ul className={classes.listBox} {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <li {...getOptionProps({ option, index })}>{option.name}</li>
                    ))}
                </ul>
            ) : null}
        </Grid>
    );
};

export default CityAutoComplete;
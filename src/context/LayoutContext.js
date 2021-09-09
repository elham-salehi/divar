import React from "react";
import {getPostsByCityApi} from "../api/api-posts";
import {getAllCitiesApi} from "../api/api-cities";

var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();


function layoutReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_DROP_DOWN_MENU":
            return {...state, dropDownOpen: !state.dropDownOpen};
        case "TOGGLE_SELECT_CITY_MODAL":
            return {...state, selectCityModalOpen: !state.selectCityModalOpen};
        case "REFRESH_SINGLE_POST":
            return {...state, singlePostData: action.payload};
        case "SET_CITIES":
            return {...state, cities: action.payload};
        case "SET_SELECTED_CITY":
            return {...state, selectedCity: action.payload};
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "TOGGLE_LOGIN_MODAL":
            return {...state, loginModalOpen: !state.loginModalOpen};
        case "TOGGLE_VALIDATION_CODE_MODAL":
            return {...state, validationCodeModalOpen: !state.validationCodeModalOpen};
        case "IS_LOADING":
            return {...state, isLoading: action.payload};
        case "SET_POSTS_BY_CITY":
            return {...state, postsByCity: action.payload};
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function LayoutProvider({children}) {
    var [state, dispatch] = React.useReducer(layoutReducer, {
        dropDownOpen: false,
        selectCityModalOpen: false,
        singlePostData: 'ّ',
        cities:[],
        selectedCity: '',
        categories:[],
        loginModalOpen: false,
        validationCodeModalOpen: false,
        isLoading: false,
        postsByCity: [],
    });
    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                {children}
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    );
}

function useLayoutState() {
    var context = React.useContext(LayoutStateContext);
    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }
    return context;
}

function useLayoutDispatch() {
    var context = React.useContext(LayoutDispatchContext);
    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }
    return context;
}

export {
    LayoutProvider,
    useLayoutState,
    useLayoutDispatch,
    setCities,
    getAllCities,
    setSelectedCity,
    setCategories,
    toggleDropDown,
    toggleSelectCityModal,
    refreshSinglePost,
    toggleLoginModal,
    toggleValidationCodeModal,
    setIsLoading,
    setPostsByCity,
    updatePostsByCity,
};

// ###########################################################
function toggleDropDown(dispatch) {
    dispatch({
        type: "TOGGLE_DROP_DOWN_MENU"
    })
}

function toggleSelectCityModal(dispatch) {
    dispatch({
        type: "TOGGLE_SELECT_CITY_MODAL"
    })
}

function refreshSinglePost(dispatch, data) {
    dispatch({
        type: "REFRESH_SINGLE_POST",
        payload: data
    })
}

function setCities(dispatch, data) {
    dispatch({
        type: "SET_CITIES",
        payload: data
    })
}

function setSelectedCity(dispatch, data) {
    dispatch({
        type: "SET_SELECTED_CITY",
        payload: data
    })
}

function setCategories(dispatch, data) {
    dispatch({
        type: "SET_CATEGORIES",
        payload: data
    })
}

function toggleLoginModal(dispatch) {
    dispatch({
        type: "TOGGLE_LOGIN_MODAL"
    })
}

function toggleValidationCodeModal(dispatch) {
    dispatch({
        type: "TOGGLE_VALIDATION_CODE_MODAL"
    })
}
function setPostsByCity(dispatch, data) {
    dispatch({
        type: "SET_POSTS_BY_CITY",
        payload: data
    })
}
function setIsLoading(dispatch, data) {
    dispatch({
        type: "IS_LOADING",
        payload: data
    })
}
function getAllCities(dispatch,callback) {
    getAllCitiesApi((isOk,data) => {
        if(!isOk) {
            alert(data);
            callback(false);
        }
        else {
            dispatch({
                type: "SET_CITIES",
                payload: data
            });
            callback(true)
        }
    });
}
function updatePostsByCity(dispatch,city,callback) {
    getPostsByCityApi(city,(isOk,data) => {
        if(!isOk) {
            alert(data);
            callback(false);
        }
        else {
            dispatch({
                type: "SET_POSTS_BY_CITY",
                payload: data
            });
            callback(true)
        }
    });
}





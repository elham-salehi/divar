import React from "react";


var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();


function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DROP_DOWN_MENU":
      return {...state, dropDownOpen: !state.dropDownOpen};
    case "TOGGLE_SELECT_CITY_MODAL":
      return {...state, selectCityModalOpen: !state.selectCityModalOpen};
    case "REFRESH_SINGLE_POST":
        return {...state, singlePostData:  action.payload};
    case "SELECTED_CITY":
        return {...state, selectedCity:  action.payload};
        case "TOGGLE_LOGIN_MODAL":
          return {...state, loginModalOpen: !state.loginModalOpen};
      case "TOGGLE_VALIDATION_CODE_MODAL":
          return {...state, validationCodeModalOpen: !state.validationCodeModalOpen};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({children}) {
  var [state, dispatch] = React.useReducer(layoutReducer, {
      dropDownOpen:false,
      selectCityModalOpen:false,
      singlePostData: 'ّ',
      selectedCity: '',
      loginModalOpen: false,
      validationCodeModalOpen: false
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

export {LayoutProvider, useLayoutState, useLayoutDispatch, toggleDropDown,toggleSelectCityModal,refreshSinglePost,toggleLoginModal,toggleValidationCodeModal};

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
function refreshSinglePost(dispatch,data) {
    dispatch({
        type: "REFRESH_SINGLE_POST",
        payload: data
    })
}
export function selectCity(dispatch, data) {
    dispatch({
        type: "SELECTED_CITY",
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




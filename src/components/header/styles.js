import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
    
    header: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        padding: "0 15px 0 15px",
        width: '100%',
        height: 65,
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 12%)!important",
        flexWrap: 'nowrap!important',
        zIndex: 999

    },

    logo: {
        width: 48,
        height: 48,
        marginLeft: '8px',
    },
    selectCityButton: {
        width: 120,
        height: 40,
        color: "rgb(0 0 0 / 56%)!important",
        border: "1px solid transparent!important",
        borderRadius: "3px!important",
        textAlign: "right",
        fontSize: ".875rem!important",
        fontWeight: "500!important",
        whiteSpace: "nowrap",
        '&:hover': {
            color: "rgb(0 0 0 / 87%)!important"
        },
        '&:focus': {
            color: "rgb(0 0 0 / 87%)!important"
        }

    },
    expandMore: {
        position: "absolute",
        left: 0,
        backgroundColor: "rgb(244 244 244)",
        height: "100%!important",
        width: "35%!important",
        textAlign: "center",
        fontSize: "12px!important",
        fontWeight: "400!important"
    },
    modal: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',

    },
    paper: {
        height:"100vh",
        overflowY:"scroll",
        flexWrap: "nowrap!important",
        '&::-webkit-scrollbar': {
            display: 'block',
            width: 14,
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.12)',
            borderRadius: 12,
            border: "4px solid hsla(0,0%,100%,.98)",
            backgroundClip: "padding-box",
            height:40
        },
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        maxWidth: "65vw",
        borderRadius: '3px!important',
        color: "#424242",
        fontSize: "1.1rem!important",
        fontWeight: 400,
        '&:focus': {
            outlineStyle: "none"
        }
    },
    modalHeader: {
        fontSize: "1.2rem!important",
        fontWeight: 700,
        padding: '20px',

    },
    modalTitle: {
        flex: 1
    },
    modalBody: {
        padding: '0 20px',
    },
    searchInput: {
        paddingRight: 5,
        display: "flex",
        height: '100%',
        width: '100%',
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '3px',
        color: "#c9c9c9!important",
        outline: 'none',
    },
    inputBaseFocused: {
        borderColor: '#85b7d9!important',
        background: '#fff!important',
        color: 'rgba(0,0,0,.8)!important',
        boxShadow: 'none'
    },
    cityGroupHeader: {
        padding: '20px 0',

    },
    cities: {
        margin: "20px 0 50px!important",
        width: "100%",
    },
    cityButton: {
        backgroundColor: "#fff!important",
        color: "#a62626!important",
        border: "1px solid #a62626",
        borderRadius: "3px",
        padding: "8px 5px",
        textAlign: "center",
        fontSize: "1em",
        fontWeight: 400,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        '&:hover': {
            backgroundColor: "#a62626!important",
            color: "#fff!important",
            border: "1px solid #fff",
            borderRadius: "3px",
        },


    },
    cityItem: {
        [theme.breakpoints.up("xs")]:{
            width: "calc(50% - 1.5em)",
            margin: ".75em!important",
        },
        [theme.breakpoints.up("sm")]:{
            width: "calc(33.33333% - 1.5em)",
            margin: ".75em!important",
        },
        [theme.breakpoints.up("md")]:{
            width: "calc(20% - 1.5em)",
            margin: ".75em!important",
        },
    },
    fabExpand: {
        backgroundColor: "#fff!important",
        fontSize: "1.1rem!important",
        color: 'rgba(0,0,0,.56)!important',
        boxShadow: 'none!important',
        border: "1px solid rgba(0,0,0,.56)!important",
        borderRadius: "3px!important",
        width: '90px!important',
        marginRight: "1rem!important"
    },
    expandMoreIcon: {
        marginRight: "8px"
    },
    rightHeader: {
        flex: "50%",
        flexWrap: "nowrap!important"
    },
    divider: {
        margin: "0 8px!important",
        height: "1.5rem!important",
        width: "1px!important"
    },
}));

export default useStyle;
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({
    label: {
        display: 'block',
    },
    selectCityInput: {
        width: '100%',
        lineHeight:2,
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '3px',
        color: "#c9c9c9!important",
        outline: 0,
        '&:active': {
            borderColor: 'rgba(0,0,0,.3)!important',
            background: '#fafafa!important',
            color: 'rgba(0,0,0,.87)!important',
            boxShadow: 'none',
        },
        '&:focus': {
            borderColor: '#85b7d9!important',
            background: '#fff!important',
            color: 'rgba(0,0,0,.8)!important',
            boxShadow: 'none'
        }

    },
    listbox: {
        width: '100%',
        margin: 0,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        listStyle: 'none',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 200,
        border: '1px solid rgba(0,0,0,.25)',
        '& li': {
          padding: 10
        },
        '& li[data-focus="true"]': {
            backgroundColor: '#4a8df6',
            color: 'white',
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: '#2977f5',
            color: 'white',
        },
    },

    root: {
        overflowY:"auto"
    },
    cityAutoComplete: {
        position: 'relative',
        width: '100%',
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "4rem",
        maxWidth: 400,
        [theme.breakpoints.up("md")]:{
            display: 'none',
        },
    },
    descriptionContainer: {
        [theme.breakpoints.up("md")]:{
            flex:1,
            backgroundColor: "#f5f5f5",
            alignItems: "center",
        },

    },
    cityContainer: {
        backgroundColor: "#fff",
        [theme.breakpoints.up("md")]:{
            flex:2,
        },
        [theme.breakpoints.down("md")]:{
            display: 'none',
        },

    },
    description: {
        fontSize: "16px!important",
        margin:"80px 90px 40px 40px",
    },
    divider: {
        backgroundColor: "#ededed",
        margin: "2rem 0",
    },
    socialMediaLink: {
        width:30,
        height:30,
        backgroundColor: '#a62626',
        color:'#fff',
        borderRadius: 3,
        textAlign: "center",
        lineHeight: 2.5,
        margin: "0 4px"
    },
    paper: {
        height:"auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        maxWidth: "45rem",
        borderRadius: '3px!important',
        color: "#424242",
        fontSize:"1.1rem!important",
        fontWeight:400,
        '&:focus': {
            outlineStyle: "none"
        }
    },
    modalHeader: {
        fontSize:"1.2rem!important",
        fontWeight: 700,
        padding: '20px'
    },
    modalTitle: {
        flex:1
    },
    modalBody: {
        padding: '0 20px'
    },
    inputContainer:{
        margin: "0 .75em",
    },
    searchInput: {
        paddingRight:5,
        display:"flex",
        height:'100%',
        width: '100%',
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '3px',
        color: "#c9c9c9!important",
        outline: 0,
        '&:active': {
            borderColor: 'rgba(0,0,0,.3)!important',
            background: '#fafafa!important',
            color: 'rgba(0,0,0,.87)!important',
            boxShadow: 'none',
        },
        '&:focus': {
            borderColor: '#85b7d9!important',
            background: '#fff!important',
            color: 'rgba(0,0,0,.8)!important',
            boxShadow: 'none'
        }

    },
    cityGroupHeader: {
        padding: '20px 0',
        margin: "0 .75em",
    },
    cities: {
        margin: "20px 0 50px!important",
        width:"100%"


    },
    cityButton:{
        backgroundColor:"#fff!important" ,
        color: "#a62626!important",
        border: "1px solid #a62626",
        borderRadius:"3px",
        padding:"8px 5px",
        textAlign:"center",
        fontSize: "1em",
        fontWeight:400,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        '&:hover': {
            backgroundColor: "#a62626!important",
            color:"#fff!important",
            border: "1px solid #fff",
            borderRadius:"3px",
        },


    },
    cityItem:{
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

}));

export default useStyle;
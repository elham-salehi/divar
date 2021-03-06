import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({
    root: {
        overflowY:"auto"
    },
    label: {
        display: 'block',
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
        flex:2,
    },
    description: {
        fontSize: "16px!important",
        margin:"80px 80px 0 25px",
        color: "rgb(0 0 0 / 87%)"
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
        flex:1,
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: '1.125rem',
        color: 'rgba(0,0,0,.87)'
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
    },
    inputBaseFocused: {
        borderColor: '#85b7d9!important',
        background: '#fff!important',
        color: 'rgba(0,0,0,.8)!important',
        boxShadow: 'none'
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
    autoComplete: {
        padding: '50px 50px 0 50px',
    }

}));

export default useStyle;
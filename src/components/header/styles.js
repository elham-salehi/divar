import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    root: {
        backgroundColor: '#fff',

    },
    contentHeader:{
        padding: "15px 15px 0 15px",
    },
    scrolled: {
        position: "fixed",
        width: '100%',
        backgroundColor: '#fff',
        zIndex:999
    },
    logo: {
        width: '48px'
    },
    selectCityButton:{
        position:"relative",
        width:150,
        color:"rgb(0 0 0 / 56%)!important",
        border:"1px solid transparent!important",
        borderRadius:3,
        textAlign:"right",
        fontSize:".875rem!important",
        fontWeight: "500!important",
        lineHeight:2
    },
    expandMore:{
        position: "absolute",
        left:0,
        backgroundColor:"rgb(244 244 244)",
        height:"100%!important",
        width:"35%!important",
        textAlign:"center",
        fontSize:"12px!important",
        fontWeight: "400!important"

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height:"100vh",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        maxWidth: "52.5rem",
        borderRadius: '3px!important',
        color: "#424242",
        fontSize:"1.1rem!important",
        fontWeight:400,
        overflow:"auto",
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
    searchInput: {
        paddingRight:5,
        display:"flex",
        height:'100%',
        width: '100%',
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '3px',
        color: "#c9c9c9!important"
    },
    cityGroupHeader: {
        padding: '20px 0'
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
        width: "calc(20% - 1em)",
        margin: ".875em .5em!important",
    },
    fabExpand:{
        backgroundColor:"#fff!important",
        fontSize:"1.1rem!important",
        color:'rgba(0,0,0,.56)!important',
        boxShadow:'none!important',
        border:"1px solid rgba(0,0,0,.56)!important",
        borderRadius:"3px!important",
        width:'90px!important',
        marginRight:"1rem!important"
    },
    expandMoreIcon:{
        marginRight:"8px"
    },
    rightHeader: {
        flex:1
    },
    navItem: {
        fontSize: "14px!important",
        padding: "0 10px",
    },
    navButton: {
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
        margin: "0 10px!important",
    },
    divider: {
        marginTop:"15px!important"
    }
}));

export default useStyle;
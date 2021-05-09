import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({
    root: {
        overflowY:"auto"
    },
    descriptionContainer: {
        flex:1,
        backgroundColor: "#f5f5f5",
    },
    cityContainer: {
        flex:2,
        backgroundColor: "#fff"
    },
    description: {
        fontSize: "14px!important",
        margin:"80px 90px 40px 40px",
    },
    divider: {
        backgroundColor: "rgb(0 0 0 / 12%)",
        marginBottom: ".5rem",
        width:"80%",
    },

    paper: {
        height:"auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        maxWidth: "52.5rem",
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

}));

export default useStyle;
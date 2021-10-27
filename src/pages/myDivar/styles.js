import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    myTabs: {
        backgroundColor: '#fff',
        width:"100%",
        lineHeight:1.5,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem 0",
    },

    tabItem: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        padding: ".85714286em 1.14285714em!important",
        width: '25%',
        borderBottom:"2px solid rgba(0,0,0,.12)",
        marginBottom:0,
        fontSize: ".875rem!important",
        fontWeight: "700!important",
        fontFamily: "IRANSans!important",
        "&:hover":{
            color: "rgba(0,0,0,.87)"
        },
        [theme.breakpoints.down("sm")]:{
            fontSize: ".575rem!important",
            fontWeight: "500!important",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: ".675rem!important",
            fontWeight: "500!important",
        },
        [theme.breakpoints.between("md","lg")]:{
            fontSize: ".775rem!important",
            fontWeight: "700!important",
        },
        [theme.breakpoints.up("lg")]:{
            fontSize: ".875rem!important",
            fontWeight: "700!important",
        },
    },

})
);

export default useStyle;
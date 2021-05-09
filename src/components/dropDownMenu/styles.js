import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    root: {
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
    menuIcon:{
        border: "1px solid #bdbdbd!important",
        borderRadius: "3px!important",
        width: "54px!important",
        height: "40px!important",
        padding: "6px 0 0!important",
    }
}));

export default useStyle;
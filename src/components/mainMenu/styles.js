import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    root: {
        flex:2,
    },
    navItem: {
        fontSize: "14px!important",
        fontWeight:400,
        padding: "0 12px",
        color: 'rgb(79 79 79)'
    },
    navButton: {
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
        margin: "0 10px!important",
    }
}));

export default useStyle;
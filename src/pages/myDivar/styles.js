import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width:"100%",
        maxWidth:"700px!important",
        lineHeight:1.5,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1em 0",
    },

    tabItem: {
        padding: ".85714286em 1.14285714em!important",
        width: '25%',
        borderBottom:"2px solid rgba(0,0,0,.12)",
        marginBottom:0,
        fontSize: ".875rem!important",
        fontWeight: "700!important",
        fontFamily: "IRANSans!important",
        "&:hover":{
            color: "rgba(0,0,0,.87)"
        }
    },

})
);

export default useStyle;
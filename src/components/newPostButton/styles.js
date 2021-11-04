import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    newPost: {
        flex:"7%",
        marginRight: 10,
        [theme.breakpoints.down(1100)]:{
            flex: "45%"
        },
    },
    newPostBtn: {
        whiteSpace:"nowrap",
        fontWeight:"500!important",
        fontSize: ".875rem!important",
        boxShadow: "none!important",
        height: 40
    }
}));

export default useStyle;
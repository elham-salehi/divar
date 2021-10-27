import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    newPost: {
        marginLeft: "10px!important",
        flex:"8%",
    },
    newPostBtn: {
        whiteSpace:"nowrap",
        fontWeight:"500!important",
        fontSize: ".875rem!important",
        boxShadow: "none!important",
    }
}));

export default useStyle;
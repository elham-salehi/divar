import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    newPost: {
        margin: "0 10px!important",
        flex:"10%",
    },
    newPostBtn: {
        whiteSpace:"nowrap",
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
    }
}));

export default useStyle;
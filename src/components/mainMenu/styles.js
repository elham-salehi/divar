import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    mainMenu: {
        flex:"43%",
        flexWrap: 'nowrap!important'
    },
    navItem: {
        height: 40,
        fontSize: ".75rem",
        fontWeight:500,
        color: 'rgb(0 0 0 / 56%)!important',
        whiteSpace: "nowrap",
        "&:hover": {
            color: "rgb(0 0 0 / 87%)!important"
        },
        "&:focus": {
            color: "rgb(0 0 0 / 87%)!important"
        }
    },

}));

export default useStyle;
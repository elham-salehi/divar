import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    mainMenu: {
        flex:"40%",
        flexWrap: 'nowrap!important'
    },
    navItem: {
        fontSize: ".75rem",
        fontWeight:500,
        color: 'rgb(0 0 0 / 56%)',
        whiteSpace: "nowrap",
        "&:hover": {
            color: "rgb(0 0 0 / 87%)"
        },
        "&:focus": {
            color: "rgb(0 0 0 / 87%)"
        }
    },

}));

export default useStyle;
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    mainMenu: {
        flex:"40%",
        flexWrap: 'nowrap!important'
    },
    navItem: {
        fontSize: ".75rem!important",
        fontWeight:400,
        color: 'rgb(79 79 79)',
        whiteSpace: "nowrap"
    },

}));

export default useStyle;
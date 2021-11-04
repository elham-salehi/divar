import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    root: {
        flex:1
    },
    navButton: {
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
        margin: "0 10px!important",
    },
    dropdownMenu: {
        position: "relative",
        flex: '5%',
        marginRight: "10px"
    },
    dropdownButton: {
        position: "relative",
        borderRadius: "3px!important",
        minWidth: "40px!important",
        height: "40px!important",
    },
    dropdownContainer: {
        position: "relative",
    },
    dropdownList: {
        position: "absolute!important",
        top: 2,
        left:0,
        listStyleType: "none",
        margin:0,
        padding:0,
        border: "1px solid #bdbdbd!important",
        width: 150,
        backgroundColor: "#fff",
        '& li': {
            fontSize: "14px!important",
            whiteSpace: 'nowrap',

        }
    },
   dropdownLink: {
        width: '100%!important',
       color: 'rgb(0 0 0 / 56%)',
       '& span': {
            justifyContent: 'right!important'
       },
       "&:hover": {
           color: "rgb(0 0 0 / 87%)"
       },
       "&:focus": {
           color: "rgb(0 0 0 / 87%)"
       }
 }
}));

export default useStyle;
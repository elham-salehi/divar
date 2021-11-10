import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
    
    footer: {
        marginTop: 128,
        padding: "16px",
        lineHeight: 1,
        fontSize: ".625rem!important",
        backgroundColor: '#fff',
        width: '100%',
        flexWrap: "nowrap",
    },
    logo: {
        marginLeft: 32,
    },
    footerLink: {
        color: "rgba(0,0,0,.32)!important",
        transition: "color .36s ease",
        "&:hover": {
            color: "rgb(0 0 0 / 56%)!important"
        }
    },
    footerSocialLink: {
        marginRight: 16,
    },
    divider: {
        margin: "0 8px!important",
        height: "16px!important",
        width: "1px!important"
    },
}));

export default useStyle;
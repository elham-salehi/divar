import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width:"100%",
        lineHeight:1.5,
        padding: "1rem",
        marginRight: "auto",
        marginLeft: "auto",
        [theme.breakpoints.down("md")]:{
            maxWidth: "100%"
        },
        [theme.breakpoints.between("md","lg")]:{
            maxWidth: "70%"
        },
        [theme.breakpoints.up("lg")]:{
            maxWidth: "50%"
        },

    },

    tabItem: {
        padding: ".85714286em 1.14285714em!important",
        borderBottom:"2px solid rgba(0,0,0,.12)",
        marginBottom:0,
        fontSize: ".875rem!important",
        fontWeight: "700!important",
        fontFamily: "IRANSans!important",
        "&:hover":{
            color: "rgba(0,0,0,.87)"
        }
    },
    loginMessage: {
        textAlign:"center",
        fontWeight:"700",
        marginTop:"1.75rem",

    },
    loginBtn: {
        marginTop: "2em",
        fontWeight:"500!important",
        fontSize: "1rem!important",
        boxShadow: "none!important",
        fontFamily: "IRANSans!important",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        height:"60vh",
        backgroundColor: theme.palette.background.paper,
        maxWidth: "27.5rem",
        borderRadius: '3px!important',
        color: "#424242",
        fontSize:"1.1rem!important",
        fontWeight:400,
        overflow:"auto",
        '&:focus': {
            outlineStyle: "none"
        }
    },
    modalHeader: {
        fontSize:"1.2rem!important",
        fontWeight: 700,
        padding: '36px'
    },
    modalTitle: {
        flex:1
    },
    divider: {
        backgroundColor: "rgb(0 0 0 / 12%)!important",
        marginBottom: ".5rem",
    },
    modalContent: {
    },
    modalBody: {
        padding: "32px",
        height: "36vh"
    },
    modalBodyTitle: {
        fontSize:"1rem!important",
        fontWeight: "500!important",
        paddingBottom: "1rem"
    },
    modalBodyText: {
        color: "rgba(0,0,0,.56)",
        whiteSpace: "pre-line",
        fontSize: ".875rem!important",
        fontWeight: "400!important",
        paddingBottom: "1rem"
    },
    phoneNumber:{
        position:"relative"
    },
    phoneInput:{
        width:"100%",
        paddingLeft: "58px",
        paddingRight: "16px",
        height: "2.5rem",
        lineHeight: "2.5rem",
        fontSize: "1rem",
        borderRadius: "4px",
        border: "1px solid rgb(0 0 0 / 24%)",
        color: "rgb(0 0 0 / 87%)",
        transition:"color .15s ease,border-color .15s ease,box-shadow .15s ease",
        "&:focus": {
            borderColor:"rgba(166,38,38,.56)",
            boxShadow :"inset 0 0 0 1px rgb(166 38 38) ",
            outline: "none"
        }
    },
    preNumber: {
        backgroundColor:"rgba(0,0,0,.04)",
        color:"rgba(0,0,0,.87)",
        fontSize:".75rem",
        borderRadius:"12px",
        padding:"0 12px",
        marginTop:"8px",
        position: "absolute",
        height: "24px",
        lineHeight:"24px",
        left: "8px",
        top: "0"
    },
    modalFooter: {
        position:"relative"
    },
    validationCodeBtn: {
        position: "absolute",
        marginLeft: "1em",
        fontWeight:"500!important",
        fontSize: "1rem!important",
        boxShadow: "none!important",
        fontFamily: "IRANSans!important",
        top:0,
        left:0
    }

}));

export default useStyle;
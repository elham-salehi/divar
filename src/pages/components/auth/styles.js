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
        fontFamily: "shabnam!important",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        minHeight: '50vh',
        maxWidth: "480px",
        overflowY: 'hidden',
        borderRadius: '3px!important',
        color: "#424242",
        fontSize:"1.1rem!important",
        fontWeight:400,

        '&:focus': {
            outlineStyle: "none"
        }
    },
    modalHeader: {
        fontSize:"1.2rem!important",
        fontWeight: 700,
        padding: '32px',
        minHeight: "50px",
    },
    modalTitle: {
        flex:1
    },
    divider: {
        backgroundColor: "rgb(0 0 0 / 12%)!important",
        marginBottom: ".5rem",
    },
    modalContent: {
        height: "32vh",
        overflowY: "scroll",
        '&::-webkit-scrollbar': {
            width: 14,
            height:14

        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.12)',
            borderRadius: 12,
            border: "4px solid hsla(0,0%,100%,.98)",
            backgroundClip: "padding-box"
        },

    },
    modalBody: {
        padding: "8px 32px 0 32px",
    },
    modalBodyTitle: {
        fontSize:"1rem!important",
        fontWeight: "500!important",

    },
    modalBodyText: {
        color: "rgba(0,0,0,.56)",
        whiteSpace: "pre-line",
        fontSize: ".875rem!important",
        fontWeight: "400!important",
        paddingBottom: "2rem"
    },
    phoneNumber:{
        position:"relative",
        paddingBottom: '1rem'
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
        position:"relative",
        minHeight: "50px",
    },
    validationCodeBtn: {
        position: "absolute",
        marginLeft: "1em",
        fontWeight:"500!important",
        fontSize: "1rem!important",
        boxShadow: "none!important",
        fontFamily: "shabnam!important",
        top:0,
        left:0
    }

}));

export default useStyle;
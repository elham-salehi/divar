import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    newPost: {
        backgroundColor: '#fff',
        width:"100%",
        maxWidth:"512px!important",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "2rem",

    },
    title: {
        fontSize: "1.25rem",
        color: "#303030",
        padding: "1rem 0",
        margin: 0,
        lineHeight: 1.5,
        fontWeight: 500,
    },
    imageUploader:{
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginTop: "5px"
    },
    imageUploaderPreview: {
        width: "6rem",
        height: "6rem",
        position: "relative",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "4px",
        margin: "0 0 1rem 1rem"
    },
    imageUploaderItem: {
        position: "relative",
        cursor: "pointer",
        height: "6rem",
        width: "6rem",
        margin: "0 0 1rem 1rem",
    },
    imageUploaderBorder: {
        width: "100%",
        height: "100%",
        opacity: 0.24,
        WebkitTransition: "opacity .36s ease",
        transition: "opacity .36s ease",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
        '&:hover': {
            opacity: .48,
        }
    },
    imageUploaderIcon: {
        position: "absolute",
        top: "50%",
        left: "50%",
        WebkitTransition: "color .36s ease",
        transition: "color .36s ease"
    },
    imageIcon: {
        WebkitTransform: "translate(-50%,-50%)",
        transform: "translate(-50%,-50%)",
        color: "rgba(0,0,0,.24)",
        '&:hover': {
            opacity: .48,
        }
    },
    addCircleIcon: {
        WebkitTransform: "translateY(-1.25rem)",
        transform: "translateY(-1.25rem)",
        color: "#be3737",
        backgroundColor: "#fff",
        borderRadius: "50%"
    },
    label:{
        color: "rgba(0,0,0,.87)",
        fontSize: "1rem",
        lineHeight: 2,
        paddingTop: "1rem",
        paddingBottom: ".5rem",
        fontWeight: 500
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        marginTop: ".625rem",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        outline: "0",
        width: "100%",
        lineHeight: 1.5,
        fontSize: "1rem",
        borderRadius: "4px",
        border: "1px solid rgba(0,0,0,.24)",
        color: "rgba(0,0,0,.87)",
        WebkitTransition:
            "color .15s ease,border-color .15s ease,box-shadow .15s ease",
        transition: "color .15s ease,border-color .15s ease,box-shadow .15s ease",
        '&:active': {
            borderColor: 'rgba(0,0,0,.3)!important',
            background: '#fafafa!important',
            color: 'rgba(0,0,0,.87)!important',
            boxShadow: 'none',
        },
        '&:focus': {
            borderColor: '#85b7d9!important',
            background: '#fff!important',
            color: 'rgba(0,0,0,.8)!important',
            boxShadow: 'none'
        }
    },
    descriptionArea: {
        marginTop: ".625rem",
        height:"100px!important",
        overflow:"hidden",
        color: "rgba(0,0,0,.87)",
        background: "none",
        minHeight: "7.5rem",
        padding: ".5rem 1rem",
        display: "block",
        outline: 0,
        width: "100%",
        resize: "none",
        lineHeight: 1.5,
        fontWeight: 400,
        fontSize: "1rem",
        '&:active': {
            borderColor: 'rgba(0,0,0,.3)!important',
            background: '#fafafa!important',
            color: 'rgba(0,0,0,.87)!important',
            boxShadow: 'none',
        },
        '&:focus': {
            borderColor: '#85b7d9!important',
            background: '#fff!important',
            color: 'rgba(0,0,0,.8)!important',
            boxShadow: 'none'
        }

    },
    helpMessage: {
        color: "rgba(0,0,0,.56)",
        fontSize: ".875rem",
        marginTop: ".625rem",
        lineHeight: 2,
        backgroundColor: "transparent",
        border: "0",
        padding: "0",
        whiteSpace: "pre-line"
    },
    submitBtn: {
        paddingTop: "2rem",
        justifyContent: "flex-end"
    },
    btnContainer:{
        marginRight: "1rem!important",
    },
    button:{
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
        padding:"0 1rem",
        height: "2.5rem"
    },
    cancelBtn: {
        color:"rgb(0 0 0 / 56%)",
        backgroundColor: "transparent",
    },

}));

export default useStyle;
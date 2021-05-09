import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles({
    root: {
        backgroundColor: '#fff',
        width:"100%",
        maxWidth:"1024px!important",
        marginLeft: "auto",
        marginRight: "auto"
    },

    divider: {
        backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
    breadCrumbs: {
         fontSize:".75rem!important",
        fontWeight: "400!important",
        padding:20,
        color:"rgb(0 0 0 / 56%)",
        textAlign:"center"
    },
    postDetails: {
        flex:1,
        paddingLeft:100
    },
    postNote: {
        flex:1
    },
    postSubtitle: {
        margin: ".5rem 0 1rem",
        color: "rgba(0,0,0,.56)",
        fontWeight:400,
        lineHeight: 2,
        fontSize:".875rem"
    },
    btnContainer:{
        marginLeft: "7px!important",
    },
    iconBtnContainer:{
        marginRight: "60px!important",
    },
    button:{
        fontWeight:"500!important",
        fontSize: "18px!important",
        boxShadow: "none!important",
        minWidth:"125px"
    },
    chatBtn: {
        color:"rgb(0 0 0 / 56%)",
        backgroundColor: "transparent",
    },
    postPrice: {
        margin: "1.5rem 0 1rem",
        fontSize: "1rem",
        whiteSpace: "nowrap",

    },
    priceLabel:{
        minWidth:"20%",
        color:"rgb(0 0 0 / 56%)",
        flex:1
    },
    price:{
        flex:1,
        // minWidth: "calc(50% - 3rem)",
        // maxWidth:"unset",
        marginRight:"6rem"
    },
    postDescription:{
        margin: "1.5rem 0 1rem",
    },
    descriptionLabel:{
        color: "rgba(0,0,0,.87)",
        fontSize: "1.125rem!important",
        fontWeight: 500,
        lineHeight: 1.5
    },
    description:{
        minHeight: "48px",
        padding: ".5rem 0",
        display: "flex",
        justifyContent: "space-between",
        color: "rgba(0,0,0,.87)",
        fontSize: "1rem!important",
        fontWeight: 400,
        lineHeight: 2,
        whiteSpace: "normal"
    },
    postImage:{
        width:488
    },
    image:{
      width:"100%",
        height:"100%",
    },
    note:{
      margin:".5rem 0 2rem"
    },
    noteArea: {
        width:"100%",
        padding:10,
        height:"100px!important",
        overflow:"hidden",

    },
    noteHint: {
        fontSize:".75rem!important",
        color:"rgb(0 0 0 / 56%)"
    }


});

export default useStyle;
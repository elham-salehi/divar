import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    root: {
        padding:'10px!important',

    },
    postItem: {
        border: "1px solid #ebebeb",
        borderRadius:"4px",
        flexWrap: "nowrap",

    },
    postImg: {
       textAlign:"left",
        padding:10,
        flex:1
    },
    postThumbnail: {
        width:"136px",
       height:"136px",

   },
    imageBlock: {
        backgroundColor: "rgb(0 0 0 / 4%)",
        color: "rgba(0,0,0,.32)",
        width:"136px",
        height:"136px",

    },
    postRight:{
        padding:'0 10px',
        flex:1,

    },
    postDetails: {
        width:133,
        height:136,
        position:"relative",
        [theme.breakpoints.up("md")]:{
            width:168,
        },
        [theme.breakpoints.up("lg")]:{
            width:133,
        },



    },
    postTitle:{
        position:"absolute",
        top:10,

    },
    postCaption:{
        position:"absolute",
        bottom: -10,
        color:theme.palette.text.hint,
    },
    timeTypography:{
        fontSize:".75rem!important",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
    },
    captionTypography:{
      fontSize:".75rem!important",
      flexWrap: "nowrap",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },


}));

export default useStyle;

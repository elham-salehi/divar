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
    postRight:{
        padding:'0 10px',
        flex:1,

    },
    postDetails: {
        width:300,
        height:136,
        position:"relative",
        [theme.breakpoints.up("md")]:{
            width:230,
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
        bottom:-10,
        color:theme.palette.text.hint,
    },
    captionTypography:{
      fontSize:"13px!important"
    },


}));

export default useStyle;

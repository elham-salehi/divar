import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
   switchFilter: {
      position:"absolute",
      right:210
   },
   formControl:{
      width: "100%!important",
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));

export default useStyle;
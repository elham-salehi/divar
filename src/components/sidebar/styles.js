import {makeStyles} from "@material-ui/styles";



const useStyle = makeStyles(theme => ({

    root: {
        position:"absolute",
        width: '280px',

        paddingLeft:"30px",
        paddingRight: "10px",
    },
    sidebar: {
      position:"fixed",
      transform :({ p }) => `translate(0, -${p}px)`,
        width: '280px',
    },

    categoriesTitle: {
        padding: 20,
        color: 'rgba(0,0,0,0.87)'
    },
    catStyle: {
        color:"rgba(0,0,0,.56)!important",
        padding:12,

    },
    catName: {
        fontSize:"14px!important",
        marginRight: 7
    },
    catIcon: {
        fontSize:"7px!important"
    },
    divider: {
     height:2,
    backgroundColor:"rgba(0,0,0,.12)",
    }

}));

export default useStyle;
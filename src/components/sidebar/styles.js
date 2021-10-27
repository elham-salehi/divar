import {makeStyles} from "@material-ui/styles";



const useStyle = makeStyles(theme => ({

    sidebar: {
        width: '280px',
        backgroundColor: '#fff',
        paddingLeft:"30px",
        paddingRight: "10px",
    },
    fixSidebar: {
      position:"fixed",
      transform :({ p }) => `translate(0, -${p}px)`,
        width: '280px',
    },

    categoriesTitle: {
        padding: "1.75rem 0",
        color: 'rgba(0,0,0,0.87)'
    },
    catStyle: {
        padding: "6px 0",
        lineHeight: 2,
        transition: "color .36s ease",
        cursor: "pointer",
        color:"rgba(0,0,0,.56)!important",
        whiteSpace: "nowrap",
        width: '100%',
        textAlign: "right",
        "&:hover": {
            color: "rgb(0 0 0 / 87%)!important"
        }
    },
    catName: {
        fontSize:"0.875!important",
        marginRight: 7
    },
    catIcon: {
        fontSize:"0.875rem!important"
    },
    divider: {
     height:2,
     backgroundColor:"rgba(0,0,0,.12)",
    }

}));

export default useStyle;
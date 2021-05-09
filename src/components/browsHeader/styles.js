import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({

    root: {
        backgroundColor: '#fff',
        padding: 15,

    },
    formControl:{
        width: "200px!important",

        borderRadius: '2px!important',
        height:"100%"
    },
    selectCat:{
        '&::before': {
            borderBottom:"none!important"
        },
        '&::after': {
            borderBottom:"none!important"
        },
        borderTopLeftRadius: '0px!important',
        borderTopRightRadius: '0px!important',
        height:'100%',
        alignItems:"flex-end",
},
    searchInput: {
    paddingRight:5,
    display:"flex",
        height:'100%',
        width: '100%'

    },
    searchCat: {
        border: "1px solid #bdbdbd !important",
        borderRadius: 2,
        width:"70%",
        height: '100%'
    }
}));

export default useStyle;
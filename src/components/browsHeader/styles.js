import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme=>({
    searchCat: {
        backgroundColor: '#fff',
        border: "1px solid #bdbdbd !important",
        borderRadius: 2,
        lineHeight: 3
    },
    dropdownContainer: {
        position: "relative",
        display: "inline-block"
    },
    searchInputContainer: {
        flex: 2
    },
    dropdownBtn: {
        width: '150px',
        textAlign: 'right',
        whiteSpace: "nowrap",
        boxShadow: 'none',
        borderRadius: 0,
        lineHeight: 3,
        backgroundColor: '#ededed',
        '&:hover':{
            boxShadow: 'none'
        }

    },
    dropdownList: {
        display: 'none',
        position: 'absolute',
        top: '100%',
        textAlign: 'right',
        backgroundColor: '#fafafa',
        with: '100%',
        boxShadow: '0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 20%)',
        borderRadius: '0 3px 3px 0',
        zIndex: 9999,
        transition: 'transform .1s ease-out,-webkit-transform .1s ease-out'
    },
    dropdownItem: {
        color: 'black',
        fontSize: '12px!important',
        padding: '12px 16px',
        textAlign: 'right',
        width: '100%',
        display: 'block',
        whiteSpace: "nowrap",
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: '#ededed',
            color: '#424242'
        }
    },
    selectCat: {
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
        paddingRight:15,
      



    },

}));

export default useStyle;
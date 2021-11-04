import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
    root: {
        position:'fixed',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        zIndex:99
    },
    circles: {
        height:"50px",
        width: "50px",

    },
    bottom: {
        color: `theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]!important`,
        position: 'absolute',

    },
    top: {
        color: '#767676!important',
        animationDuration: '550ms',
        position: 'absolute',


    },
    circle: {
        strokeLinecap: 'round',
    },


}));

export default useStyle;
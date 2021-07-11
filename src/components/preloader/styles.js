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
    container: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        width: 'max-content',
        height:'max-content',
    },
    circles: {
        height:"50px",
        width: "50px",

    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        position: 'absolute',

    },
    top: {
        color: '#767676',
        animationDuration: '550ms',
        position: 'absolute',


    },
    circle: {
        strokeLinecap: 'round',
    },


}));

export default useStyle;
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
    cityAutoComplete: {
        position: 'relative',
        width: '100%',
    },
    selectCityInput: {
        width: '100%',
        lineHeight:2,
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '3px',
        color: "#c9c9c9!important",
        outline: 0,
        '&:active': {
            borderColor: 'rgba(0,0,0,.3)!important',
            background: '#fafafa!important',
            color: 'rgba(0,0,0,.87)!important',
            boxShadow: 'none',
        },
        '&:focus': {
            borderColor: '#85b7d9!important',
            background: '#fff!important',
            color: 'rgba(0,0,0,.8)!important',
            boxShadow: 'none'
        }

    },
    inputBaseFocused: {
        borderColor: '#85b7d9!important',
        background: '#fff!important',
        color: 'rgba(0,0,0,.8)!important',
        boxShadow: 'none'
    },
    listBox: {
        width: '100%',
        margin: 0,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        listStyle: 'none',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 110,
        border: '1px solid rgba(0,0,0,.25)',
        '& li': {
            padding: 10
        },
        '& li[data-focus="true"]': {
            backgroundColor: '#4a8df6',
            color: 'white',
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: '#2977f5',
            color: 'white',
        },
        '&::-webkit-scrollbar': {
            display: 'block',
            width: 14,
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.12)',
            borderRadius: 12,
            border: "4px solid hsla(0,0%,100%,.98)",
            backgroundClip: "padding-box",
            height:40
        },
    }
}));

export default useStyle;
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles(theme => ({
        root: {
            backgroundColor: '#fff',
            width:"100%",
            lineHeight:1.5,
            textAlign: "center"
        },
    myPostItem: {
        padding: ".875rem",
        borderBottom: "1px solid rgba(0,0,0,.08)",
        flexWrap: "nowrap",


    },
    myPostImg: {
        width:"80px",
        height:"80px",
        textAlign:"right",
        marginLeft: "15px",
    },
    myPostThumbnail: {
       width: '100%',
       height: '100%',
       borderRadius: 5

    },
    myPostInfo : {
        marginTop: 0,
    },
    myPostInfoCol: {
        textAlign: "right"
    },
    myPostTitle: {
        fontWeight: 700,
        fontSize: '.9625rem!important',
        marginBottom: '.4375rem'
    },
    myPostDetails: {
        fontSize: '12px',
        lineHeight: '16px',
        color: '#424242',
        wordBreak: 'break-word',
        whiteSpace: 'pre-line'
    }

    })
);

export default useStyle;